import * as PIXIForms from "../engine/PIXIForms/PIXIForms";
import {FormClosingEventArgs} from "../engine/PIXIForms/Utils";

export default class Form1 extends PIXIForms.Form {

    private menuStrip1:PIXIForms.MenuStrip;
    private fileToolStripMenuItem : PIXIForms.ToolStripMenuItem ;
    private openToolStripMenuItem : PIXIForms.ToolStripMenuItem ;
    private closeToolStripMenuItem : PIXIForms.ToolStripMenuItem ;
    private editToolStripMenuItem : PIXIForms.ToolStripMenuItem ;
    private copyToolStripMenuItem : PIXIForms.ToolStripMenuItem ;
    private pasteToolStripMenuItem : PIXIForms.ToolStripMenuItem ;
    

    public constructor() {
        super();
        this.InitializeComponent();
    }

    private InitializeComponent(): void {
     this.Load.Add(this.Form1_Load);
     this.FormClosing.Add(this.Form1_FormClosing);

     this.menuStrip1 = new PIXIForms.MenuStrip();
     this.menuStrip1.Location = new PIXIForms.Point(0, 0);

    }

    public Form1_Load()
    {
        console.log("Form1_Load");
    }

    public Form1_FormClosing(o:object, args:FormClosingEventArgs)
    {
        console.log("Form1_FormClosing");
        //args.Cancel = true;
    }
}