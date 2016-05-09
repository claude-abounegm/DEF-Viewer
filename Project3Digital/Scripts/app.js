/// <reference path="scllef.js" />
/// <reference path="designdef.js" />
/// <reference path="jquery-2.2.3.js" />
/// <reference path="raphael.js" />
/// <reference path="bootstrap.js" />

$(function () {
    var paper;

    (function onLoaded() {
        paper = Raphael("canvas_container", 820, 600);
        //rect1 = paper.rect(20,30,100,12).attr({fill: "orange"});
        drawDef();

        var svg = document.getElementsByTagName("svg")[0];
        var bbox = svg.getBBox();
        svg.setAttribute("width", bbox.x + bbox.width + "px");
        svg.setAttribute("height", bbox.y + bbox.height + "px");

        $('[data-toggle="popover"]').popover({
            container: "body",
            placement: "auto",
            html: true
        });
    })();

    function findCell(name) {
        for (var i = 0; i < lefJSON.cells.length; ++i)
            if (name === lefJSON.cells[i].name)
                return i;
    }

    function drawDef() {
        // draw the die
        // 1) get the dimentions to get a good scale
        var w = defJSON.die.x2 - defJSON.die.x1;
        var h = defJSON.die.y2 - defJSON.die.y1;
        var wS = 1 * 800 / w;
        var hS = wS;//1*400/h;
        var xOff = 10 + Math.abs(defJSON.die.x1) * wS;
        var yOff = 10 + h * hS;

        paper
            .rect((defJSON.die.x1 * wS + xOff), yOff - (h * hS + defJSON.die.y1 * hS), w * wS, h * hS)
            .attr({ "stroke-width": 1, "stroke": 'blue', "stroke-dasharray": "-" });

        //console.log(wS, hS, w, h, xOff, yOff, wS * w, hS * h);

        //paper.path("M"+xOff+","+yOff+"L"+xOff+",5");
        //paper.path("M"+xOff+","+yOff+"L"+(xOff+w*wS+5)+","+(5+yOff));

        for (var i = 0; i < defJSON.pins.length; ++i) {
            var pin = defJSON.pins[i];
            var px = xOff + pin.x * wS;
            var py = yOff - pin.y * hS;
            var pw = wS * (pin.x2 - pin.x1) * 100; // remove 50
            var ph = hS * (pin.y2 - pin.y1) * 100;
            //if(pin.layer=="metal1")

            var r = paper
                .rect(px + wS * pin.x1, py - hS * pin.y1, pw, ph)
                .attr({ "fill": "#AAAAAA" });
            r.node.flag = 0;
            r.node.orgfill = "#AAAAAA";
            //$(r.node).addClass(pin.layer);
            
            r.node.onclick = function () {
                $(this).toggleClass("highlight");
            };

            //    (function () {
            //    var current_pin = pin;

            //    return function () {
            //        if (this.flag == 0) {
            //            this.style.fill = '#10FF10';
            //            this.flag = 1;
            //        } else {
            //            this.style.fill = this.orgfill;
            //            this.flag = 0;
            //        }
            //    };
            //})();

            //else if(pin.layer=="metal2") paper.rect((pin.x+xOff+pin.x1)*wS, (pin.y+yOff+pin.y1)*hS, (pin.x2-pin.x1)*wS, (pin.y2-pin.y1)*hS).attr({"fill": "orange" });
            //else if(pin.layer=="metal3") paper.rect((pin.x+xOff+pin.x1)*wS, (pin.y+yOff+pin.y1)*hS, (pin.x2-pin.x1)*wS, (pin.y2-pin.y1)*hS).attr({"fill": "red" });
            //paper.text((pin.x+xOff)*wS, (pin.y+yOff)*hS, pin.name)
        }

        var types = {};
        for (var i = 0; i < defJSON.cells.length; ++i) {
            var lid = defJSON.cells[i].type;
            var name = defJSON.cells[i].name;
            var x = defJSON.cells[i].x;
            var y = defJSON.cells[i].y;
            var w = lefJSON.cells[lid].w;
            var h = lefJSON.cells[lid].h;

            var r;

            if (!types[lid]) {
                types[lid] = void 0;
            }

            if (lid == "FILL") {
                r = paper
                    .rect(xOff + x * wS, yOff - y * hS - h * hS * 100, w * wS * 100, h * hS * 100)
                    .attr({ "fill": "#888888" });

                r.node.flag = 0;
                r.node.orgfill = "#888888";
            }
            else if (name.indexOf("DFF") > -1) {
                r = paper
                    .rect(xOff + x * wS, yOff - y * hS - h * hS * 100, w * wS * 100, h * hS * 100)
                    .attr({ "fill": "yellow" });

                r.node.flag = 0;
                r.node.orgfill = "yellow";
            }
            else {
                r = paper
                    .rect(xOff + x * wS, yOff - y * hS - h * hS * 100, w * wS * 100, h * hS * 100)
                    .attr({ "fill": "#AAAAFF" });

                r.node.flag = 0;
                r.node.orgfill = "#AAAAFF";
            }

            $(r.node)
                .attr("class", lid)
                .attr("type", "button")
                .attr("tabindex", "0")
                .attr("data-toggle", "popover")
                .attr("data-trigger", "click hover")
                .attr("title", lid)
                .attr("data-content", name);

            r.node.onclick = function () {
                $(this).toggleClass("highlight");
            }

            //if(defJSON.cells[i].type == "FILL")
            //	paper.rect((x+xOff)*wS, (y+yOff)*hS, w*wS*100, h*hS*100).attr({"fill": "#888888" });
            //else
            //	if(defJSON.cells[i].name.indexOf("DFF") > -1)
            //		paper.rect((x+xOff)*wS, (y+yOff)*hS, w*wS*100, h*hS*100).attr({"fill": "#FFAAAA" });
            //	else
            //		paper.rect((x+xOff)*wS, (y+yOff)*hS, w*wS*100, h*hS*100).attr({"fill": "#AAAAFF" });
        }

        for (var key in types) {
            $("#types #boxes").append(
                $("<span />")
                .append($('<input />', {
                    type: "checkbox",
                    value: key
                }).change(function () {
                    $("." + $(this).val()).toggleClass("highlight", $(this).is(":checked"));
                }))
                .append(key)
                .append("<br />")
            );
        }

        $(document).on("click", "#showBtn, #hideBtn", function () {
            var hide = $(this).is("#hideBtn");

            $('#types input[type="checkbox"]:checked').each(function (index, element) {
                $("." + $(this).val()).toggleClass("hidden", hide);
            });
        });
    }
});