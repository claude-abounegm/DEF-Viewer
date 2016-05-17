/*
* Project 3
* Adapted from Dr. Shalan's previous code.
*
* Developed by:
*  Shady Fanous
*  Shehab Mohamed
*  Claude Abounegm
*/

/// <reference path="extensions.js" />
/// <reference path="Parsers.js" />

/// <reference path="../jquery-2.2.3.js" />
/// <reference path="../bootstrap.js" />
/// <reference path="../bootstrap-colorpicker.js" />
/// <reference path="../jquery.rule.js" />
/// <reference path="../raphael.js" />

var defJSON, lefJSON;

$(function () {
    "use strict";

    // the Raphael canvas variable
    var paper;

    // This is the function responsible for all the interaction between
    // the user and the DEF.
    function drawDEF() {
        var dieWidth = defJSON.die.x2 - defJSON.die.x1;
        var h = defJSON.die.y2 - defJSON.die.y1;

        var wS = 800 / dieWidth;
        var hS = wS;//1*400/h;

        var xOff = 0 + Math.abs(defJSON.die.x1) * wS;
        //Check out this sexy mathematical trick
        var yOff = 0*0 + hS * (h + defJSON.die.y1);

        var outer = 20;
        var inner = 10;
        $(paper.rect(1, 1, dieWidth * wS + ((outer + inner) * 2), h * hS + ((outer + inner) * 2)).node).addClass('pdn lmetal1');
        xOff += outer + 1;
        yOff += outer + 1;

        $(paper.rect(outer, outer, dieWidth * wS + (inner * 2), h * hS + (inner * 2)).node).addClass('pdn lmetal2');
        xOff += inner;
        yOff += inner;

        // we first create the die around the cells
        $(paper
            .rect(xOff + (defJSON.die.x1 * wS), yOff - hS * (h + defJSON.die.y1), dieWidth * wS, h * hS)
            .node)
            .addClass("die");

        function onClick() {
            $(this).toggleClass("highlight");
        }

        var pinTypes = {};
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
                .toggleClass('clkTree', /clk|clock/i.test(pin.name))

                // attributes related to the popover.
                .attr("type", "button")
                .attr("tabindex", "0")
                .attr("data-toggle", "popover")
                .attr("data-trigger", "hover")
                .attr("data-content", pin.name)
                .attr("data-content", "Layer: " + pin.layer + "<br/>Name: " + pin.name);

            $node.click(onClick);

            //paper.text(xOff + 4 + pin.x * wS, yOff - 5 - pin.y * hS, pin.name);
        }

        var cellTypes = {};

        var flag = false;
        var cells = defJSON.cells;
        for (var i = 0; i < defJSON.cells.length; ++i) {
            // type and name of the cell
            var type = defJSON.cells[i].type;
            var name = defJSON.cells[i].name;

            // coords of the cell
            var x = defJSON.cells[i].x;
            var y = defJSON.cells[i].y;
            var w = lefJSON.cells[type].w;
            var h = lefJSON.cells[type].h;

            var startX = xOff + x * wS;
            var startY = yOff - hS * (y + h * 100);

            var height = h * hS * 100;
            var width = w * wS * 100;

            // get the jQuery node.
            var $node = $(paper
                .rect(startX, startY, width, height)
                .node);

            if (i === 0 || (x < cells[i - 1].x)) {
                flag = !flag;

                if (flag) {
                    $(paper.path('M0,' + startY + 'L' + startX + ',' + startY).node).addClass('pdn lmetal1');
                    $(paper.path('M' + (outer) + ',' + (startY + height) + 'L' + startX + ',' + (startY + height)).node).addClass('pdn lmetal2');
                }
            }

            if (i === (cells.length - 1) || cells[i + 1].x < x) {
                var endX = (xOff + (defJSON.die.x1 + dieWidth) * wS);
                if (flag) {
                    $(paper.path('M' + (startX + width) + ',' + startY + 'L' + (endX+inner+outer) + ',' + startY).node).addClass('pdn lmetal1');
                    $(paper.path('M' + (startX + width) + ',' + (startY + height) + 'L' + (endX + inner) + ',' + (startY + height)).node).addClass('pdn lmetal2');
                }
            }

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

        var netsTypes = {};
        -function () {
            var nets = defJSON.nets;

            nets.forEach(function (net) {
                net.routes.forEach(function (route) {
                    var layer = route.layer;
                    netsTypes['l' + layer] = void 0;

                    var pathString = [];
                    route.coords.forEach(function (coord, i) {
                        pathString.push(i === 0 ? 'M' : 'L');
                        pathString.push(xOff + coord.x * wS);
                        pathString.push(',');
                        pathString.push(yOff - coord.y * hS);
                    });

                    $(paper.path(pathString.join('')).node)
                        .addClass("l" + layer)
                        .toggleClass('clkTree', !!net.CLOCK);
                });
            });
        }();

        // for each array which contains the names of the pins and cells,
        // we need to add them to the accordion. So we do that now.
        -function handleAccordionData() {
            function AddCheckboxesToAccordion(arr, containerName, colorType, fn) {
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
            AddCheckboxesToAccordion(cellTypes, "cellsContainer");
            AddCheckboxesToAccordion(pinTypes, "pinsContainer");

            // the nets have different wire names than their class names.
            AddCheckboxesToAccordion(netsTypes, "netsContainer", 'stroke', function (a) { return a.substring(1, a.length); });
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
    }

    -function initEventHandlers() {
        $('#browseModal').modal({
            backdrop: 'static',
            keyboard: false
        });

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

        // post change as the page might have refreshed, but the browser
        // still holds the data that the user previously chose.
        $('#defInput').change();
        $('#lefInput').change();

        function loadAll() {
            // initialize raphael with an initial width and height.
            paper = Raphael("canvas_container", 500, 500);

            // the main function to draw the DEF on screen.
            drawDEF();

            // automatically size the bounding box of the SVG
            paper.fitToSize();

            $('#pdnBtn').click();
        };

        $(document).on('click', '#submitBtn', function () {
            var $defInput = $('#defInput');
            var $lefInput = $('#lefInput');

            if (!$defInput.val())
                return false;

            Parsers.readFileFromInput($defInput[0], function (data) {
                defJSON = Parsers.parseDEF(data);

                function init() {
                    $('#title').html(/^(?:.+\\)*(\S+\.def)/.exec($defInput.val())[1]);
                    $('#browseModal').modal('hide');
                    $('#mainContainer').removeClass('hidden');
                    loadAll();
                }

                if ($lefInput.val()) {
                    Parsers.readFileFromInput($lefInput[0], function (data) {
                        lefJSON = Parsers.parseLEF(data);

                        $('#subtitle').html(/^(?:.+\\)*(\S+\.lef)/.exec($lefInput.val())[1]);
                        init();
                    });
                }
                else
                    init();
            });
        });

    }();
});