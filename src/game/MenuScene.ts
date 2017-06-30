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
    
    var basicText = new PIXI.Text('Basic text in pixi');
    basicText.x = 30;
    basicText.y = 90;

    var graphics = new PIXI.Graphics();
        // set a fill and a line style again and draw a rectangle
    graphics.lineStyle(2, 0x0000FF, 1);
    graphics.beginFill(0xFF700B, 1);
    graphics.drawRect(50, 250, 120, 120);

    // draw a rounded rectangle
    graphics.lineStyle(2, 0xFF00FF, 1);
    graphics.beginFill(0xFF00BB, 0.25);
    graphics.drawRoundedRect(150, 450, 300, 100, 15);
        graphics.endFill();
    
        this.addChild(graphics);
    this.addChild(basicText);

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