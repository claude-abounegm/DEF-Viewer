/// <reference path="main.js" />

// Extension to Raphael, to allow auto sizing of the SVG canvas.
// Use after drawing all your textures.
Raphael.prototype.fitToSize = function () {
    var bbox = this.canvas.getBBox();
    this.setSize(bbox.x + bbox.width + 1, bbox.y + bbox.height + 1);
}