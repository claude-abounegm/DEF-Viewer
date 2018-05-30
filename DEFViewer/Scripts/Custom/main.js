/*
* Project 3
* Adapted from Dr. Shalan's base code.
*
* Developed by:
*  Shady Fanous
*  Shehab Mohamed
*  Claude Abounegm
*/

/// <reference path="extensions.js" />
/// <reference path="parsers.js" />

/// <reference path="../jquery-2.2.3.js" />
/// <reference path="../bootstrap.js" />
/// <reference path="../bootstrap-colorpicker.js" />
/// <reference path="../jquery.rule.js" />
/// <reference path="../raphael.js" />

var defViewer = {
    lefData: {
        "cells": {
            "FILL": { "w": 1.600, "h": 20.000 },
            "AND2X1": { "w": 6.400, "h": 20.000 },
            "AND2X2": { "w": 6.400, "h": 20.000 },
            "AOI21X1": { "w": 6.400, "h": 20.000 },
            "AOI22X1": { "w": 8.000, "h": 20.000 },
            "BUFX2": { "w": 4.800, "h": 20.000 },
            "BUFX4": { "w": 6.400, "h": 20.000 },
            "DFFNEGX1": { "w": 19.200, "h": 20.000 },
            "NOR3X1": { "w": 12.800, "h": 20.000 },
            "DFFPOSX1": { "w": 19.200, "h": 20.000 },
            "FAX1": { "w": 24.000, "h": 20.000 },
            "HAX1": { "w": 16.000, "h": 20.000 },
            "INVX1": { "w": 3.200, "h": 20.000 },
            "INVX2": { "w": 3.200, "h": 20.000 },
            "INVX4": { "w": 4.800, "h": 20.000 },
            "INVX8": { "w": 8.000, "h": 20.000 },
            "NAND2X1": { "w": 4.800, "h": 20.000 },
            "NAND3X1": { "w": 6.400, "h": 20.000 },
            "NOR2X1": { "w": 4.800, "h": 20.000 },
            "OAI21X1": { "w": 6.400, "h": 20.000 },
            "OAI22X1": { "w": 8.000, "h": 20.000 },
            "OR2X1": { "w": 6.400, "h": 20.000 },
            "OR2X2": { "w": 6.400, "h": 20.000 },
            "TBUFX1": { "w": 8.000, "h": 20.000 },
            "TBUFX2": { "w": 11.200, "h": 20.000 },
            "XOR2X1": { "w": 11.200, "h": 20.000 },
            "MUX2X1": { "w": 9.600, "h": 20.000 },
            "XNOR2X1": { "w": 11.200, "h": 20.000 },
            "LATCH": { "w": 11.200, "h": 20.000 },
            "DFFSR": { "w": 35.200, "h": 20.000 },
            "CLKBUF1": { "w": 14.400, "h": 20.000 },
            "CLKBUF2": { "w": 20.800, "h": 20.000 },
            "CLKBUF3": { "w": 27.200, "h": 20.000 },
            "PADFC": { "w": 300.000, "h": 300.000 },
            "PADGND": { "w": 90.000, "h": 300.000 },
            "PADVDD": { "w": 90.000, "h": 300.000 },
            "PADINC": { "w": 90.000, "h": 300.000 },
            "PADINOUT": { "w": 90.000, "h": 300.000 },
            "PADNC": { "w": 90.000, "h": 300.000 },
            "PADOUT": { "w": 90.000, "h": 300.000 }
        }
    }
};

// basic event handling to allow preleminary communication with 
// the user. Afterwards, all the data-binding and drawing
// is done in the drawDEF function.
$(function () {
    // the modal should never be closed
    $('#browseModal').modal({
        backdrop: 'static',
        keyboard: false
    });

    // event handlers for defInput, lefInput browse buttons, and
    // on the submit button when the files are inputted.
    $(document).on('change', '#defInput', function () {
        if ($(this).val()) {
            $(this)
                .parent('span')
                .removeClass('btn-default')
                .addClass('btn-success');

            $('#submitBtn').removeAttr('disabled');
        }
    });

    $(document).on('change', '#lefInput', function () {
        if ($(this).val()) {
            $(this).parent('span')
                .removeClass('btn-warning')
                .addClass('btn-success');
        }
    });

    $(document).on('click', '#submitBtn', function () {
        var $defInput = $('#defInput');
        var $lefInput = $('#lefInput');

        if (!$defInput.val())
            return false;

        parsers.readFileFromInput($defInput[0], function (data) {
            defViewer.defData = parsers.parseDEF(data);

            function loadContents() {
                $('#defName').html(/^(?:.+\\)*(\S+\.def)$/.exec($defInput.val())[1]);
                $('#browseModal').modal('hide');
                $('#mainContainer').removeClass('hidden');

                // initialize raphael with an initial width and height.
                defViewer.canvas = Raphael("canvas_container", 500, 500);

                // the main function to draw the DEF on screen.
                defViewer.drawDEF();

                // automatically size the bounding box of the SVG
                defViewer.canvas.fitToSize();

                $('#pdnBtn').click();
            }

            if ($lefInput.val()) {
                parsers.readFileFromInput($lefInput[0], function (data) {
                    defViewer.lefData = parsers.parseLEF(data);

                    $('#lefName').html(/^(?:.+\\)*(\S+\.lef)$/.exec($lefInput.val())[1]);
                    loadContents();
                });
            }
            else loadContents();
        });
    });

    // post change as the page might have refreshed, but the browser
    // still holds the data that the user previously chose.
    $('#defInput').change();
    $('#lefInput').change();
});

// This is the function responsible for all the interaction between
// the user and the DEF.
defViewer.drawDEF = function () {
    "use strict";

    var outer = 20;
    var inner = 10;

    // the Raphael canvas variable
    var paper = defViewer.canvas;
	var zpd = new RaphaelZPD(paper, { zoom: true, pan: true, drag: false });
    var defData = defViewer.defData;
    var lefData = defViewer.lefData;
    // the width and height of the die
    var dieWidth = (defData.die.x2 - defData.die.x1);
    var dieHeight = (defData.die.y2 - defData.die.y1);
    // width and height scale
    var wS = 800 / dieWidth;
    var hS = wS;
    // scaling
    defData.die.x1 *= wS;
    defData.die.x2 *= wS;
    defData.die.y1 *= wS;
    defData.die.y2 *= wS;
    dieWidth *= wS;
    dieHeight *= wS;
    // scaling
    // Check out this sexy mathematical trick
    var xOff = 0 + Math.abs(defData.die.x1);
    var yOff = 0 * 0 + dieHeight + defData.die.y1;

    // outer grid
    $(paper.rect(1, 1, dieWidth + ((outer + inner) * 2), dieHeight + ((outer + inner) * 2))
        .node)
        .addClass('pdn lmetal1');
    xOff += outer + 1;
    yOff += outer + 1;

    // inner grid
    $(paper.rect(outer, outer, dieWidth + (inner * 2), dieHeight + (inner * 2))
        .node)
        .addClass('pdn lmetal2');
    xOff += inner;
    yOff += inner;

    // create the die around the cells
    $(paper
        .rect(xOff + defData.die.x1, yOff - (dieHeight + defData.die.y1), dieWidth, dieHeight)
        .node)
        .addClass("die");

    // these variables are used to add them to accordions later
    var pinTypes = {};
    var cellTypes = {};
    var netsTypes = {};

    // draw the pins
    defData.pins.forEach(function (pin, i) {
        // add the pins as well as one of the selectable types
        pinTypes[pin.layer] = void 0;

        // pins' data
        var px = xOff + (pin.x *= wS);
        var py = yOff - (pin.y *= hS);
        var pw = ((pin.x2 *= wS) - (pin.x1 *= wS)) * 100;
        var ph = ((pin.y2 *= hS) - (pin.y1 *= hS)) * 100;

        var $node = $(paper
            .rect(px + pin.x1, py - pin.y1, pw, ph)
            .node);

        $node
            // some classes to identify the pin
            .addClass(pin.layer)
            .addClass("pins")

            // if the pin is a clk, CLK, clock, or some other
            // variation, we add it to the clock tree
            .toggleClass('clkTree', /clk|clock/i.test(pin.name))

            // attributes related to the popover.
            .attr("type", "button")
            .attr("tabindex", "0")
            .attr("data-toggle", "popover")
            .attr("data-trigger", "hover")
            .attr("data-content", pin.name)
            .attr("data-content", "Layer: " + pin.layer + "<br/>Name: " + pin.name)

            // on click, we want to toggle it to highlight
            .click(function () {
                $(this).toggleClass("highlight");
            });

        paper.text(xOff + 4 + pin.x, yOff - 5 - pin.y, pin.name);
    });

    defData.cells.forEach(function () {
        var cells = defData.cells;
        var args = new PathArguments();
        netsTypes['lmetal1'] = void 0;
        netsTypes['lmetal2'] = void 0;

        return function (row, rowIndex) {
            row.forEach(function (cell, i) {
                // type and name of the cell
                var type = cell.type;
                var name = cell.name;

                // we keep track of the unique types this way
                cellTypes[type] = void 0;

                // coords of the cell
                var x = (cell.x *= wS);
                var y = (cell.y *= wS);
                var w = lefData.cells[type].w * wS;
                var h = lefData.cells[type].h * wS;

                var cellHeight = h * 100;
                var cellWidth = w * 100;

                var startX = xOff + x;
                var startY = yOff - (y + h * 100);
                // coords of the cell

                // get the jQuery node.
                var $node = $(paper
                    .rect(startX, startY, cellWidth, cellHeight)
                    .node);

                // this is the top line (metal1), it is only displayed when
                // we have an even row number. (the outer connection).
                if (rowIndex % 2 === 0) {
                    if (i === 0) {
                        args.addPoint(0, startY);
                        args.addPoint(startX, startY);
                        args.path(paper).addClass('pdn lmetal1');
                    }
                    else if (i === row.length - 1) {
                        var endX = (xOff + defData.die.x1 + dieWidth);

                        args.addPoint((startX + cellWidth), startY);
                        args.addPoint((endX + inner + outer), startY);
                        args.path(paper).addClass('pdn lmetal1');
                    }
                }

                // if we are drawing the last row, we would like to add that extra bottom line
                // otherwise, we just display the top line for that row (the inner connection).
                if (rowIndex === (cells.length - 1) || rowIndex % 2 !== 0) {
                    var curY = startY + ((rowIndex === (cells.length - 1)) ? cellHeight : 0);

                    if (i === 0) {
                        args.addPoint(outer, curY);
                        args.addPoint(startX, curY);
                        args.path(paper).addClass('pdn lmetal2');
                    }
                    else if (i === row.length - 1) {
                        var endX = (xOff + defData.die.x1 + dieWidth);

                        args.addPoint(startX + cellWidth, curY);
                        args.addPoint(endX + inner, curY);
                        args.path(paper).addClass('pdn lmetal2');
                    }
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
                    .attr("data-content", "Type: " + type + "<br/>Name: " + name)

                    // clicking on the button highlights it once, then clicking
                    // again takes off the highlighting. 
                    .click(function () {
                        $(this).toggleClass("highlight");
                    });
            });
        }
    }());

    // draw the nets
    defData.nets.forEach(function () {
        var args = new PathArguments();

        return function (net) {
            net.routes.forEach(function (route) {
                var layer = route.layer;
                netsTypes['l' + layer] = void 0;

                route.coords.forEach(function (coord) {
                    args.addPoint((xOff + coord.x * wS), (yOff - coord.y * hS));
                });

                // draw the lines
                args.path(paper)
                    .addClass("l" + layer)
                    .toggleClass('clkTree', !!net.CLOCK);
            });
        };
    }());

    // for each array which contains the names of the pins and cells,
    // we need to add them to the accordion. So we do that now.
    +function handleAccordionData() {
        function addCheckboxesToAccordion(arr, containerName, colorType, fn) {
            var keys = Object
                .keys(arr)
                .sort();

            if (keys.length == 0) {
                $('#' + containerName).parents('.panel').addClass('hidden');
                return;
            }

            var names = keys;
            if (!colorType) colorType = 'fill';
            if (fn) names = names.map(fn);

            keys.forEach(function (key, index) {
                // we instantiate a new entry for each item, so when
                // they are hightlighted, they would have their own color.
                $.rule('.highlight.' + key + ' {}').appendTo("#customStyle");

                // we set the default color
                // var color = getDefaultColorFor(key);
                var color = rainbow(keys.length, index);

                // template for the following jQuery disaster
                //<div>
                //    <label><input type="checkbox" value="{key}"><span> {key}</span></label>
                //    <span class="picker" data-color="{color}" data-name="{key}">
                //        <span class="add-on"><i></i></span>
                //    </span>
                //</div>
                $("#types #" + containerName)
                    .append($("<div />")
                    .append(
                        // <label><input type="checkbox" value="{key}"></label>
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

                        // <span> {key}</span>
                        .append("<span> " + names[index] + "</span>")
                    )

                    //    <span class="picker" data-color="{color}" data-name="{key}">
                    //        <span class="add-on"><i></i></span>
                    //    </span>
                    .append(
                        $('<span class="picker" />')
                            .attr("data-color", color)
                            .attr("data-name", key)
                            .attr("data-ctype", colorType)
                            .append('<span class="add-on"><i></i></span>')
                    )
                );
            });
        }

        // We add the checkboxes in different accordions
        addCheckboxesToAccordion(cellTypes, "cellsContainer");
        addCheckboxesToAccordion(pinTypes, "pinsContainer");

        // the nets have different wire names than their class names.
        addCheckboxesToAccordion(netsTypes, "netsContainer", 'stroke', function (a) {
            return a.substring(1, a.length);
        });
    }();

    $('[data-toggle="popover"]').popover({
        container: "body",
        placement: "auto",
        html: true
    });

    // instantiate the color pickers with their default values
    $('.picker').each(function (index, element) {
        var $this = $(this);

        $this
            .colorpicker()
            // event to change CSS on color change.
            .on("changeColor", function (e) {
                $.rule('.highlight.' + $this.data("name"), '#customStyle').css($this.data("ctype"), e.color);
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
        $("#canvas_container .hidden:not('.pdn')").toggleClass("hidden", false);
        $("#canvas_container .highlight").toggleClass("highlight", false);
    });

    $(document).on('click', "#clkTreeBtn", function () {
        var flag = false;

        return function () {
            flag = !flag;
            $(this).children('span').html(flag ? 'Hide' : 'Show');
            $('.clkTree').toggleClass('highlight', flag);
        };
    }());

    $(document).on('click', '#pdnBtn', function () {
        var flag = false;

        return function () {
            flag = !flag;
            $('.pdn').toggleClass('hidden', flag);
        };
    }());

    $('#clkTreeBtn').toggleClass('hidden', !$('.clkTree').length);
};
