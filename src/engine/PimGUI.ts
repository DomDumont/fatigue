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
    public IDStack = [];

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
}