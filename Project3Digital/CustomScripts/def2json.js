function evalRegex(regex, content) {
    var ret = regex.exec(content);
    if (ret) {
        return Array.prototype.slice.call(ret, 1);
    }
}

function parseDEF(content) {
    "use strict";

    var cur, data = [];

    // DIEAREA
    cur = evalRegex(/DIEAREA\s+\(\s+(\S+)\s+(\S+)\s+\)\s+\(\s+(\S+)\s+(\S+)\s+\)\s+;/g, content);
    if (cur) {
        data.push(vsprintf('"die": { "x1": %g, "y1": %g, "x2": %g, "y2": %g }', cur));
    } else {
        data.push('"die": { "x1": 0, "y1": 0, "x2": 0, "y2": 0 }');
    }
    // DIEAREA

    // COMPONENTS
    cur = evalRegex(/COMPONENTS.+;((?:\n|.)+)END COMPONENTS/gm, content);
    if (cur) {
        var component = /\-\s+(\S+)\s+(\S+)[^\(]+\(\s+(\S+)\s+(\S+)/g;
        
        var match, arr = [];
        while ((match = evalRegex(component, cur[0]))) {
            arr.push(vsprintf('{ "name": \"%s\", "type": \"%s\", "x": %g, "y": %g }', match));
        }

        data.push(sprintf('"cells": [%s]', arr.join()));
    }
    // COMPONENTS

    // PINS
    cur = evalRegex(/PINS.+;((?:\n|.)+)END PINS/gm, content);
    if (cur) {
        var component = /- .+ NET (\S+)\n  \+ LAYER (\S+) \( (\S+) (\S+) \) \( (\S+) (\S+) \)\n  \+ (?:PLACED|FIXED) \( (\S+) (\S+) \) (\w)/g;

        var match, arr = [];
        while ((match = evalRegex(component, cur[0]))) {
            arr.push(vsprintf('{ "name": \"%s\", "layer": \"%s\", "x1": %g, "y1": %g, "x2": %g, "y2": %g, "x": %g, "y": %g, "ori": \"%s\" }', match));
        }

        data.push(sprintf('"pins": [%s]', arr.join()));
    }
    // PINS

    //try {
    return JSON.parse(sprintf("{%s}", data.join()));
    //}
    //catch (e) {
    //}
}