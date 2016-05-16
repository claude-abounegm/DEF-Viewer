/*
* Project 3
* Adapted from Dr. Shalan's previous code.
*
* Developed by:
* Shady Fanous
* Shehab Mohamed
* Claude Abounegm
*/

/// <reference path="scllef.js" />
/// <reference path="extensions.js" />
/// <reference path="defParser.js" />

/// <reference path="../jquery-2.2.3.js" />
/// <reference path="../raphael.js" />
/// <reference path="../bootstrap.js" />
/// <reference path="../bootstrap-colorpicker.js" />
/// <reference path="../jquery.rule.js" />

var defJSON;

$(function () {
    "use strict";

    defJSON = parseDEF('VERSION 5.6 ;\nNAMESCASESENSITIVE ON ;\nDIVIDERCHAR "/" ;\nBUSBITCHARS "<>" ;\nDESIGN counter_2bit ;\nUNITS DISTANCE MICRONS 100 ;\n\nDIEAREA ( -480.0 0.0 ) ( 7360.0 2400.0 ) ;\n\nTRACKS Y 0.0 DO 13 STEP 200 LAYER metal1 ;\nTRACKS X -480.0 DO 50 STEP 160.0 LAYER metal2 ;\nTRACKS Y 0.0 DO 13 STEP 200 LAYER metal3 ;\nTRACKS X -480.0 DO 25 STEP 320.0 LAYER metal4 ;\n\nCOMPONENTS 8 ;\n- BUFX2_2 BUFX2 + PLACED ( 80.0 100 ) S ;\n- DFFPOSX1_2 DFFPOSX1 + PLACED ( 560.0 100 ) S ;\n- AOI21X1_1 AOI21X1 + PLACED ( 2480.0 100 ) S ;\n- OAI21X1_1 OAI21X1 + PLACED ( 3120.0 100 ) FS ;\n- INVX1_1 INVX1 + PLACED ( 3760.0 100 ) S ;\n- NOR2X1_1 NOR2X1 + PLACED ( 4080.0 100 ) FS ;\n- DFFPOSX1_1 DFFPOSX1 + PLACED ( 4560.0 100 ) FS ;\n- BUFX2_1 BUFX2 + PLACED ( 6480.0 100 ) FS ;\nEND COMPONENTS\n\nPINS 4 ;\n- clk + NET clk\n  + LAYER metal2 ( 0 0 ) ( 1 1 )\n  + PLACED ( 2080.0 2400.0 ) N ;\n- reset + NET reset\n  + LAYER metal2 ( 0 0 ) ( 1 1 )\n  + PLACED ( 4160.0 2400.0 ) N ;\n- dout<0> + NET dout<0>\n  + LAYER metal3 ( 0 0 ) ( 1 1 )\n  + PLACED ( 7200.0 1200.0 ) N ;\n- dout<1> + NET dout<1>\n  + LAYER metal3 ( 0 0 ) ( 1 1 )\n  + PLACED ( -160.0 1200.0 ) N ;\nEND PINS\n\nNETS 10 ;\n- $auto$iopadmap.cc:164:execute$47<0>\n  ( DFFPOSX1_1 Q ) \n  ( NOR2X1_1 B ) \n  ( AOI21X1_1 A ) \n  ( OAI21X1_1 A ) \n  ( BUFX2_1 A ) \n+ ROUTED metal1 ( 6400 1170 ) ( * 1200 ) ( 6560 * ) \n  NEW metal1 ( 4480 1200 ) M2_M1 \n  NEW metal2 ( 4480 1200 ) M3_M2 \n  NEW metal3 ( 4480 1200 ) ( 6080 * ) M3_M2 \n  NEW metal2 ( 6080 1200 ) ( * 1400 ) M2_M1 \n  NEW metal1 ( 6080 1400 ) ( * 1510 ) \n  NEW metal1 ( 3040 1200 ) M2_M1 \n  NEW metal2 ( 3040 1200 ) M3_M2 \n  NEW metal3 ( 3040 1200 ) ( 4480 * ) \n  NEW metal1 ( 3200 1400 ) ( 3040 * ) M2_M1 \n  NEW metal2 ( 3040 1400 ) ( * 1200 ) ;\n- dout<0>\n  ( PIN dout<0> ) \n  ( BUFX2_1 Y ) \n+ ROUTED metal3 ( 7200 1200 ) ( 7040 * ) M3_M2 \n  NEW metal2 ( 7040 1200 ) ( * 1400 ) M2_M1 \n  NEW metal1 ( 7040 1400 ) ( 6880 * ) ;\n- $auto$iopadmap.cc:164:execute$47<1>\n  ( DFFPOSX1_2 Q ) \n  ( AOI21X1_1 B ) \n  ( OAI21X1_1 B ) \n  ( BUFX2_2 A ) \n+ ROUTED metal1 ( 640 1170 ) ( * 1200 ) ( 480 * ) \n  NEW metal1 ( 2880 1400 ) M2_M1 \n  NEW metal2 ( 2880 1400 ) M3_M2 \n  NEW metal3 ( 2880 1400 ) ( 960 * ) M3_M2 \n  NEW metal1 ( 960 1400 ) M2_M1 \n  NEW metal1 ( 960 1400 ) ( * 1510 ) \n  NEW metal1 ( 3360 1200 ) M2_M1 \n  NEW metal2 ( 3360 1200 ) ( * 1400 ) M3_M2 \n  NEW metal3 ( 3360 1400 ) ( 2880 * ) ;\n- dout<1>\n  ( PIN dout<1> ) \n  ( BUFX2_2 Y ) \n+ ROUTED metal3 ( -160 1200 ) ( 160 * ) M3_M2 \n  NEW metal2 ( 160 1200 ) ( * 1400 ) M2_M1 ;\n- reset\n  ( PIN reset ) \n  ( NOR2X1_1 A ) \n  ( INVX1_1 A ) \n+ ROUTED metal1 ( 4160 1600 ) ( 4000 * ) \n  NEW metal2 ( 4160 2400 ) ( * 1600 ) M2_M1 ;\n- _1_\n  ( OAI21X1_1 C ) \n  ( INVX1_1 Y ) \n+ ROUTED metal1 ( 3670 800 ) ( 3680 * ) ( 3840 * ) ;\n- _2_\n  ( AOI21X1_1 C ) \n  ( OAI21X1_1 Y ) \n+ ROUTED metal1 ( 2560 1600 ) M2_M1 \n  NEW metal2 ( 2560 1600 ) ( * 1200 ) M3_M2 \n  NEW metal3 ( 2560 1200 ) ( 2880 * ) M4_M3 \n  NEW metal4 ( 2880 1200 ) ( 3360 * ) ( * 1000 ) M4_M3 \n  NEW metal3 ( 3360 1000 ) ( 3520 * ) M3_M2 \n  NEW metal2 ( 3520 1000 ) ( 3360 * ) M2_M1 \n  NEW metal1 ( 3360 1000 ) ( 3450 * ) ;\n- _0_<1>\n  ( DFFPOSX1_2 D ) \n  ( AOI21X1_1 Y ) \n+ ROUTED metal1 ( 1920 1220 ) M2_M1 \n  NEW metal2 ( 1920 1200 ) ( * 1800 ) M3_M2 \n  NEW metal3 ( 1920 1800 ) ( 2720 * ) M3_M2 \n  NEW metal1 ( 2720 1800 ) M2_M1 ;\n- _0_<0>\n  ( DFFPOSX1_1 D ) \n  ( NOR2X1_1 Y ) \n+ ROUTED metal1 ( 4800 1220 ) M2_M1 \n  NEW metal2 ( 4800 1200 ) ( * 1400 ) M3_M2 \n  NEW metal3 ( 4800 1400 ) ( 4320 * ) M3_M2 \n  NEW metal1 ( 4320 1400 ) M2_M1 ;\n- clk\n  ( PIN clk ) \n  ( DFFPOSX1_2 CLK ) \n  ( DFFPOSX1_1 CLK ) \n+ ROUTED metal1 ( 2240 1400 ) M2_M1 \n  NEW metal2 ( 2240 1400 ) ( * 1600 ) M3_M2 \n  NEW metal3 ( 2240 1600 ) ( 4480 * ) M3_M2 \n  NEW metal2 ( 4480 1600 ) ( * 1400 ) M2_M1 \n  NEW metal1 ( 4480 1400 ) ( 4640 * ) ( 4650 * ) \n  NEW metal2 ( 2080 2400 ) ( 2240 * ) ( * 1600 ) ;\nEND NETS\n\nSPECIALNETS 5 ;\n- $auto$iopadmap.cc:164:execute$47<0>\n+ ROUTED metal1 80 ( 6400 1140 ) ( * 1230 ) \n  NEW metal1 80 ( 6080 1370 ) ( * 1540 ) ;\n- $auto$iopadmap.cc:164:execute$47<1>\n+ ROUTED metal1 80 ( 640 1140 ) ( * 1230 ) \n  NEW metal1 80 ( 960 1370 ) ( * 1540 ) ;\n- clk\n;\n- _1_\n;\n- _2_\n+ ROUTED metal4 120 ( 3360 1200 ) ( * 1000 ) \n  NEW metal1 80 ( 3330 1000 ) ( 3480 * ) ;\nEND SPECIALNETS\n\nEND DESIGN\n');

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
                    $.rule('.highlight.' + $this.data("name"), '#customStyle').css("fill", e.color);
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
                            .append("<span> " + key + "</span>")
                        )

                        //    <span class="picker" data-color="{color}" data-name="{key}">
                        //        <span class="add-on"><i></i></span>
                        //    </span>
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