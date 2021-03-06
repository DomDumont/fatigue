import * as PIXI from "pixi.js";
import "stats.js";
import * as PimGUI from "./PimGUI";
import { Scene } from "./Scene";

export class SceneManager {

    public static Get(): SceneManager {
        if (!SceneManager.instance) {
            SceneManager.instance = new SceneManager();
            // ... any one time initialization goes here ...
        }
        return SceneManager.instance;
    }

    private static instance: SceneManager;

    public gui: PimGUI.PimGUI;

    public currentScene: Scene;
    public renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;

    private stats = new Stats();
    private scenes: any = {}; // should be hashmap but a JS object is fine too :)

    private constructor() {
        this.gui = new PimGUI.PimGUI();
    }

    public Create(width: number, height: number, color: number): SceneManager {
        if (this.renderer) {
            return this;
        }

        this.renderer = PIXI.autoDetectRenderer(width, height);
        (this.renderer as any).backgroundColor = color;
        // document.body.appendChild(this.renderer.view);
        this.DisableContextMenu(this.renderer.view);
        document.getElementById("gameContainer").appendChild(this.renderer.view);

        requestAnimationFrame(this.Loop);

        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        this.stats.dom.style.position = "absolute";
        this.stats.dom.style.top = "10px";
        this.stats.dom.style.left = "10px";
        // document.body.appendChild( this.stats.dom );
        document.getElementById("fpsCounter").appendChild(this.stats.dom);
        return this;
    }

    public DisableContextMenu(canvas: any): void {
        canvas.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });
    }

    public CreateScene<A extends Scene>(id: string, construct: new () => A): A {
        if (this.scenes[id]) {
            return undefined;
        }

        const scene: A = new construct();
        scene.gameManager = this;
        this.scenes[id] = scene;

        return scene;
    }

    public GoToScene(id: string): boolean {

        if (this.scenes[id]) {
            if (this.currentScene) {
                // pause old scene and remove it from the GUI
                this.gui.removeChild(this.currentScene);
                this.currentScene.Pause();
            }
            // set currentScene, add it to the GUI node, and resume it
            this.currentScene = this.scenes[id];
            this.gui.addChild(this.currentScene);
            this.currentScene.Resume();
            return true;
        }
        return false;
    }

    private Loop = () => {
        this.stats.begin();
        requestAnimationFrame(this.Loop);

        if (!this.currentScene || this.currentScene.isPaused()) {
            return;
        }

        this.currentScene.Update();
        this.renderer.render(this.gui);

        this.stats.end();
    }

}
