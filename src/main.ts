// http://ezelia.com/2013/pixi-tutorial

import {ScenesManager} from "./engine/SceneManager"
import {Scene} from "./engine/Scene"

let scenesManager = new ScenesManager();
 
scenesManager.create(500,500);




let img_bunny:any = require("./data/images/bunny.png");



var myScene = new Scene();

scenesManager.currentScene = myScene;

let mySPrite;
PIXI.loader
  .add(img_bunny)
  .load(setup);

function setup() {
  //This code will run when the loader has finished loading the image
   mySPrite = new PIXI.Sprite(
    PIXI.loader.resources[img_bunny].texture
  );
    //Add the cat to the stage
  myScene.addChild(mySPrite);
  
}

