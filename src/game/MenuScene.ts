import { Scene } from '../engine/scene';

let img_bunny: any = require("../data/images/bunny.png");

export class MenuScene extends Scene
{

private  mySPrite: PIXI.Sprite;

  
constructor()
    {
    super();
        
    PIXI.loader
    .add(img_bunny)
    .load(this.OnLoadFinished);
    } // constructor

 public Update()
    {
    super.Update();        
    this.mySPrite.rotation += 0.1;
    };


    private OnLoadFinished = () =>
    {
  //This code will run when the loader has finished loading the image
   this.mySPrite = new PIXI.Sprite(PIXI.loader.resources[img_bunny].texture);
       // center the sprites anchor point
        this.mySPrite.anchor.x = 0.5;
        this.mySPrite.anchor.y = 0.5;
        // move the sprite t the center of the screen
        this.mySPrite.position.x = 250;
        this.mySPrite.position.y = 250;     
  
        //Add the cat to the stage
    this.addChild(this.mySPrite);
    
   


    }
}