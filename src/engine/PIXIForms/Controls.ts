
import {Size} from "./Utils";
import {Point} from "./Utils";

export class Control
{
    public Size: Size;
    public MinimumSize: Size;
    public MaximumSize: Size;
    public Location: Point;
    public Name: string;
    public TabIndex: number;
    public Text: string;
    public Controls:Control[];

    constructor()
    {
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
