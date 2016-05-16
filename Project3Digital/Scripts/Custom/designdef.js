var defJSON = {
    die: { x1: -480.0, y1: -400.0, x2: 8000.0, y2: 6400.0 },

    cells: [{ name: "AND2X2_4", type: "AND2X2", x: 80.0, y: 100 },
    { name: "NOR2X1_4", type: "NOR2X1", x: 720.0, y: 100 },
    { name: "OR2X2_4", type: "OR2X2", x: 1200.0, y: 100 },
    { name: "NAND2X1_7", type: "NAND2X1", x: 1840.0, y: 100 },
    { name: "BUFX2_4", type: "BUFX2", x: 2320.0, y: 100 },
    { name: "AND2X2_2", type: "AND2X2", x: 2800.0, y: 100 },
    { name: "NOR2X1_2", type: "NOR2X1", x: 3440.0, y: 100 },
    { name: "OAI21X1_3", type: "OAI21X1", x: 3920.0, y: 100 },
    { name: "OAI21X1_4", type: "OAI21X1", x: 4560.0, y: 100 },
    { name: "OR2X2_3", type: "OR2X2", x: 5200.0, y: 100 },
    { name: "NAND2X1_5", type: "NAND2X1", x: 5840.0, y: 100 },
    { name: "NOR2X1_3", type: "NOR2X1", x: 6320.0, y: 100 },
    { name: "AND2X2_3", type: "AND2X2", x: 6800.0, y: 100 },
    { name: "FILL_1_1", type: "FILL", x: 7440.0, y: 100 },
    { name: "BUFX2_5", type: "BUFX2", x: 80.0, y: 2100 },
    { name: "OAI21X1_7", type: "OAI21X1", x: 560.0, y: 2100 },
    { name: "INVX1_4", type: "INVX1", x: 1200.0, y: 2100 },
    { name: "OAI21X1_8", type: "OAI21X1", x: 1520.0, y: 2100 },
    { name: "NAND2X1_8", type: "NAND2X1", x: 2160.0, y: 2100 },
    { name: "NAND3X1_4", type: "NAND3X1", x: 2640.0, y: 2100 },
    { name: "NAND2X1_3", type: "NAND2X1", x: 3280.0, y: 2100 },
    { name: "OR2X2_2", type: "OR2X2", x: 3760.0, y: 2100 },
    { name: "INVX1_2", type: "INVX1", x: 4400.0, y: 2100 },
    { name: "NAND3X1_2", type: "NAND3X1", x: 4720.0, y: 2100 },
    { name: "NAND2X1_4", type: "NAND2X1", x: 5360.0, y: 2100 },
    { name: "BUFX2_2", type: "BUFX2", x: 5840.0, y: 2100 },
    { name: "NAND3X1_3", type: "NAND3X1", x: 6320.0, y: 2100 },
    { name: "OAI21X1_6", type: "OAI21X1", x: 6960.0, y: 2100 },
    { name: "BUFX2_1", type: "BUFX2", x: 80.0, y: 4100 },
    { name: "NAND2X1_2", type: "NAND2X1", x: 560.0, y: 4100 },
    { name: "OAI21X1_1", type: "OAI21X1", x: 1040.0, y: 4100 },
    { name: "AND2X2_1", type: "AND2X2", x: 1680.0, y: 4100 },
    { name: "NOR2X1_1", type: "NOR2X1", x: 2320.0, y: 4100 },
    { name: "INVX1_1", type: "INVX1", x: 2800.0, y: 4100 },
    { name: "OAI21X1_2", type: "OAI21X1", x: 3120.0, y: 4100 },
    { name: "NAND3X1_1", type: "NAND3X1", x: 3760.0, y: 4100 },
    { name: "NAND2X1_1", type: "NAND2X1", x: 4400.0, y: 4100 },
    { name: "OR2X2_1", type: "OR2X2", x: 4880.0, y: 4100 },
    { name: "BUFX2_3", type: "BUFX2", x: 5520.0, y: 4100 },
    { name: "NAND2X1_6", type: "NAND2X1", x: 6000.0, y: 4100 },
    { name: "OAI21X1_5", type: "OAI21X1", x: 6480.0, y: 4100 },
    { name: "INVX1_3", type: "INVX1", x: 7120.0, y: 4100 },
    { name: "FILL_3_1", type: "FILL", x: 7440.0, y: 4100 },
    ],
    pins: [{ name: "a<0>", layer: "metal2", x1: 0, y1: 0, x2: 1, y2: 1, x: 5120.0, y: 6400.0, ori: "N" },
    { name: "a<1>", layer: "metal2", x1: 0, y1: 0, x2: 1, y2: 1, x: 3520.0, y: -200.0, ori: "N" },
    { name: "a<2>", layer: "metal2", x1: 0, y1: 0, x2: 1, y2: 1, x: 6240.0, y: -200.0, ori: "N" },
    { name: "a<3>", layer: "metal3", x1: 0, y1: 0, x2: 1, y2: 1, x: -160.0, y: 1200.0, ori: "N" },
    { name: "b<0>", layer: "metal2", x1: 0, y1: 0, x2: 1, y2: 1, x: 2880.0, y: 6400.0, ori: "N" },
    { name: "b<1>", layer: "metal2", x1: 0, y1: 0, x2: 1, y2: 1, x: 4480.0, y: -200.0, ori: "N" },
    { name: "b<2>", layer: "metal3", x1: 0, y1: 0, x2: 1, y2: 1, x: 7840.0, y: 5200.0, ori: "N" },
    { name: "b<3>", layer: "metal3", x1: 0, y1: 0, x2: 1, y2: 1, x: -160.0, y: 3400.0, ori: "N" },
    { name: "cin", layer: "metal2", x1: 0, y1: 0, x2: 1, y2: 1, x: 2720.0, y: 6400.0, ori: "N" },
    { name: "sum<0>", layer: "metal3", x1: 0, y1: 0, x2: 1, y2: 1, x: -160.0, y: 5200.0, ori: "N" },
    { name: "sum<1>", layer: "metal3", x1: 0, y1: 0, x2: 1, y2: 1, x: 7840.0, y: 3200.0, ori: "N" },
    { name: "sum<2>", layer: "metal2", x1: 0, y1: 0, x2: 1, y2: 1, x: 5920.0, y: 6400.0, ori: "N" },
    { name: "sum<3>", layer: "metal2", x1: 0, y1: 0, x2: 1, y2: 1, x: 2720.0, y: -200.0, ori: "N" },
    { name: "cout", layer: "metal3", x1: 0, y1: 0, x2: 1, y2: 1, x: -160.0, y: 3200.0, ori: "N" },
    ],
    nets: [{
        name: "FA1.sum", connections: [{ name: "NAND2X1_2", pin: "Y" }, { name: "BUFX2_1", pin: "A" }, ], routes: [
        { layer: "metal1", coords: [{ x: 800, y: 5200 }, { x: 480, y: 5200 }, ] }, ]
    }, {
        name: "sum<0>", connections: [{ name: "PIN", pin: "sum<0>" }, { name: "BUFX2_1", pin: "Y" }, ], routes: [
        { layer: "metal3", coords: [{ x: -160, y: 5200 }, { x: 160, y: 5200 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 160, y: 5200 }, { x: 160, y: 5400 }, ], via: "M2_M1" }, ]
    }, {
        name: "FA2.sum", connections: [{ name: "NAND2X1_4", pin: "Y" }, { name: "BUFX2_2", pin: "A" }, ], routes: [
        { layer: "metal1", coords: [{ x: 5600, y: 3000 }, { x: 5920, y: 3000 }, ] }, ]
    }, {
        name: "sum<1>", connections: [{ name: "PIN", pin: "sum<1>" }, { name: "BUFX2_2", pin: "Y" }, ], routes: [
        { layer: "metal3", coords: [{ x: 7840, y: 3200 }, { x: 6240, y: 3200 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 6240, y: 3200 }, { x: 6240, y: 3400 }, ], via: "M2_M1" }, ]
    }, {
        name: "FA3.sum", connections: [{ name: "NAND2X1_6", pin: "Y" }, { name: "BUFX2_3", pin: "A" }, ], routes: [
        { layer: "metal1", coords: [{ x: 6240, y: 5400 }, { x: 6080, y: 5400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 6080, y: 5400 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 6080, y: 5400 }, { x: 5600, y: 5400 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 5600, y: 5360 }, ], via: "M2_M1" }, ]
    }, {
        name: "sum<2>", connections: [{ name: "PIN", pin: "sum<2>" }, { name: "BUFX2_3", pin: "Y" }, ], routes: [
        { layer: "metal2", coords: [{ x: 5920, y: 6400 }, { x: 5920, y: 5800 }, ], via: "M2_M1" }, ]
    }, {
        name: "FA4.sum", connections: [{ name: "NAND2X1_8", pin: "Y" }, { name: "BUFX2_4", pin: "A" }, ], routes: [
        { layer: "metal1", coords: [{ x: 2430, y: 2400 }, { x: 2400, y: 2400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 2400, y: 2400 }, { x: 2400, y: 1370 }, { x: 2400, y: 1360 }, ], via: "M2_M1" }, ]
    }, {
        name: "sum<3>", connections: [{ name: "PIN", pin: "sum<3>" }, { name: "BUFX2_4", pin: "Y" }, ], routes: [
        { layer: "metal2", coords: [{ x: 2720, y: -200 }, { x: 2720, y: 400 }, ], via: "M2_M1" }, ]
    }, {
        name: "$auto$iopadmap.cc:164:execute$97", connections: [{ name: "OAI21X1_8", pin: "Y" }, { name: "BUFX2_5", pin: "A" }, ], routes: [
        { layer: "metal1", coords: [{ x: 1920, y: 2800 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 1920, y: 2800 }, { x: 1920, y: 2600 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 1920, y: 2600 }, { x: 480, y: 2600 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 480, y: 2600 }, { x: 480, y: 3000 }, ], via: "M2_M1" }, ]
    }, {
        name: "cout", connections: [{ name: "PIN", pin: "cout" }, { name: "BUFX2_5", pin: "Y" }, ], routes: [
        { layer: "metal3", coords: [{ x: -160, y: 3200 }, { x: 160, y: 3200 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 160, y: 3200 }, { x: 160, y: 3400 }, ], via: "M2_M1" }, ]
    }, {
        name: "b<0>", connections: [{ name: "PIN", pin: "b<0>" }, { name: "OAI21X1_1", pin: "C" }, { name: "INVX1_1", pin: "A" }, ], routes: [
        { layer: "metal2", coords: [{ x: 2880, y: 6400 }, { x: 2880, y: 5600 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 1120, y: 5000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 1120, y: 5000 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 1120, y: 5000 }, { x: 2880, y: 5000 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 2880, y: 5000 }, { x: 2880, y: 5600 }, ] }, ]
    }, {
        name: "FA1.$abc$87$n6", connections: [{ name: "OAI21X1_2", pin: "A" }, { name: "NAND3X1_1", pin: "A" }, { name: "INVX1_1", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 3200, y: 5400 }, { x: 3040, y: 5400 }, ] }, { layer: "metal1", coords: [{ x: 3840, y: 5000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 3840, y: 5000 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 3840, y: 5000 }, { x: 3040, y: 5000 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 3040, y: 5000 }, ], via: "M2_M1" }, ]
    }, {
        name: "cin", connections: [{ name: "PIN", pin: "cin" }, { name: "AND2X2_1", pin: "A" }, { name: "NOR2X1_1", pin: "A" }, { name: "NAND2X1_1", pin: "A" }, { name: "OR2X2_1", pin: "A" }, ], routes: [
        { layer: "metal1", coords: [{ x: 4800, y: 5400 }, { x: 4960, y: 5400 }, { x: 4960, y: 5600 }, ] }, { layer: "metal2", coords: [{ x: 2720, y: 6400 }, { x: 2720, y: 5600 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 2720, y: 5600 }, { x: 4960, y: 5600 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 4960, y: 5600 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 2720, y: 5600 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 2240, y: 5400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 2240, y: 5400 }, { x: 2240, y: 5600 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 2240, y: 5600 }, { x: 2720, y: 5600 }, ] }, ]
    }, {
        name: "a<0>", connections: [{ name: "PIN", pin: "a<0>" }, { name: "AND2X2_1", pin: "B" }, { name: "NOR2X1_1", pin: "B" }, { name: "NAND2X1_1", pin: "B" }, { name: "OR2X2_1", pin: "B" }, ], routes: [
        { layer: "metal2", coords: [{ x: 5120, y: 6400 }, { x: 5120, y: 5400 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 4480, y: 5000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 4480, y: 5000 }, { x: 4480, y: 5400 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 4480, y: 5400 }, { x: 5120, y: 5400 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 2400, y: 5200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 2400, y: 5200 }, { x: 2400, y: 5400 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 2400, y: 5400 }, { x: 4480, y: 5400 }, ] }, { layer: "metal1", coords: [{ x: 2080, y: 5360 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 2080, y: 5400 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 2080, y: 5400 }, { x: 2400, y: 5400 }, ] }, ]
    }, {
        name: "FA1.$abc$87$n7_1", connections: [{ name: "NAND3X1_1", pin: "C" }, { name: "OR2X2_1", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 4160, y: 4950 }, { x: 4160, y: 5000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 4160, y: 5000 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 4160, y: 5000 }, { x: 5440, y: 5000 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 5440, y: 5000 }, ], via: "M2_M1" }, ]
    }, {
        name: "FA1.$abc$87$n8", connections: [{ name: "OAI21X1_2", pin: "C" }, { name: "NAND3X1_1", pin: "B" }, { name: "NAND2X1_1", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 4150, y: 5200 }, { x: 4160, y: 5200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 4160, y: 5200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 4160, y: 5200 }, { x: 4640, y: 5200 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 4640, y: 5200 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 3680, y: 5000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 3680, y: 5000 }, { x: 3680, y: 5200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 3680, y: 5200 }, { x: 4160, y: 5200 }, ] }, ]
    }, {
        name: "FA1.$abc$87$n9", connections: [{ name: "NAND2X1_2", pin: "B" }, { name: "NAND3X1_1", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 640, y: 4850 }, { x: 640, y: 4800 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 640, y: 4800 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 640, y: 4800 }, { x: 4000, y: 4800 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 4000, y: 4800 }, { x: 4000, y: 4600 }, ], via: "M2_M1" }, ]
    }, {
        name: "FA1.$abc$87$n10", connections: [{ name: "OAI21X1_2", pin: "B" }, { name: "OAI21X1_1", pin: "A" }, { name: "NOR2X1_1", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 3360, y: 5200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 3360, y: 5200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 3360, y: 5200 }, { x: 2720, y: 5200 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 2720, y: 5200 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 2720, y: 5200 }, { x: 2560, y: 5200 }, ] }, { layer: "metal1", coords: [{ x: 1600, y: 5400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 1600, y: 5400 }, { x: 1600, y: 5200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 1600, y: 5200 }, { x: 2720, y: 5200 }, ] }, ]
    }, {
        name: "FA1.$abc$87$n11", connections: [{ name: "OAI21X1_1", pin: "B" }, { name: "AND2X2_1", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 1440, y: 5200 }, { x: 1760, y: 5200 }, ] }, ]
    }, {
        name: "FA1.$abc$87$n12", connections: [{ name: "NAND2X1_2", pin: "A" }, { name: "OAI21X1_1", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 960, y: 5400 }, { x: 1120, y: 5400 }, ] }, ]
    }, {
        name: "FA1.cout", connections: [{ name: "AND2X2_2", pin: "A" }, { name: "NOR2X1_2", pin: "A" }, { name: "NAND2X1_3", pin: "A" }, { name: "OR2X2_2", pin: "A" }, { name: "OAI21X1_2", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 3360, y: 2800 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 3360, y: 2800 }, { x: 3360, y: 4400 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 3360, y: 4400 }, { x: 3390, y: 4400 }, ] }, { layer: "metal1", coords: [{ x: 3840, y: 2600 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 3840, y: 2600 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 3840, y: 2600 }, { x: 3360, y: 2600 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 3360, y: 2600 }, { x: 3360, y: 2800 }, ] }, { layer: "metal1", coords: [{ x: 3840, y: 1600 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 3840, y: 1600 }, { x: 3840, y: 2600 }, ] }, { layer: "metal1", coords: [{ x: 2880, y: 1400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 2880, y: 1400 }, { x: 2880, y: 2600 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 2880, y: 2600 }, { x: 3360, y: 2600 }, ] }, ]
    }, {
        name: "b<1>", connections: [{ name: "PIN", pin: "b<1>" }, { name: "OAI21X1_3", pin: "C" }, { name: "INVX1_2", pin: "A" }, ], routes: [
        { layer: "metal1", coords: [{ x: 4480, y: 1000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 4480, y: 1000 }, { x: 4480, y: 2600 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 4480, y: -200 }, { x: 4480, y: 1000 }, ] }, ]
    }, {
        name: "FA2.$abc$87$n6", connections: [{ name: "OAI21X1_4", pin: "A" }, { name: "NAND3X1_2", pin: "A" }, { name: "INVX1_2", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 4800, y: 3050 }, { x: 4800, y: 3000 }, { x: 4640, y: 3000 }, ] }, { layer: "metal1", coords: [{ x: 4640, y: 1400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 4640, y: 1400 }, { x: 4640, y: 2400 }, ], via: "M2_M1" }, ]
    }, {
        name: "a<1>", connections: [{ name: "PIN", pin: "a<1>" }, { name: "AND2X2_2", pin: "B" }, { name: "NOR2X1_2", pin: "B" }, { name: "NAND2X1_3", pin: "B" }, { name: "OR2X2_2", pin: "B" }, ], routes: [
        { layer: "metal1", coords: [{ x: 3680, y: 3200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 3680, y: 3200 }, { x: 3680, y: 2800 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 3680, y: 2800 }, { x: 4000, y: 2800 }, ] }, { layer: "metal1", coords: [{ x: 3520, y: 1200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 3520, y: 1200 }, { x: 3520, y: 1800 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 3520, y: 1800 }, { x: 4000, y: 1800 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 4000, y: 1800 }, { x: 4000, y: 2800 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 3040, y: 1360 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 3040, y: 1400 }, { x: 3040, y: 1800 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 3040, y: 1800 }, { x: 3520, y: 1800 }, ] }, { layer: "metal2", coords: [{ x: 3520, y: -200 }, { x: 3520, y: 1200 }, ] }, ]
    }, {
        name: "FA2.$abc$87$n7_1", connections: [{ name: "NAND3X1_2", pin: "C" }, { name: "OR2X2_2", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 5120, y: 3250 }, { x: 5120, y: 3200 }, { x: 4960, y: 3200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 4960, y: 3200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 4960, y: 3200 }, { x: 4480, y: 3200 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 4480, y: 3200 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 4480, y: 3200 }, { x: 4320, y: 3200 }, ] }, ]
    }, {
        name: "FA2.$abc$87$n8", connections: [{ name: "OAI21X1_4", pin: "C" }, { name: "NAND3X1_2", pin: "B" }, { name: "NAND2X1_3", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 4960, y: 3000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 4960, y: 3000 }, { x: 4960, y: 2800 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 4960, y: 2800 }, { x: 3520, y: 2800 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 3520, y: 2800 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 5120, y: 1000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 5120, y: 1000 }, { x: 4960, y: 1000 }, { x: 4960, y: 2800 }, ] }, ]
    }, {
        name: "FA2.$abc$87$n9", connections: [{ name: "NAND2X1_4", pin: "B" }, { name: "NAND3X1_2", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 5760, y: 3350 }, { x: 5760, y: 3400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 5760, y: 3400 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 5760, y: 3400 }, { x: 5440, y: 3400 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 5440, y: 3400 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 5440, y: 3400 }, { x: 5280, y: 3400 }, ] }, ]
    }, {
        name: "FA2.$abc$87$n10", connections: [{ name: "OAI21X1_4", pin: "B" }, { name: "OAI21X1_3", pin: "A" }, { name: "NOR2X1_2", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 4000, y: 1400 }, { x: 3680, y: 1400 }, ] }, { layer: "metal1", coords: [{ x: 4800, y: 1200 }, { x: 4640, y: 1200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 4640, y: 1200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 4640, y: 1200 }, { x: 4000, y: 1200 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 4000, y: 1200 }, { x: 4000, y: 1400 }, ], via: "M2_M1" }, ]
    }, {
        name: "FA2.$abc$87$n11", connections: [{ name: "OAI21X1_3", pin: "B" }, { name: "AND2X2_2", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 4160, y: 1200 }, { x: 3840, y: 1200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 3840, y: 1200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 3840, y: 1200 }, { x: 3360, y: 1200 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 3360, y: 1200 }, ], via: "M2_M1" }, ]
    }, {
        name: "FA2.$abc$87$n12", connections: [{ name: "NAND2X1_4", pin: "A" }, { name: "OAI21X1_3", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 5440, y: 2800 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 5440, y: 2800 }, { x: 5440, y: 2600 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 5440, y: 2600 }, { x: 4800, y: 2600 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 4800, y: 2600 }, { x: 4800, y: 2000 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 4800, y: 2000 }, { x: 4320, y: 2000 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 4320, y: 2000 }, { x: 4320, y: 1400 }, ], via: "M2_M1" }, ]
    }, {
        name: "FA3.cin", connections: [{ name: "AND2X2_3", pin: "A" }, { name: "NOR2X1_3", pin: "A" }, { name: "NAND2X1_5", pin: "A" }, { name: "OR2X2_3", pin: "A" }, { name: "OAI21X1_4", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 5280, y: 1600 }, { x: 5120, y: 1600 }, ] }, { layer: "metal1", coords: [{ x: 5920, y: 1400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 5920, y: 1400 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 5920, y: 1400 }, { x: 5280, y: 1400 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 5280, y: 1400 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 5280, y: 1400 }, { x: 5120, y: 1400 }, ] }, { layer: "metal1", coords: [{ x: 6400, y: 1600 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 6400, y: 1600 }, { x: 6400, y: 1400 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 6400, y: 1400 }, { x: 5920, y: 1400 }, ] }, { layer: "metal1", coords: [{ x: 6880, y: 1400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 6880, y: 1400 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 6880, y: 1400 }, { x: 6400, y: 1400 }, ] }, ]
    }, {
        name: "b<2>", connections: [{ name: "PIN", pin: "b<2>" }, { name: "OAI21X1_5", pin: "C" }, { name: "INVX1_3", pin: "A" }, ], routes: [
        { layer: "metal3", coords: [{ x: 7840, y: 5200 }, { x: 7520, y: 5200 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 7520, y: 5200 }, { x: 7520, y: 5600 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 7520, y: 5600 }, { x: 7360, y: 5600 }, ] }, { layer: "metal1", coords: [{ x: 7040, y: 5000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 7040, y: 5000 }, { x: 7040, y: 5200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 7040, y: 5200 }, { x: 7520, y: 5200 }, ] }, ]
    }, {
        name: "FA3.$abc$87$n6", connections: [{ name: "OAI21X1_6", pin: "A" }, { name: "NAND3X1_3", pin: "A" }, { name: "INVX1_3", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 6880, y: 3200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 6880, y: 3200 }, { x: 6880, y: 3800 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 6880, y: 3800 }, { x: 7200, y: 3800 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 7200, y: 3800 }, { x: 7200, y: 4400 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 7520, y: 2800 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 7520, y: 2800 }, { x: 7520, y: 3800 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 7520, y: 3800 }, { x: 7200, y: 3800 }, ] }, ]
    }, {
        name: "a<2>", connections: [{ name: "PIN", pin: "a<2>" }, { name: "AND2X2_3", pin: "B" }, { name: "NOR2X1_3", pin: "B" }, { name: "NAND2X1_5", pin: "B" }, { name: "OR2X2_3", pin: "B" }, ], routes: [
        { layer: "metal1", coords: [{ x: 6240, y: 1000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 6240, y: 1000 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 6240, y: 1000 }, { x: 5440, y: 1000 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 5440, y: 1000 }, { x: 5440, y: 1400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 6240, y: -200 }, { x: 6240, y: 1000 }, ] }, { layer: "metal1", coords: [{ x: 6720, y: 1200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 6720, y: 1200 }, { x: 6720, y: 1000 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 6720, y: 1000 }, { x: 6240, y: 1000 }, ] }, { layer: "metal1", coords: [{ x: 7040, y: 1200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 7040, y: 1200 }, { x: 7040, y: 1000 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 7040, y: 1000 }, { x: 6720, y: 1000 }, ] }, ]
    }, {
        name: "FA3.$abc$87$n7_1", connections: [{ name: "NAND3X1_3", pin: "C" }, { name: "OR2X2_3", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 6560, y: 3250 }, { x: 6560, y: 3200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 6560, y: 3200 }, { x: 6560, y: 3000 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 6560, y: 3000 }, { x: 6240, y: 3000 }, ], via: "M4_M3" }, { layer: "metal4", coords: [{ x: 6240, y: 3000 }, { x: 6240, y: 1800 }, ], via: "M4_M3" }, { layer: "metal3", coords: [{ x: 6240, y: 1800 }, { x: 5760, y: 1800 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 5760, y: 1800 }, ], via: "M2_M1" }, ]
    }, {
        name: "FA3.$abc$87$n8", connections: [{ name: "OAI21X1_6", pin: "C" }, { name: "NAND3X1_3", pin: "B" }, { name: "NAND2X1_5", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 6720, y: 3000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 6720, y: 3000 }, { x: 6720, y: 2000 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 6720, y: 2000 }, { x: 6240, y: 2000 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 6240, y: 2000 }, { x: 6240, y: 1800 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 7050, y: 3400 }, { x: 7040, y: 3400 }, { x: 6720, y: 3400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 6720, y: 3400 }, { x: 6720, y: 3000 }, ] }, ]
    }, {
        name: "FA3.$abc$87$n9", connections: [{ name: "NAND2X1_6", pin: "B" }, { name: "NAND3X1_3", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 6080, y: 4850 }, { x: 6080, y: 4800 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 6080, y: 4800 }, { x: 6080, y: 4000 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 6080, y: 4000 }, { x: 6400, y: 4000 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 6400, y: 4000 }, { x: 6400, y: 3800 }, ], via: "M2_M1" }, ]
    }, {
        name: "FA3.$abc$87$n10", connections: [{ name: "OAI21X1_6", pin: "B" }, { name: "OAI21X1_5", pin: "A" }, { name: "NOR2X1_3", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 7360, y: 3000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 7360, y: 3000 }, { x: 7360, y: 2800 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 7360, y: 2800 }, { x: 6880, y: 2800 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 6880, y: 2800 }, { x: 6880, y: 1800 }, { x: 6720, y: 1800 }, { x: 6720, y: 1600 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 6720, y: 1600 }, { x: 6560, y: 1600 }, ] }, { layer: "metal1", coords: [{ x: 6560, y: 5400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 6560, y: 5400 }, { x: 6560, y: 4400 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 6560, y: 4400 }, ], via: "M4_M3" }, { layer: "metal4", coords: [{ x: 6560, y: 4400 }, { x: 6560, y: 2800 }, ], via: "M4_M3" }, { layer: "metal3", coords: [{ x: 6560, y: 2800 }, { x: 6880, y: 2800 }, ] }, ]
    }, {
        name: "FA3.$abc$87$n11", connections: [{ name: "OAI21X1_5", pin: "B" }, { name: "AND2X2_3", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 6720, y: 5200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 6720, y: 5200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 6720, y: 5200 }, { x: 6880, y: 5200 }, ], via: "M4_M3" }, { layer: "metal4", coords: [{ x: 6880, y: 5200 }, { x: 6880, y: 1800 }, ], via: "M4_M3" }, { layer: "metal3", coords: [{ x: 6880, y: 1800 }, { x: 7360, y: 1800 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 7360, y: 1800 }, ], via: "M2_M1" }, ]
    }, {
        name: "FA3.$abc$87$n12", connections: [{ name: "NAND2X1_6", pin: "A" }, { name: "OAI21X1_5", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 6400, y: 5400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 6400, y: 5400 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 6400, y: 5400 }, { x: 6880, y: 5400 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 6880, y: 5400 }, ], via: "M2_M1" }, ]
    }, {
        name: "FA4.cin", connections: [{ name: "AND2X2_4", pin: "A" }, { name: "NOR2X1_4", pin: "A" }, { name: "NAND2X1_7", pin: "A" }, { name: "OR2X2_4", pin: "A" }, { name: "OAI21X1_6", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 2240, y: 1400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 2240, y: 1400 }, { x: 2240, y: 2200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 2240, y: 2200 }, { x: 7040, y: 2200 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 7040, y: 2200 }, { x: 7040, y: 2400 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 1280, y: 1600 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 1280, y: 1600 }, { x: 1280, y: 2200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 1280, y: 2200 }, { x: 2240, y: 2200 }, ] }, { layer: "metal1", coords: [{ x: 800, y: 1600 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 800, y: 1600 }, { x: 800, y: 2200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 800, y: 2200 }, { x: 1280, y: 2200 }, ] }, { layer: "metal1", coords: [{ x: 640, y: 1400 }, { x: 800, y: 1400 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 800, y: 1400 }, { x: 800, y: 1600 }, ] }, ]
    }, {
        name: "b<3>", connections: [{ name: "PIN", pin: "b<3>" }, { name: "OAI21X1_7", pin: "C" }, { name: "INVX1_4", pin: "A" }, ], routes: [
        { layer: "metal1", coords: [{ x: 1120, y: 3200 }, { x: 1280, y: 3200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 1280, y: 3200 }, { x: 1280, y: 2600 }, ], via: "M2_M1" }, { layer: "metal3", coords: [{ x: -160, y: 3400 }, { x: 1280, y: 3400 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 1280, y: 3400 }, { x: 1280, y: 3200 }, ] }, ]
    }, {
        name: "FA4.$abc$87$n6", connections: [{ name: "OAI21X1_8", pin: "A" }, { name: "NAND3X1_4", pin: "A" }, { name: "INVX1_4", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 1600, y: 2800 }, { x: 1440, y: 2800 }, ] }, { layer: "metal1", coords: [{ x: 2720, y: 3050 }, { x: 2720, y: 3000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 2720, y: 3000 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 2720, y: 3000 }, { x: 1600, y: 3000 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 1600, y: 3000 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 1600, y: 3000 }, { x: 1440, y: 3000 }, ] }, ]
    }, {
        name: "a<3>", connections: [{ name: "PIN", pin: "a<3>" }, { name: "AND2X2_4", pin: "B" }, { name: "NOR2X1_4", pin: "B" }, { name: "NAND2X1_7", pin: "B" }, { name: "OR2X2_4", pin: "B" }, ], routes: [
        { layer: "metal1", coords: [{ x: 1120, y: 1200 }, { x: 1120, y: 1400 }, { x: 1440, y: 1400 }, ] }, { layer: "metal3", coords: [{ x: -160, y: 1200 }, { x: 1120, y: 1200 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 1120, y: 1200 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 480, y: 1200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 480, y: 1200 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 1920, y: 1000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 1920, y: 1000 }, { x: 1920, y: 1200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 1920, y: 1200 }, { x: 1120, y: 1200 }, ] }, ]
    }, {
        name: "FA4.$abc$87$n7_1", connections: [{ name: "NAND3X1_4", pin: "C" }, { name: "OR2X2_4", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 3040, y: 3250 }, { x: 3040, y: 3200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 3040, y: 3200 }, { x: 3040, y: 3000 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 3040, y: 3000 }, { x: 3040, y: 3200 }, ], via: "M4_M3" }, { layer: "metal4", coords: [{ x: 3040, y: 3200 }, { x: 3040, y: 2400 }, ], via: "M4_M3" }, { layer: "metal3", coords: [{ x: 3040, y: 2400 }, { x: 1760, y: 2400 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 1760, y: 2400 }, { x: 1760, y: 1800 }, ], via: "M2_M1" }, ]
    }, {
        name: "FA4.$abc$87$n8", connections: [{ name: "OAI21X1_8", pin: "C" }, { name: "NAND3X1_4", pin: "B" }, { name: "NAND2X1_7", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 2080, y: 3200 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 2080, y: 3200 }, { x: 2080, y: 1800 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 2080, y: 1800 }, { x: 2050, y: 1800 }, ] }, { layer: "metal1", coords: [{ x: 2880, y: 3000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 2880, y: 3000 }, { x: 2880, y: 3200 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 2880, y: 3200 }, { x: 2080, y: 3200 }, ], via: "M3_M2" }, ]
    }, {
        name: "FA4.$abc$87$n9", connections: [{ name: "NAND2X1_8", pin: "B" }, { name: "NAND3X1_4", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 2560, y: 3350 }, { x: 2560, y: 3400 }, { x: 2880, y: 3400 }, { x: 2880, y: 3600 }, ] }, ]
    }, {
        name: "FA4.$abc$87$n10", connections: [{ name: "OAI21X1_8", pin: "B" }, { name: "OAI21X1_7", pin: "A" }, { name: "NOR2X1_4", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 640, y: 2800 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 640, y: 2800 }, { x: 640, y: 2400 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 640, y: 2400 }, { x: 960, y: 2400 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 960, y: 2400 }, { x: 960, y: 1800 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 1760, y: 3000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 1760, y: 3000 }, { x: 1760, y: 2800 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 1760, y: 2800 }, { x: 640, y: 2800 }, ], via: "M3_M2" }, ]
    }, {
        name: "FA4.$abc$87$n11", connections: [{ name: "OAI21X1_7", pin: "B" }, { name: "AND2X2_4", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 800, y: 3000 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 800, y: 3000 }, { x: 640, y: 3000 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 640, y: 3000 }, { x: 800, y: 3000 }, ], via: "M4_M3" }, { layer: "metal4", coords: [{ x: 800, y: 3000 }, { x: 800, y: 2000 }, ], via: "M4_M3" }, { layer: "metal3", coords: [{ x: 800, y: 2000 }, { x: 160, y: 2000 }, ], via: "M3_M2" }, { layer: "metal2", coords: [{ x: 160, y: 2000 }, { x: 160, y: 1800 }, ], via: "M2_M1" }, ]
    }, {
        name: "FA4.$abc$87$n12", connections: [{ name: "NAND2X1_8", pin: "A" }, { name: "OAI21X1_7", pin: "Y" }, ], routes: [
        { layer: "metal1", coords: [{ x: 2240, y: 2800 }, ], via: "M2_M1" }, { layer: "metal2", coords: [{ x: 2240, y: 2800 }, ], via: "M3_M2" }, { layer: "metal3", coords: [{ x: 2240, y: 2800 }, { x: 1920, y: 2800 }, ], via: "M4_M3" }, { layer: "metal4", coords: [{ x: 1920, y: 2800 }, { x: 1440, y: 2800 }, { x: 1440, y: 3000 }, ], via: "M4_M3" }, { layer: "metal3", coords: [{ x: 1440, y: 3000 }, { x: 1120, y: 3000 }, ], via: "M3_M2" }, { layer: "metal1", coords: [{ x: 1120, y: 3000 }, ], via: "M2_M1" }, { layer: "metal1", coords: [{ x: 1120, y: 3000 }, { x: 960, y: 3000 }, ] }, ]
    }, ],
}