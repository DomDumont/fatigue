
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
    private _pixiBB: PIXI.Graphics;
    public Controls:Control[];
    public Parent: Control;



    set Size(value:Size) {
        this._size = value;
     
    }
    get Size():Size {
        return this._size;
    }
    set Text(value:string){
    this._text = value;
    }

    get Text():string{
        return this._text;
    }
    constructor()
    {
        super();
        this.Controls = new Array();
        this.Location = new Point(0,0);
        this.Size = new Size(0,0);

    }

    public SuspendLayout()
    {

    }

    public PerformLayout()
    {
        this._pixiBB = new PIXI.Graphics();
        this._pixiBB.lineStyle(4, 0x99CCFF, 1);
        this._pixiBB.drawRect(this.Location.x, this.Location.y, this.Size.x, this.Size.y);        
        //this.addChild(this._pixiBB);

        
        this.Controls.forEach(element => {
            element.Render();
            this.addChild(element);
        });
    }

    public ResumeLayout(performLayout:boolean)
    {

    }

    public Render(){
        
    }
}
