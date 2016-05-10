/// <reference path="scllef.js" />
/// <reference path="designdef.js" />
/// <reference path="jquery-2.2.3.js" />
/// <reference path="raphael.js" />
/// <reference path="bootstrap.js" />

// Extension to Raphael, to allow auto sizing of the SVG canvas.
// Use after drawing all your textures.
Raphael.prototype.fitToSize = function () {
    var bbox = this.canvas.getBBox();
    this.setSize(bbox.x + bbox.width, bbox.y + bbox.height);
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

        // this is used to toggle the arrow up and down in the accordion
        var accordion = "#accordion";
        -function (selector) {
            function toggleChevron(e) {
                $(e.target)
                    .prev('.panel-heading')
                    .find("i.indicator")
                    .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
            }

            $(selector)
                .on('hidden.bs.collapse shown.bs.collapse', toggleChevron);
        }(accordion);
    }();

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
            //if(pin.layer=="metal1")

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

            //else if(pin.layer=="metal2") paper.rect((pin.x+xOff+pin.x1)*wS, (pin.y+yOff+pin.y1)*hS, (pin.x2-pin.x1)*wS, (pin.y2-pin.y1)*hS).attr({"fill": "orange" });
            //else if(pin.layer=="metal3") paper.rect((pin.x+xOff+pin.x1)*wS, (pin.y+yOff+pin.y1)*hS, (pin.x2-pin.x1)*wS, (pin.y2-pin.y1)*hS).attr({"fill": "red" });
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

            // set different classes for different types of cells
            if (type === "FILL") {
                $node.toggleClass("block_fill", true);
            }
            else if (name.indexOf("DFF") > -1) {
                $node.toggleClass("block_dff", true);
            }
            else {
                $node.toggleClass("block", true);
            }

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

            //if(defJSON.cells[i].type == "FILL")
            //	paper.rect((x+xOff)*wS, (y+yOff)*hS, w*wS*100, h*hS*100).attr({"fill": "#888888" });
            //else
            //	if(defJSON.cells[i].name.indexOf("DFF") > -1)
            //		paper.rect((x+xOff)*wS, (y+yOff)*hS, w*wS*100, h*hS*100).attr({"fill": "#FFAAAA" });
            //	else
            //		paper.rect((x+xOff)*wS, (y+yOff)*hS, w*wS*100, h*hS*100).attr({"fill": "#AAAAFF" });
        }

        // for each array which contains the names of the pins and cells,
        // we need to add them to the accordion. So we do that now.
        -function () {
            function AddCheckboxesToAccordion(arr, containerName) {
                Object
                    .keys(arr)
                    .sort()
                    .forEach(function (key) {
                        $("#types #" + containerName)
                        .append($("<label />")
                        .append($('<input />', {
                            type: "checkbox",
                            value: key
                        })
                        .change(function () {
                            var $this = $(this);
                            $("." + $this.val()).toggleClass("highlight", $this.is(":checked"));
                        }))
                        .append(key))
                        .append("<br/>");
                    });
            }

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
            //$("#canvas_container [aria-describedby]").click();
            $("#canvas_container .highlight").toggleClass("highlight", false);
        });
    }

    //function findCell(name) {
    //    for (var i = 0; i < lefJSON.cells.length; ++i)
    //        if (name === lefJSON.cells[i].name)
    //            return i;
    //}
});