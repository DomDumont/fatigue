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
        tempForm.menu = mainMenu;

        let menuItem1 = new PimGUI.MenuItem();
        let menuItem2 = new PimGUI.MenuItem();

        menuItem1.text.text = "File";
        menuItem2.text.text = "Edit";

        // Add two MenuItem objects to the MainMenu.
        mainMenu.MenuItems.push(menuItem1);
        mainMenu.MenuItems.push(menuItem2);


        this.tileSet = new TileSet(PIXI.loader.resources[img_zelda1].texture.baseTexture,32,32);
        this.tileMap = new TileMap();        
        this.tileMap.tileSet = this.tileSet;
        this.tileMap.scaleX = 1;
        this.tileMap.scaleY = 1;
        this.tileMap.SetData(0,0,10);
        this.tileMap.SetData(0,1,10);
        this.tileMap.SetData(0,2,11);
        this.tileMap.SetData(1,0,20);
        this.tileMap.SetData(1,1,21);
        this.tileMap.SetData(1,2,22);

        this.tileMap.position.x =450;
        this.tileMap.position.y = 450;     
        
        this.addChild(this.tileMap);

    }

 
}