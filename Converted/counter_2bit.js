var defJSON = {
    die: { x1: -480.0, y1: 0.0, x2: 7360.0, y2: 2400.0 },

    cells: [{ name: "BUFX2_2", type: "BUFX2", x: 80.0, y: 100 },
    { name: "DFFPOSX1_2", type: "DFFPOSX1", x: 560.0, y: 100 },
    { name: "AOI21X1_1", type: "AOI21X1", x: 2480.0, y: 100 },
    { name: "OAI21X1_1", type: "OAI21X1", x: 3120.0, y: 100 },
    { name: "INVX1_1", type: "INVX1", x: 3760.0, y: 100 },
    { name: "NOR2X1_1", type: "NOR2X1", x: 4080.0, y: 100 },
    { name: "DFFPOSX1_1", type: "DFFPOSX1", x: 4560.0, y: 100 },
    { name: "BUFX2_1", type: "BUFX2", x: 6480.0, y: 100 },
    ],
    pins: [{ name: "clk", layer: "metal2", x1: 0, y1: 0, x2: 1, y2: 1, x: 2080.0, y: 2400.0, ori: "N" },
    { name: "reset", layer: "metal2", x1: 0, y1: 0, x2: 1, y2: 1, x: 4160.0, y: 2400.0, ori: "N" },
    { name: "dout<0>", layer: "metal3", x1: 0, y1: 0, x2: 1, y2: 1, x: 7200.0, y: 1200.0, ori: "N" },
    { name: "dout<1>", layer: "metal3", x1: 0, y1: 0, x2: 1, y2: 1, x: -160.0, y: 1200.0, ori: "N" },
    ],
    nets: [{
        name: "$auto$iopadmap.cc:164:execute$47<0>", connections: [{ name: "DFFPOSX1_1", pin: "Q" }, { name: "NOR2X1_1", pin: "B" }, { name: "AOI21X1_1", pin: "A" }, { name: "OAI21X1_1", pin: "A" }, { name: "BUFX2_1", pin: "A" }, ], routes: [
        { layer: "metal1", coords: [{ x: 6400, y: 1170 }, { x: 6400, y: 1200 }, { x: 6560, y: 1200 }, ] }, { layer: "metal1", coords: [{ x: 4480, y: 1200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 4480, y: 1200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 4480, y: 1200 }, { x: 6080, y: 1200 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 6080, y: 1200 }, { x: 6080, y: 1400 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 6080, y: 1400 }, { x: 6080, y: 1510 }, ] }, { layer: "metal1", coords: [{ x: 3040, y: 1200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 3040, y: 1200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 3040, y: 1200 }, { x: 4480, y: 1200 }, ] }, { layer: "metal1", coords: [{ x: 3200, y: 1400 }, { x: 3040, y: 1400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 3040, y: 1400 }, { x: 3040, y: 1200 }, ] }, ]
    }, {
        name: "dout<0>", connections: [{ name: "PIN", pin: "dout<0>" }, { name: "BUFX2_1", pin: "Y" }, ], routes: [
        { layer: "metal3", coords: [{ x: 7200, y: 1200 }, { x: 7040, y: 1200 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 7040, y: 1200 }, { x: 7040, y: 1400 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 7040, y: 1400 }, { x: 6880, y: 1400 }, ] }, ]
    }, {
        name: "$auto$iopadmap.cc:164:execute$47<1>", connections: [{ name: "DFFPOSX1_2", pin: "Q" }, { name: "AOI21X1_1", pin: "B" }, { name: "OAI21X1_1", pin: "B" }, { name: "BUFX2_2", pin: "A" }, ], routes: [
        { layer: "metal1", coords: [{ x: 640, y: 1170 }, { x: 640, y: 1200 }, { x: 480, y: 1200 }, ] }, { layer: "metal1", coords: [{ x: 2880, y: 1400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 2880, y: 1400 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 2880, y: 1400 }, { x: 960, y: 1400 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 960, y: 1400 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 960, y: 1400 }, { x: 960, y: 1510 }, ] }, { layer: "metal1", coords: [{ x: 3360, y: 1200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 3360, y: 1200 }, { x: 3360, y: 1400 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 3360, y: 1400 }, { x: 2880, y: 1400 }, ] }, ]
    }, {
        name: "dout<1>", connections: [{ name: "PIN", pin: "dout<1>" }, { name: "BUFX2_2", pin: "Y" }, ], routes: [
        { layer: "metal3", coords: [{ x: -160, y: 1200 }, { x: 160, y: 1200 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 160, y: 1200 }, { x: 160, y: 1400 }, ], via: "M2_M1" }, ]
    }, {
        name: "reset", connections: [{ name: "PIN", pin: "reset" }, { name: "NOR2X1_1", pin: "A" }, { name: "INVX1_1", pin: "A" }, ], routes: [
        { layer: "metal1", coords: [{ x: 4160, y: 1600 }, { x: 4000, y: 1600 }, ] }, { layer: "metal2", coords: [{ x: 4160, y: 2400 }, { x: 4160, y: 1600 }, ], via: "M2_M1" }, ]
    }, {
        name: "_1_", connections: [{ name: "OAI21X1_1", pin: "C" }, { name: "INVX1_1", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 3670, y: 800 }, { x: 3680, y: 800 }, { x: 3840, y: 800 }, ] }, ]
    }, {
        name: "_2_", connections: [{ name: "AOI21X1_1", pin: "C" }, { name: "OAI21X1_1", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 2560, y: 1600 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 2560, y: 1600 }, { x: 2560, y: 1200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 2560, y: 1200 }, { x: 2880, y: 1200 }, ], via: "M4_M3" }, { layer: "metal4", coords: [{ x: 2880, y: 1200 }, { x: 3360, y: 1200 }, { x: 3360, y: 1000 }, ], via: "M4_M3" }, { layer: "metal3", coords: [{ x: 3360, y: 1000 }, { x: 3520, y: 1000 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 3520, y: 1000 }, { x: 3360, y: 1000 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 3360, y: 1000 }, { x: 3450, y: 1000 }, ] }, ]
    }, {
        name: "_0_<1>", connections: [{ name: "DFFPOSX1_2", pin: "D" }, { name: "AOI21X1_1", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 1920, y: 1220 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 1920, y: 1200 }, { x: 1920, y: 1800 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 1920, y: 1800 }, { x: 2720, y: 1800 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 2720, y: 1800 }, ], via: "M2_M1" }, ]
    }, {
        name: "_0_<0>", connections: [{ name: "DFFPOSX1_1", pin: "D" }, { name: "NOR2X1_1", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 4800, y: 1220 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 4800, y: 1200 }, { x: 4800, y: 1400 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 4800, y: 1400 }, { x: 4320, y: 1400 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 4320, y: 1400 }, ], via: "M2_M1" }, ]
    }, {
        name: "clk", connections: [{ name: "PIN", pin: "clk" }, { name: "DFFPOSX1_2", pin: "CLK" }, { name: "DFFPOSX1_1", pin: "CLK" }, ], routes: [
        { layer: "metal1", coords: [{ x: 2240, y: 1400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 2240, y: 1400 }, { x: 2240, y: 1600 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 2240, y: 1600 }, { x: 4480, y: 1600 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 4480, y: 1600 }, { x: 4480, y: 1400 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 4480, y: 1400 }, { x: 4640, y: 1400 }, { x: 4650, y: 1400 }, ] }, { layer: "metal2", coords: [{ x: 2080, y: 2400 }, { x: 2240, y: 2400 }, { x: 2240, y: 1600 }, ] }, ]
    }, ],
}