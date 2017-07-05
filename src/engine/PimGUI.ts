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

export class Window 
{
    public name:String;
    public ID:Number;
    public IDStack = [];
    public Size:Vec2;
    public SizeFull:Vec2;
    public LastFrameActive:Number;
    public Flags:Number;


    constructor(name:String)
    {
    this.name = name;    
    this.IDStack.push(Utils.HashCode(name));
    }
}

export class IO
{
    public DisplaySize:Vec2;

    constructor()
    {
        this.DisplaySize = new Vec2(-1, -1);
    }
}

class Context
{
    public initialized:boolean;
    public IO: IO;
    public Windows:Window[];
    public FrameCount: Number;

    constructor()
    {
        this.IO = new IO();
    }
}


let g:Context = new Context();

export class PimGUI extends PIXI.Container
{
    
    constructor()
    {
        super();
        g.initialized = false;
    }


    public GetIO():IO
    {
        return g.IO;
    }

    public NewFrame():void
    {
    assert.ok(g.IO.DisplaySize.x >= 0.0 && g.IO.DisplaySize.y >= 0.0);
    }

    public Render():void
    {    
    }

    public Button(text:string,pos:Vec2):boolean
    {
    var graphics = new PIXI.Graphics();
        // set a fill and a line style again and draw a rectangle
    graphics.lineStyle(2, 0x0000FF, 1);
    graphics.beginFill(0xFF700B, 1);
    graphics.drawRect(pos.x, pos.y,200,100);
    this.addChild(graphics);
    return true;
    }

    public CreateNewWindow(name: String,size:Vec2, flags: Number):Window
    {
        let tempWindow:Window = new Window(name);
        tempWindow.Size = size;
        tempWindow.SizeFull = size;

        g.Windows.push(tempWindow);

        return tempWindow;
    }


    public FindWindowByName(name:String): Window
        {
            let tempID:Number = Utils.HashCode(name);
            g.Windows.forEach(element => {
                if (element.ID == tempID)
                    {
                    return element;
                    }
            });
            return null;
        }

    public Begin(name: String, p_open : Boolean,size_on_first_use : Vec2, bg_alpha : Number,flags:Number):Boolean    
    {
    // Find or create
    let window_is_new:Boolean = false;
    let window:Window = this.FindWindowByName(name);
    if (!window)
        {
        window = this.CreateNewWindow(name, size_on_first_use, flags);
        window_is_new = true;
        }
    let current_frame:Number = g.FrameCount;

    const first_begin_of_the_frame:Boolean = (window.LastFrameActive != current_frame);
    if (first_begin_of_the_frame)
        window.Flags = flags;
    else
        flags = window.Flags;

        return true;
    }
} //Class PimGUI 