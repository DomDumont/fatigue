import * as PIXIForms from "../engine/PIXIForms/PIXIForms";
import {FormClosingEventArgs} from "../engine/PIXIForms/Utils";

export default class Form1 extends PIXIForms.Form {

    public constructor() {
        super();
        this.InitializeComponent();
    }

    private InitializeComponent(): void {
     this.Load.Add(this.Form1_Load);
     this.FormClosing.Add(this.Form1_FormClosing);

    }

    public Form1_Load()
    {
        console.log("Form1_Load");
    }

    public Form1_FormClosing(o:object, args:FormClosingEventArgs)
    {
        console.log("Form1_FormClosing");
        args.Cancel = true;
    }
}