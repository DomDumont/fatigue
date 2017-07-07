import {SceneManager} from './SceneManager';
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

export class MenuItem  extends PIXI.Container
{
    public text:PIXI.extras.BitmapText;

    constructor()
    {
        super();
        this.text = new PIXI.extras.BitmapText('', {font: "ProggyClean", align: "right"});
    }
    get Text():string
    {
        if (this.text)
        {
            return this.text.text;
        }
    }

    set Text(value:string)
    {
        if (this.text)
        {
            this.text.text = value;
        }
    }
    
}

export class Menu extends PIXI.Container
{
    private menuItems:MenuItem[];

    constructor()
    {
        super();
        this.menuItems = [];
    }

    public AddItem(item:MenuItem)
    {
        this.menuItems.push(item);
        this.addChild(item);
    }
}

export class Form extends PIXI.Container
{
    private titleText:PIXI.extras.BitmapText;
    private storedData:any;
    private bDragging:boolean;

    private titleBar:PIXI.Graphics;
    private closeButton:PIXI.Graphics;
    private windowZone:PIXI.Graphics;
    private tbheight:number;
    private menu:Menu;

    public set Menu(value:Menu)
    {
        if (this.menu)
        {
            // remove old menu
            this.removeChild(this.menu);
        }
        this.menu = value;
        this.addChild(this.menu);
    }

    public get Menu()
    {
        return this.menu;
    }
    
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
    public CreateForm(title:string, size: Vec2):Form
    {
        let tempWindow:Form = new Form(title,size);
        this.addChild(tempWindow);
        return tempWindow;
    }
} //Class PimGUI 