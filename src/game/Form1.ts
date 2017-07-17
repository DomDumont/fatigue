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

    console.log("InitializeComponent");
    this.menuStrip1 = new PIXIForms.MenuStrip();
    this.fileToolStripMenuItem = new PIXIForms.ToolStripMenuItem();
    this.openToolStripMenuItem = new PIXIForms.ToolStripMenuItem();
    this.closeToolStripMenuItem = new PIXIForms.ToolStripMenuItem();
    this.editToolStripMenuItem = new PIXIForms.ToolStripMenuItem();
    this.copyToolStripMenuItem = new PIXIForms.ToolStripMenuItem();
    this.pasteToolStripMenuItem = new PIXIForms.ToolStripMenuItem();
    this.menuStrip1.SuspendLayout();
    this.SuspendLayout();
    
    this.menuStrip1.Location = new PIXIForms.Point(0, 0);
    this.menuStrip1.Name = "menuStrip1";
    this.menuStrip1.Size = new PIXIForms.Size(284, 24);
    this.menuStrip1.TabIndex = 0;
    this.menuStrip1.Text = "menuStrip1";

    // 
    // fileToolStripMenuItem
    // 
    this.fileToolStripMenuItem.DropDownItems.push(this.openToolStripMenuItem);    
    this.fileToolStripMenuItem.DropDownItems.push(this.closeToolStripMenuItem);
    this.fileToolStripMenuItem.Name = "fileToolStripMenuItem";
    this.fileToolStripMenuItem.Size = new PIXIForms.Size(37, 20);
    this.fileToolStripMenuItem.Text = "File";
    // 
    // openToolStripMenuItem
    // 
    this.openToolStripMenuItem.Name = "openToolStripMenuItem";
    this.openToolStripMenuItem.Size = new PIXIForms.Size(152, 22);
    this.openToolStripMenuItem.Text = "Open";
    // 
    // closeToolStripMenuItem
    // 
    this.closeToolStripMenuItem.Name = "closeToolStripMenuItem";
    this.closeToolStripMenuItem.Size = new PIXIForms.Size(152, 22);
    this.closeToolStripMenuItem.Text = "Close";
    // 
    // editToolStripMenuItem
    // 
    this.editToolStripMenuItem.DropDownItems.push(this.copyToolStripMenuItem);
    this.editToolStripMenuItem.DropDownItems.push(this.pasteToolStripMenuItem);
    this.editToolStripMenuItem.Name = "editToolStripMenuItem";
    this.editToolStripMenuItem.Size = new PIXIForms.Size(39, 20);
    this.editToolStripMenuItem.Text = "Edit";
    // 
    // copyToolStripMenuItem
    // 
    this.copyToolStripMenuItem.Name = "copyToolStripMenuItem";
    this.copyToolStripMenuItem.Size = new PIXIForms.Size(152, 22);
    this.copyToolStripMenuItem.Text = "Copy";
    // 
    // pasteToolStripMenuItem
    // 
    this.pasteToolStripMenuItem.Name = "pasteToolStripMenuItem";
    this.pasteToolStripMenuItem.Size = new PIXIForms.Size(152, 22);
    this.pasteToolStripMenuItem.Text = "Paste";
    // 
    // Form1
    // 
    //this.AutoScaleDimensions = new PIXIForms.SizeF(6F, 13F);
    //this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
    //this.ClientSize = new PIXIForms.Size(284, 262);
    this.Controls.push(this.menuStrip1);
    this.MainMenuStrip = this.menuStrip1;
    this.Name = "Form1";
    this.Text = "Form1";
    this.Load.Add(this.Form1_Load);
    this.FormClosing.Add(this.Form1_FormClosing);
    this.menuStrip1.ResumeLayout(false);
    this.menuStrip1.PerformLayout();
    this.ResumeLayout(false);
    this.PerformLayout();

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