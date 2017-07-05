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
    constructor(title:string, size: Vec2)
    {
        super();

        var roundBox = new PIXI.Graphics();
        roundBox.lineStyle(4, 0x99CCFF, 1);
        roundBox.beginFill(0x000000);
        roundBox.drawRoundedRect(0, 0, size.x, size.y, 10)
        roundBox.endFill();
        roundBox.x = 0;
        roundBox.y = 0;
        roundBox.alpha = 0.5;
        
        this.addChild(roundBox);

        this.titleText = new PIXI.extras.BitmapText(title, {font: "ProggyClean", align: "right"});
    
        this.titleText.position.x = 10;
        this.titleText.position.y = 10;
        
        this.addChild(this.titleText);
        this.x = 100;


        this.interactive = true;
        
         
        this.on('pointerdown', this.onDragStart);
        this.on('pointerup', this.onDragEnd);
        this.on('pointerupoutside', this.onDragEnd);
        this.on('pointermove', this.onDragMove);
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

        
        this.x = newPosition.x - this.width/2;
        this.y = newPosition.y- this.height/2;
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