
import {Size} from "./Utils";
import {Point} from "./Utils";

export class Control extends PIXI.Container
{
    public _size: Size;
    public MinimumSize: Size;
    public MaximumSize: Size;
    public Location: Point;
    public Name: string;
    public TabIndex: number;
    private _text: string;
    private _pixiText : PIXI.extras.BitmapText;
    private _pixiBB: PIXI.Graphics;
    public Controls:Control[];

    set Size(value:Size) {
        this._size = value;
        this._pixiBB = new PIXI.Graphics();
        this._pixiBB.drawRect(0, 0, this.Size.x, this.Size.y);        
        this.addChild(this._pixiBB);
    }
    get Size():Size {
        return this._size;
    }
    set Text(value:string){
    this._text = value;
    this._pixiText = new PIXI.extras.BitmapText(this.Text, { font: "ProggyClean", align: "right" });
    this.addChild(this._pixiText);
    }

    get Text():string{
        return this._text;
    }
    constructor()
    {
        super();
        this.Controls = new Array();


  
    }

    public SuspendLayout()
    {

    }

    public PerformLayout()
    {

    }

    public ResumeLayout(performLayout:boolean)
    {

    }
}
