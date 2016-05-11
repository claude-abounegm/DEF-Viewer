/// <reference path="scllef.js" />
/// <reference path="designdef.js" />
/// <reference path="jquery-2.2.3.js" />
/// <reference path="raphael.js" />
/// <reference path="bootstrap.js" />
/// <reference path="bootstrap-colorpicker.js" />
/// <reference path="jquery.rule.js" />

// Extension to Raphael, to allow auto sizing of the SVG canvas.
// Use after drawing all your textures.
Raphael.prototype.fitToSize = function () {
    var bbox = this.canvas.getBBox();
    this.setSize(bbox.x + bbox.width + 1, bbox.y + bbox.height + 1);
}

$(function () {
    "use strict";

    // the Raphael canvas variable
    var paper;

    -function onLoaded() {
        // initialize raphael with an initial width and height.
        paper = Raphael("canvas_container", 500, 500);

        // the main function to draw the DEF on screen.
        drawDEF();

        // automatically size the bounding box of the SVG
        paper.fitToSize();

        // initialize all popovers
        $('[data-toggle="popover"]').popover({
            container: "body",
            placement: "auto",
            html: true
        });

        // instantiate the color picker, with its 
        $('.picker').each(function (index, element) {
            var $this = $(this);

            $this
                .colorpicker()
                // event to change CSS on color change.
                .on("changeColor", function (e) {
                    $.rule('.highlight.' + $this.data("name"), '#fanous').css("fill", e.color);
                })
                // we set the default value of the colorpicker after creating it
                // to trigger the "changeColor" event. This sets the correct CSS
                // fill color, so we can succesfully highlight the items afterwards.
                .colorpicker('setValue', $this.data("color"));
        });

        // this is used to toggle the arrow up and down in the accordion
        $("#accordion").on('hidden.bs.collapse shown.bs.collapse', function (e) {
            $(e.target)
                .prev('.panel-heading')
                .find("i.indicator")
                .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
        });
    }();

    // Gets the default highlight color for a specific type.
    //function getDefaultColorFor(type) {
    //    if (type === "FILL")
    //        return "#888888";

    //    if (type.indexOf("DFF") > -1)
    //        return "yellow";

    //    if (type.indexOf("metal1") > -1)
    //        return "#10FF10";

    //    if (type.indexOf("metal2") > -1)
    //        return "orange";

    //    if (type.indexOf("metal3") > -1)
    //        return "red";

    //    return "hotpink";
    //}

    // http://blog.adamcole.ca/2011/11/simple-javascript-rainbow-color.html
    function rainbow(numOfSteps, step) {
        // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
        // Adam Cole, 2011-Sept-14
        // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
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

    // This is the function responsible for all the interaction between
    // the user and the DEF.
    function drawDEF() {
        var w = defJSON.die.x2 - defJSON.die.x1;
        var h = defJSON.die.y2 - defJSON.die.y1;
        var wS = 1 * 800 / w;
        var hS = wS;//1*400/h;
        var xOff = 10 + Math.abs(defJSON.die.x1) * wS;
        var yOff = 10 + h * hS;

        // we first create the die around the cells
        $(paper
            .rect((defJSON.die.x1 * wS + xOff), yOff - (h * hS + defJSON.die.y1 * hS), w * wS, h * hS)
            .node)
            .addClass("die");

        //paper.path("M"+xOff+","+yOff+"L"+xOff+",5");
        //paper.path("M"+xOff+","+yOff+"L"+(xOff+w*wS+5)+","+(5+yOff));

        function onClick() {
            var $this = $(this);
            $this.toggleClass("highlight");
        }

        var pinTypes = { };
        for (var i = 0; i < defJSON.pins.length; ++i) {
            var pin = defJSON.pins[i];

            var px = xOff + pin.x * wS;
            var py = yOff - pin.y * hS;
            var pw = wS * (pin.x2 - pin.x1) * 100;
            var ph = hS * (pin.y2 - pin.y1) * 100;

            var $node = $(paper
                .rect(px + wS * pin.x1, py - hS * pin.y1, pw, ph)
                .node);

            // add the pins as well as one of the selectable types
            pinTypes[pin.layer] = void 0;

            $node
                .addClass(pin.layer)
                .addClass("pins")

                // attributes related to the popover.
                .attr("type", "button")
                .attr("tabindex", "0")
                .attr("data-toggle", "popover")
                .attr("data-trigger", "hover")
                .attr("data-content", pin.name)
                .attr("data-content", "Layer: " + pin.layer + "<br/>Name: " + pin.name);

            $node.click(onClick);

            //paper.text((pin.x+xOff)*wS, (pin.y+yOff)*hS, pin.name)
        }

        var cellTypes = {};
        for (var i = 0; i < defJSON.cells.length; ++i) {
            // type and name of the cell
            var type = defJSON.cells[i].type;
            var name = defJSON.cells[i].name;

            // coords of the cell
            var x = defJSON.cells[i].x;
            var y = defJSON.cells[i].y;
            var w = lefJSON.cells[type].w;
            var h = lefJSON.cells[type].h;

            // get the jQuery node.
            var $node = $(paper
                .rect(xOff + x * wS, yOff - y * hS - h * hS * 100, w * wS * 100, h * hS * 100)
                .node);

            // we keep track of the unique types this way
            cellTypes[type] = void 0;

            // for each cell, we add its type as its class, so we can then
            // select it later easily. For example, if several cells have a type
            // of "INVX1", we can simply select all 1-input inverters with
            // a css selector like ".INVX1".
            $node
                // just adding the class as explained above.
                .addClass(type)
                .addClass("cells")

                // attributes related to the popover.
                .attr("type", "button")
                .attr("tabindex", "0")
                .attr("data-toggle", "popover")
                .attr("data-trigger", "hover")
                .attr("data-content", "Type: " + type + "<br/>Name: " + name);

            // clicking on the button highlights it once, then clicking
            // again takes off the highlighting. 
            $node.click(onClick);
        }

        // for each array which contains the names of the pins and cells,
        // we need to add them to the accordion. So we do that now.
        -function () {
            function AddCheckboxesToAccordion(arr, containerName) {
                var keys = Object
                    .keys(arr)
                    .sort();

                keys.forEach(function (key, index) {
                    // we instantiate a new entry for each item, so when
                    // they are hightlighted, they would have their own color.
                    $.rule('.highlight.' + key + ' {}').appendTo("#fanous");

                    // we set the default color
                   // var color = getDefaultColorFor(key);

                    var color = rainbow(keys.length, index);

                    // template for the following jQuery disaster
                    //<div>
                    //    <label><input type="checkbox" value="{key}">{key}</label>
                    //    <span class="picker" data-color="{color}" data-name="{key}">
                    //        <span class="add-on"><i></i></span>
                    //    </span>
                    //</div>
                    $("#types #" + containerName)
                        .append($("<div />")
                        .append(
                            $("<label />")
                            .append($('<input />', {
                                type: "checkbox",
                                value: key
                            })

                            // when the value of the checkbox changes, we want to highlight
                            // or unhighlight the appropriate cells.
                            .change(function () {
                                var $this = $(this);
                                $("." + $this.val()).toggleClass("highlight", $this.is(":checked"));
                            }))
                            .append(key)
                        )
                        .append(
                            $('<span class="picker" />')
                                .attr("data-color", color)
                                .attr("data-name", key)
                                .append('<span class="add-on"><i></i></span>')
                        )
                    );
                });
            }

            // We add the checkboxes in different accordions
            AddCheckboxesToAccordion(cellTypes, "cellsContainer");
            AddCheckboxesToAccordion(pinTypes, "pinsContainer");
        }();

        // we register an event handler with the show and hide buttons, to show/hide
        // the selected cell types chosen from the checkboxes list.
        $(document).on("click", "#showBtn, #hideBtn", function () {
            // if it is a hide button, then we need to set the hidden class on
            // the matching cells checked with the checkboxes.
            var hide = $(this).is("#hideBtn");

            // we loop through the checked checkboxes, and hide, or show whichever
            // cell that matched the user's choice.
            $('#types input[type="checkbox"]:checked').each(function (index, element) {
                $("." + $(this).val()).toggleClass("hidden", hide);
            });
        });

        // we register the event handler of the clear button
        $(document).on("click", "#clearBtn", function () {
            $('#types input[type="checkbox"]:checked').prop("checked", false);
            $("#canvas_container .hidden").toggleClass("hidden", false);
            $("#canvas_container .highlight").toggleClass("highlight", false);
        });
    }
});