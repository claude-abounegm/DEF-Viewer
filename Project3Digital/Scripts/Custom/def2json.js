/// <reference path="../sprintf.js" />

var parseDEF = function () {
    function evalRegex(regex, content) {
        var ret = regex.exec(content);
        if (ret) {
            return Array.prototype.slice.call(ret, 1);
        }
    }

    return function parseDEF(content) {
        "use strict";

        var jsonArray = [],
            tempArray = [],
            temp;

        // DIEAREA
        jsonArray.push(function () {
            var temp = evalRegex(/DIEAREA\s+\(\s+(\S+)\s+(\S+)\s+\)\s+\(\s+(\S+)\s+(\S+)\s+\)\s+;/g, content);
            if (temp)
                return vsprintf('"die": { "x1": %g, "y1": %g, "x2": %g, "y2": %g }', temp);

            return '"die": { "x1": 0, "y1": 0, "x2": 0, "y2": 0 }';
        }());
        // DIEAREA

        function parseSubComponents(regex, component, format, name) {
            var temp = evalRegex(regex, content),
                match,
                tempArray = [];

            if (temp) {
                var match;
                while ((match = evalRegex(component, temp[0]))) {
                    tempArray.push(vsprintf(format, match));
                }

                return sprintf('"%s": [%s]', name, tempArray.join());
            }
        }

        // COMPONENTS
        jsonArray.push(parseSubComponents(
            /COMPONENTS.+;((?:\n|.)+)END COMPONENTS/gm,
            /\-\s+(\S+)\s+(\S+)[^\(]+\(\s+(\S+)\s+(\S+)/g,
            '{ "name": \"%s\", "type": \"%s\", "x": %g, "y": %g }',
            'cells'
        ));
        // COMPONENTS

        // PINS
        jsonArray.push(parseSubComponents(
            /PINS.+;((?:\n|.)+)END PINS/gm,
            /- .+ NET (\S+)\n  \+ LAYER (\S+) \( (\S+) (\S+) \) \( (\S+) (\S+) \)\n  \+ (?:PLACED|FIXED) \( (\S+) (\S+) \) (\w)/g,
            '{ "name": \"%s\", "layer": \"%s\", "x1": %g, "y1": %g, "x2": %g, "y2": %g, "x": %g, "y": %g, "ori": \"%s\" }',
            'pins'
        ));
        // PINS

        // NETS
        temp = evalRegex(/^NETS.+;((?:.|\n)+)END NETS$/m, content);
        if (temp) {
            temp = temp[0].split(/\r?\n/);

            for (var i = 0; i < temp.length; ++i) {
                var match = evalRegex(/-\s+(\S+)/, temp[i]);
                if (match) {
                    var str = sprintf('{ "name": \"%s\", "connections": [', match[0]);

                    tempArray.length = 0;
                    for (++i; i < temp.length; ++i) {
                        tempArray.push(temp[i]);

                        if (/\;/.test(temp[i]))
                            break;
                    }

                    str = sprintf('%s%s] }', str, tempArray.join());
                    alert(str);
                }
            }

            //jsonArray.push(sprintf('"nets": [%s]', tempArray.join()));
        }
        // NETS


        //try {
        alert(sprintf("{%s}", jsonArray.join()));
        return JSON.parse(sprintf("{%s}", jsonArray.join()));
        //}
        //catch (e) {
        //}
    };
}();