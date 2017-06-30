import * as PIXI from "pixi.js";

let img_bunny:any = require("./data/images/bunny.png");


var renderer = PIXI.autoDetectRenderer(256, 256);

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();

//Tell the `renderer` to `render` the `stage`
(renderer as any).backgroundColor = 0xAA1639;
renderer.render(stage);

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
  stage.addChild(mySPrite);
  
  //Render the stage   
  renderer.render(stage);
}

