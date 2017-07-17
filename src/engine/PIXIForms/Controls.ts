
import {Size} from "./Utils";
import {Point} from "./Utils";

export class Control extends PIXI.Container
{
    public Size: Size;
    public MinimumSize: Size;
    public MaximumSize: Size;
    public Location: Point;
    public Name: string;
    public TabIndex: number;
    private _text: string;
    private _pixiText : PIXI.extras.BitmapText;
    public Controls:Control[];

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
