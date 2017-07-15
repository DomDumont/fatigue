import * as PIXIForms from "../engine/PIXIForms/PIXIForms";

export default class Form1 extends PIXIForms.Form {

    public constructor() {
        super();
        this.InitializeComponent();
    }

    private InitializeComponent(): void {
     this.Load.Add(this.Form1_Load);
    }


 
    public Form1_Load()
    {
        console.log("Form1_Load");
    }
}