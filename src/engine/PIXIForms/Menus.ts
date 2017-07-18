import {Control} from "./Controls";

export class ToolStripMenuItem extends Control {
    public DropDownItems: ToolStripMenuItem[];
    public opened: boolean;

    private pixiText: PIXI.extras.BitmapText;

    constructor() {
        super();
        this.DropDownItems = new Array();
        this.opened = false;
    }

    public PerformLayout() {
    let currentHeight: number = this.Size.y;
    for ( const element of this.DropDownItems)
        {
        element.Location.x = this.Location.x;
        element.Location.y = this.Location.y + currentHeight;
        currentHeight += element.Size.y;
        }
    }

    public AddDropdownItem(item: ToolStripMenuItem): void {
        item.Parent = this;
        this.Controls.push(item);
        this.DropDownItems.push(item);
    }

    public Render() {
        super.Render();
        this.pixiText = new PIXI.extras.BitmapText(this.Text, { font: "ProggyClean", align: "right" });
        this.pixiText.position.x = this.Location.x;
        this.pixiText.position.y = this.Location.y;
        this.addChild(this.pixiText);

        this.interactive = true;
        this.buttonMode = true;
    }
}

export class MenuStrip extends Control {
    public items: ToolStripMenuItem[];

   constructor() {
        super();
        this.items = new Array();

    }

    public PerformLayout() {
    let currentWidth: number = this.Location.x;
    for ( const element of this.items)
        {
        element.Location.x = this.Location.x + currentWidth;
        element.Location.y = this.Location.y;
        currentWidth += element.Size.x;
        element.PerformLayout();
        }
    }

    public AddItem(item: ToolStripMenuItem): void {
        item.Parent = this;
        this.Controls.push(item);
        this.items.push(item);
    }

}
