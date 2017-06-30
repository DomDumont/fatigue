"use strict";
// http://ezelia.com/2013/pixi-tutorial
Object.defineProperty(exports, "__esModule", { value: true });
var SceneManager_1 = require("./engine/SceneManager");
var Scene_1 = require("./engine/Scene");
var scenesManager = new SceneManager_1.ScenesManager();
scenesManager.create(500, 500);
var img_bunny = require("./data/images/bunny.png");
var myScene = new Scene_1.Scene();
scenesManager.currentScene = myScene;
var mySPrite;
PIXI.loader
    .add(img_bunny)
    .load(setup);
function setup() {
    //This code will run when the loader has finished loading the image
    mySPrite = new PIXI.Sprite(PIXI.loader.resources[img_bunny].texture);
    //Add the cat to the stage
    myScene.addChild(mySPrite);
}
//# sourceMappingURL=main.js.map