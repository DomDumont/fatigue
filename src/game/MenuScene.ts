import { Scene } from '../engine/Scene';
import * as FatGUI from '../engine/PimGUI';

let img_bunny: any = require("../data/images/bunny.png");


export class MenuScene extends Scene
{

private  mySPrite: PIXI.Sprite;

  
constructor()
    {
    super();
        
    PIXI.loader
    .add(img_bunny)
    .add("../data/fonts/Proggy.xml")
    .on("progress", this.loadProgressHandler)
    .load(this.OnLoadFinished);
    
    var basicText = new PIXI.Text('Yes !!!');
    basicText.x = 30;
    basicText.y = 90;

    this.addChild(basicText);
    /*
    var graphics = new PIXI.Graphics();
        // set a fill and a line style again and draw a rectangle
    graphics.lineStyle(2, 0x0000FF, 1);
    graphics.beginFill(0xFF700B, 1);
    graphics.drawRect(50, 250, 120, 120);

    // draw a rounded rectangle
    graphics.lineStyle(2, 0xFF00FF, 1);
    graphics.beginFill(0xFF00BB, 0.25);
    graphics.drawRoundedRect(200, 250, 200, 50, 15);
        graphics.endFill();
    
        this.addChild(graphics);
    */
    

    } // constructor

 public Update()
    {
    super.Update();    
    if (this.mySPrite)    
        this.mySPrite.rotation += 0.1;
    
    if (this.gameManager.gui.Button("coucou", new FatGUI.Vec2(20,20)))
        {

        }
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
        this.mySPrite.position.y = 390;     
  
        //Add the cat to the stage
    this.addChild(this.mySPrite);
    
   
     var bitmapFontText = new PIXI.extras.BitmapText("bitmap fonts are\n now supported!", {font: "ProggyClean", align: "right"});
 
     bitmapFontText.position.x = 200;
     bitmapFontText.position.y = 200;
    
     this.addChild(bitmapFontText);


    }

    public loadProgressHandler(loader, resource) 
        {

        //Display the file `url` currently being loaded
        console.log("loading: " + resource.url); 

        //Display the precentage of files currently loaded
        console.log("progress: " + loader.progress + "%"); 

        //If you gave your files names as the first argument 
        //of the `add` method, you can access them like this
        //console.log("loading: " + resource.name);
        }

}