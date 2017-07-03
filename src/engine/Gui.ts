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
export class FatGUI extends PIXI.Container
{
    private initialized:boolean;
    constructor()
    {
        super();
        this.initialized = false;
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
    graphics.drawRect(50, 250, pos.x, pos.y);
    this.addChild(graphics);
    return true;
    }
}