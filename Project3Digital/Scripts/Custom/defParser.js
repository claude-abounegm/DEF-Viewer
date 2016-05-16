var parseDEF = function () {
    function parseRegex(regex, content, fn) {
        var ret = regex.exec(content);
        if (ret) {
            fn(Array.prototype.slice.call(ret, 1));
            return true;
        }
    }

    return function (content) {
        "use strict";

        var retValue = {
            die: { x1: 0, y1: 0, x2: 0, y2: 0 },
            cells: [],
            pins: [],
            nets: []
        };

        // DIEAREA
        parseRegex(/DIEAREA\s+\(\s+(\S+)\s+(\S+)\s+\)\s+\(\s+(\S+)\s+(\S+)\s+\)\s+;/g, content, function (m) {
            retValue.die = { x1: +m[0], y1: +m[1], x2: +m[2], y2: +m[3] };
        });
        // DIEAREA

        // COMPONENTS
        parseRegex(/COMPONENTS.+;((?:\n|.)+)END COMPONENTS/gm, content, function (matches) {
            var cells = retValue.cells;

            var component = /\-\s+(\S+)\s+(\S+)[^\(]+\(\s+(\S+)\s+(\S+)/g;
            while (parseRegex(component, matches[0], function (m) {
                cells.push({ name: m[0], type: m[1], x: +m[2], y: +m[3] });
            }));
        });
        // COMPONENTS

        // PINS
        parseRegex(/PINS.+;((?:\n|.)+)END PINS/gm, content, function (matches) {
            var pins = retValue.pins;

            var component = /- .+ NET (\S+)\n  \+ LAYER (\S+) \( (\S+) (\S+) \) \( (\S+) (\S+) \)\n  \+ (?:PLACED|FIXED) \( (\S+) (\S+) \) (\w)/g;
            while (parseRegex(component, matches[0], function (m) {
                pins.push({ name: m[0], layer: m[1], x1: +m[2], y1: +m[3], x2: +m[4], y2: +m[5], x: +m[6], y: +m[7], ori: m[8] });
            }));
        });
        // PINS

        // NETS
        parseRegex(/^NETS.+;((?:.|\n)+)END NETS$/gm, content, function (matches) {
            matches = matches[0].split(/\r?\n/);

            var nets = retValue.nets;
            for (var i = 0; i < matches.length; ++i) {
                parseRegex(/-\s+(\S+)/g, matches[i], function (n) {
                    var net = { name: n[0], connections: [], routes: [] };
                    var connections = net.connections;
                    var routes = net.routes;

                    for (; i < matches.length; ++i) {
                        var isRoute = parseRegex(/(metal\d)/, matches[i], function (m) {
                            var route = { layer: m[0], coords: [] };
                            var coords = route.coords;

                            var parser = /\(\s+(-?(?:\*|\d+))\s+(-?(?:\*|\d+))\s+\)\s+(\w+)?/g;
                            while (parseRegex(parser, matches[i], function (m) {
                                var x = +m[0], y = +m[1];

                                if (m[0] === '*')
                                    x = coords[coords.length - 1].x;
                                if (m[1] === '*')
                                    y = coords[coords.length - 1].y;

                                coords.push({ x: x, y: y });
                                route.via = m[2];
                            }));

                            routes.push(route);
                        });

                        if (!isRoute) {
                            parseRegex(/\(\s+(\S+)\s+(\S+)\s+\)/g, matches[i], function (m) {
                                connections.push({ name: m[0], pin: m[1] });
                            });
                        }

                        if (/\;/.test(matches[i]))
                            break;
                    }

                    nets.push(net);
                });
            }
        });
        // NETS

        return retValue;
    };
}();