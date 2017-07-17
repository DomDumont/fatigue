"use strict";
// http://ezelia.com/2013/pixi-tutorial
Object.defineProperty(exports, "__esModule", { value: true });
var Application_1 = require("./engine/PIXIForms/Application");
var Form1_1 = require("./game/Form1");
//$(document).ready(() => {
//    Application.Run(new Form1());
//});
Application_1.default.Ready(function () {
    Application_1.default.Run(new Form1_1.default());
});
//# sourceMappingURL=main.js.map