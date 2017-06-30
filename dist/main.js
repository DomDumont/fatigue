"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = require("pixi.js");
var img_bunny = require("./data/images/bunny.png");
var renderer = PIXI.autoDetectRenderer(256, 256);
//Add the canvas to the HTML document
document.body.appendChild(renderer.view);
//Create a container object called the `stage`
var stage = new PIXI.Container();
//Tell the `renderer` to `render` the `stage`
renderer.backgroundColor = 0xAA1639;
renderer.render(stage);
var mySPrite;
PIXI.loader
    .add(img_bunny)
    .load(setup);
function setup() {
    //This code will run when the loader has finished loading the image
    mySPrite = new PIXI.Sprite(PIXI.loader.resources[img_bunny].texture);
    //Add the cat to the stage
    stage.addChild(mySPrite);
    //Render the stage   
    renderer.render(stage);
}
//# sourceMappingURL=main.js.map