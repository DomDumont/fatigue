import { Scene } from '../engine/Scene';
import * as PimGUI from '../engine/PimGUI';
import {TileMap} from '../engine/TileMap';
import {TileSet} from '../engine/TileSet';

let img_bunny: any = require("../public/data/images/bunny.png");
let img_zelda1: any = require("../public/data/images/zelda1.png");


export class MenuScene extends Scene
{

private  mySPrite: PIXI.Sprite;
private bitmapFontText:PIXI.extras.BitmapText;

private tileSet:TileSet;
private tileMap:TileMap;
  
constructor()
    {
    super();
        
    
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



public GetNeededResources()
{
    return [img_bunny,
            img_zelda1,
            "../data/fonts/Proggy.xml"
            ]
}
 public Update()
    {
    super.Update();    
    if (this.mySPrite)    
        {
        this.mySPrite.rotation += 0.1;
        this.bitmapFontText.text = 'rotation = '+ this.mySPrite.rotation;
        }
    };


    public OnLoadFinishedCB():void
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
        
    
        this.bitmapFontText = new PIXI.extras.BitmapText("Test of India", {font: "ProggyClean", align: "right"});
    
        this.bitmapFontText.position.x = 200;
        this.bitmapFontText.position.y = 200;
        
        this.addChild(this.bitmapFontText);

        let tempForm =  this.gameManager.gui.CreateForm("Test",new PimGUI.Vec2(300,300));
        let mainMenu = new PimGUI.Menu();

        let menuItem1 = new PimGUI.MenuItem();
        let menuItem2 = new PimGUI.MenuItem();

        menuItem1.Text = "File";
        menuItem2.Text = "Edit";

        // Add two MenuItem objects to the MainMenu.
        mainMenu.AddItem(menuItem1);
        mainMenu.AddItem(menuItem2);

        tempForm.Menu = mainMenu;


        this.tileSet = new TileSet(PIXI.loader.resources[img_zelda1].texture.baseTexture,32,32);
        this.tileMap = new TileMap();        
        this.tileMap.tileSet = this.tileSet;
        this.tileMap.scaleX = 1;
        this.tileMap.scaleY = 1;
        for (var i=0;i<20;i++)
            {
            for (var j=0;j<20;j++)
                {
                this.tileMap.SetData(i,j,Math.floor(Math.random() * 4) + 0  );            
                }
            }

        this.tileMap.position.x =50;
        this.tileMap.position.y = 50;     
        
        this.addChild(this.tileMap);

    }

 
}