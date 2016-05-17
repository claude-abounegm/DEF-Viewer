/// <reference path="main.js" />
/// <reference path="extensions.js" />

// Extension to Raphael, to allow auto sizing of the SVG canvas.
// Use after drawing all your textures.
Raphael.prototype.fitToSize = function () {
    var bbox = this.canvas.getBBox();
    this.setSize(bbox.x + bbox.width + 1, bbox.y + bbox.height + 1);
}

// used to form a Rahpael path.
function PathArguments(...coords) {
    var args = [];

    this.clear = function () {
        args.length = 0;
    };

    this.addPoint = function (x, y) {
        args.push(args.length === 0 ? 'M' : 'L');
        args.push(x);
        args.push(',');
        args.push(y);
    };

    this.path = function (paper) {
        var ret = $(paper.path(this.toString()).node);
        this.clear();

        return ret;
    };

    this.toString = function () {
        return args.join("");
    };

    for (var i = 0; i < coords.length - 1; i += 2) {
        this.addPoint(coords[i], coords[i + 1]);
    }
}

// from: http://blog.adamcole.ca/2011/11/simple-javascript-rainbow-color.html
// This function generates vibrant, "evenly spaced" colours (i.e. no clustering). 
// This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
// Adam Cole, 2011-Sept-14
// HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
function rainbow(numOfSteps, step) {
    var r, g, b;
    var h = step / numOfSteps;
    var i = ~~(h * 6);
    var f = h * 6 - i;
    var q = 1 - f;
    switch (i % 6) {
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
    }

    var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
    return (c);
}