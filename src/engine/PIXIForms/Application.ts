import {Form} from "./Form";
export default class Application {

    public static renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;

    public static CurrentForm: Form;

    public static Initialize(width: number, height: number, rototo: number) {
    Application.renderer = PIXI.autoDetectRenderer(width, height);
    (Application.renderer as any).backgroundColor = rototo;
    // Application.DisableContextMenu(Application.renderer.view);
    document.getElementById("PIXIForms").appendChild(Application.renderer.view);

    Application.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    Application.stats.dom.style.position = "absolute";
    Application.stats.dom.style.top = "10px";
    Application.stats.dom.style.left = "700px";
    document.body.appendChild( this.stats.dom );
    document.getElementById("PIXIFormsFPS").appendChild(Application.stats.dom);

    PIXI.loader.add("../data/fonts/Proggy.xml").load(Application.OnLoadFinished);
    }
    public static Run(mainForm: Form): void {
        Application.CurrentForm = mainForm;
        requestAnimationFrame(Application.Loop);
    }

    public static Ready(callback: any) {
        Application.ready = callback;
    }
    public static OnLoadFinished() {
        // console.log('Application.OnLoadFinished');
        Application.ready();
    }

     public static DisableContextMenu(canvas: any): void {
        canvas.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });
    }

    private static ready: any;
    private static stats = new Stats();

    private static Loop = () => {
        Application.stats.begin();
        requestAnimationFrame(Application.Loop);

        /*
        if (!this.currentScene || this.currentScene.isPaused()) {
            return;
        }

        this.currentScene.Update();
        this.renderer.render(this.gui);
        */
        Application.renderer.render(Application.CurrentForm);
        Application.stats.end();
    }

}

Application.Initialize(800, 600, 0xaabbcc);
