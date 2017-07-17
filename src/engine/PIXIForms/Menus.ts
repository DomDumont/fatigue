import {Control} from "./Controls"


export class ToolStripMenuItem extends Control
{
    public DropDownItems: ToolStripMenuItem[];
    private _pixiText : PIXI.extras.BitmapText;

    constructor()
    {
        super();
        this.DropDownItems = new Array();
    }

    public AddDropdownItem(item:ToolStripMenuItem):void {
        item.Parent = this;
        item.Location.x = this.Location.x;
        item.Location.y = this.DropDownItems.length * 50;
        this.Controls.push(item);
        this.DropDownItems.push(item);
    }

    public Render(){
        this._pixiText = new PIXI.extras.BitmapText(this.Text, { font: "ProggyClean", align: "right" });
        this._pixiText.position.x = this.Location.x;
        this._pixiText.position.y = this.Location.y;
        this.addChild(this._pixiText);
    }
}

export class MenuStrip extends Control
{
    public items: ToolStripMenuItem[];
}