import {GameManager} from './GameManager';

export class ImVec2
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

}

class Context
{
    public initialized:boolean;
}


let g:Context = new Context();

export class PimGUI extends PIXI.Container
{
    
    constructor()
    {
        super();
        g.initialized = false;
    }


    public NewFrame():void
    {

    }

    public Render():void
    {    
    }

    public Button(text:string,pos:ImVec2):boolean
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