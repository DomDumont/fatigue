
import {Size} from "./Utils";
import {Point} from "./Utils";

export class Control extends PIXI.Container {
    public size: Size;
    public MinimumSize: Size;
    public MaximumSize: Size;
    public Location: Point;
    public Name: string;
    public TabIndex: number;
    public Controls: Control[];
    public Parent: Control;

    private text: string;
    private pixiBB: PIXI.Graphics;

    set Size(value: Size) {
        this.size = value;
    }
    get Size(): Size {
        return this.size;
    }
    set Text(value: string){
    this.text = value;
    }

    get Text(): string{
        return this.text;
    }
    constructor() {
        super();
        this.Controls = new Array();
        this.Location = new Point(0, 0);
        this.Size = new Size(0, 0);

    }

    public SuspendLayout() {
        // todo
    }

    public PerformLayout() {
        this.Render();
    }

    public ResumeLayout(performLayout: boolean) {
        // todo
    }

    public Render() {

        this.pixiBB = new PIXI.Graphics();
        this.pixiBB.lineStyle(4, 0x99CCFF, 1);
        this.pixiBB.drawRect(this.Location.x, this.Location.y, this.Size.x, this.Size.y);
        this.addChild(this.pixiBB);

        for (const element of this.Controls)
        {
            element.Render();
            this.addChild(element);
        }
    }
}
