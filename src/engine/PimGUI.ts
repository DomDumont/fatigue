import {GameManager} from './GameManager';
import * as Utils from './Utils';
import * as assert from 'assert';


export class Vec2
{
    public x:number;
    public y:number;

    constructor(_x:number,_y:number)
    {
        this.x = _x;
        this.y = _y;
    }
}

export class Window extends PIXI.Container
{
    private titleText:PIXI.extras.BitmapText;
    private storedData:any;
    private bDragging:boolean;

    private titleBar:PIXI.Graphics;
    private closeButton:PIXI.Graphics;
    private windowZone:PIXI.Graphics;
    private tbheight:number;
    
    constructor(title:string, size: Vec2)
    {
        super();


        this.titleText = new PIXI.extras.BitmapText(title, {font: "ProggyClean", align: "right"});
    
        this.titleText.position.x = 5;
        this.titleText.position.y = 5;
        
        this.addChild(this.titleText);

        this.tbheight = this.titleText.height+ 10;
        this.titleBar = new PIXI.Graphics();
        this.titleBar.lineStyle(4, 0x99CCFF, 1);
        this.titleBar.beginFill(0x000000);
        this.titleBar.drawRect(0, 0, size.x, this.tbheight);
        this.titleBar.endFill();
        this.titleBar.x = 0;
        this.titleBar.y = 0;
        this.titleBar.alpha = 0.5;
        
        this.titleBar.interactive = true;
        this.addChild(this.titleBar);

        this.closeButton = new PIXI.Graphics();
        this.closeButton.lineStyle(4, 0x99CCFF, 1);
        this.closeButton.beginFill(0xFF0000);
        this.closeButton.drawRect(size.x- this.tbheight , 0, this.tbheight, this.tbheight);
        this.closeButton.endFill();
        this.closeButton.x = 0;
        this.closeButton.y = 0;
        this.closeButton.alpha = 0.5;
        
        this.titleBar.addChild(this.closeButton);


        this.windowZone = new PIXI.Graphics();
        this.windowZone.lineStyle(4, 0x99CCFF, 1);
        this.windowZone.beginFill(0x000000);
        this.windowZone.drawRect(0, this.tbheight, size.x,size.y - this.tbheight );
        this.windowZone.endFill();
        this.windowZone.x = 0;
        this.windowZone.y = 0;
        this.windowZone.alpha = 0.5;

        this.addChild(this.windowZone);

        this.x = 100;


        
        
         
        this.titleBar.on('pointerdown', this.onDragStart);
        this.titleBar.on('pointerup', this.onDragEnd);
        this.titleBar.on('pointerupoutside', this.onDragEnd);
        this.titleBar.on('pointermove', this.onDragMove);
    }

    private  onDragStart = (event) => 
    {
        this.storedData = event.data;
        this.alpha = 0.5;
        this.bDragging = true;         
    }
    private  onDragEnd = () => 
    {
        this.alpha = 1;
        this.bDragging = false;
        // set the interaction data to null
        this.storedData = null;        
    }
    private  onDragMove = () => 
    {
    if (this.bDragging) 
        {
        var newPosition = this.storedData.getLocalPosition(this.parent);

        
        this.x = newPosition.x;
        this.y = newPosition.y;
        }        
    }
     
}

export class PimGUI extends PIXI.Container
{
    public CreateWindow(title:string, size: Vec2):Window
    {
        let tempWindow:Window = new Window(title,size);
        this.addChild(tempWindow);
        return tempWindow;
    }
} //Class PimGUI 