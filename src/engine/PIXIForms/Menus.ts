import {Control} from "./Controls"


export class ToolStripMenuItem extends Control
{
    public DropDownItems: ToolStripMenuItem[];

    constructor()
    {
        super();
        this.DropDownItems = new Array();
    }
}

export class MenuStrip extends Control
{
    public items: ToolStripMenuItem[];
}