var Parsers = function () {
    "use strict";

    var parsers = {};

    function parseRegex(regex, content, fn) {
        var ret = regex.exec(content);
        if (ret) {
            fn(Array.prototype.slice.call(ret, 1));
            return true;
        }
    }

    parsers.readFileFromInput = function (element, callback) {
        var file = element.files[0];

        if (file) {
            // create a new file reader
            var reader = new FileReader();

            // the FileReader is asynchronous, so we set a callback function.
            // when the reader reads
            reader.onload = function (e) {
                callback(e.target.result);
            };

            // actually read the file
            reader.readAsText(file);
        }
    };

    parsers.parseDEF = function (content) {
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
        parseRegex(/COMPONENTS.+;((?:\r?\n|.)+)END COMPONENTS/gm, content, function (matches) {
            var cells = retValue.cells;

            var component = /\-\s+(\S+)\s+(\S+)[^\(]+\(\s+(\S+)\s+(\S+)/g;
            while (parseRegex(component, matches[0], function (m) {
                cells.push({ name: m[0], type: m[1], x: +m[2], y: +m[3] });
            }));
        });
        // COMPONENTS

        // PINS
        parseRegex(/PINS.+;((?:\r?\n|.)+)END PINS/g, content, function (matches) {
            var pins = retValue.pins;

            var component = /- .+ NET (\S+)\r?\n  \+ LAYER (\S+) \( (\S+) (\S+) \) \( (\S+) (\S+) \)\r?\n  \+ (?:PLACED|FIXED) \( (\S+) (\S+) \) (\w)/g;
            while (parseRegex(component, matches[0], function (m) {
                pins.push({ name: m[0], layer: m[1], x1: +m[2], y1: +m[3], x2: +m[4], y2: +m[5], x: +m[6], y: +m[7], ori: m[8] });
            }));
        });
        // PINS

        // NETS
        parseRegex(/^NETS.+;((?:.|\r?\n)+)END NETS$/gm, content, function (matches) {
            matches = matches[0].split(/\r?\n/);

            var nets = retValue.nets;
            for (var i = 0; i < matches.length; ++i) {
                parseRegex(/-\s+(\S+)/g, matches[i], function (n) {
                    var net = { name: n[0], connections: [], routes: [] };
                    var connections = net.connections;
                    var routes = net.routes;

                    for (; i < matches.length; ++i) {
                        parseRegex(/(metal\d)/, matches[i], function (m) {
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

                        parseRegex(/\(\s+(\S+)\s+(\S+)\s+\)/g, matches[i], function (m) {
                            if (m[1] === 'CLK')
                                net.CLOCK = true;

                            connections.push({ name: m[0], pin: m[1] });
                        });

                        if (/\;/.test(matches[i]))
                            break;
                    }

                    if (net.name.toLowerCase().indexOf('clk') != -1)
                        net.CLOCK = true;
                    nets.push(net);
                });
            }
        });
        // NETS

        return retValue;
    };

    return parsers;
}();