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

    public PerformLayout()
    {
    let currentHeight:number = 0;        
    for( var element of this.DropDownItems)
        {
        element.Location.x = this.Location.x;
        element.Location.y = this.Location.y + currentHeight;
        currentHeight += element.Size.y;
        }
    }

    
    public AddDropdownItem(item:ToolStripMenuItem):void {
        item.Parent = this;
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
    

   constructor()
    {
        super();
        this.items = new Array();
        
    }

    public PerformLayout()
    {
    let currentWidth:number = 0;        
    for( var element of this.items)
        {
        element.Location.x = this.Location.x + currentWidth;
        element.Location.y = this.Location.y;
        currentWidth += element.Size.x;
        }
    }
    public AddItem(item:ToolStripMenuItem):void {
        item.Parent = this;
        this.Controls.push(item);
        this.items.push(item);
    }
    
}