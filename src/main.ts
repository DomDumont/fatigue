// http://ezelia.com/2013/pixi-tutorial

import {ScenesManager} from "./engine/SceneManager"
import {Scene} from "./engine/Scene"

let scenesManager = new ScenesManager();
 
scenesManager.create(500,500);




let img_bunny:any = require("./data/images/bunny.png");



var myScene = scenesManager.CreateScene("Menu");

scenesManager.goToScene('Menu');

let mySPrite;
PIXI.loader
  .add(img_bunny)
  .load(setup);

function setup() {
  //This code will run when the loader has finished loading the image
   mySPrite = new PIXI.Sprite(
    PIXI.loader.resources[img_bunny].texture
   );
       // center the sprites anchor point
        mySPrite.anchor.x = 0.5;
        mySPrite.anchor.y = 0.5;
        // move the sprite t the center of the screen
        mySPrite.position.x = 250;
        mySPrite.position.y = 250;     
  
    //Add the cat to the stage
  myScene.addChild(mySPrite);
  
    //register update event         
        myScene.onUpdate(function () {
            mySPrite.rotation += 0.1;
        });
}

