import * as PIXI from "pixi.js";
import {Scene} from "./Scene";
import * as FatGUI from './Gui';

export class GameManager 
{

    private static instance: GameManager;

    static GetInstance() 
        {
        if (!GameManager.instance) 
            {
            GameManager.instance = new GameManager();
            // ... any one time initialization goes here ...
            }
        return GameManager.instance;
        }


    private  scenes: any = {}; // should be hashmap but a JS object is fine too :)
    public  currentScene: Scene;
    public  renderer: PIXI.WebGLRenderer|PIXI.CanvasRenderer;

    public gui:FatGUI.FatGUI;

    public create(width: number, height: number)
    {
        if (this.renderer) return this;

        this.renderer = PIXI.autoDetectRenderer(width, height);
        (this.renderer as any).backgroundColor = 0x1099bb;
        document.body.appendChild(this.renderer.view);

        this.gui = new FatGUI.FatGUI();
        requestAnimationFrame(this.Loop);

        return this;
    }
    private  Loop = () => {
        requestAnimationFrame(this.Loop);


        if (!this.currentScene || this.currentScene.isPaused()) return;

        this.gui.NewFrame();
        this.currentScene.Update();
        this.renderer.render(this.currentScene);
        this.renderer.render(this.gui);
        this.gui.Render();
    }

    public CreateScene<A extends Scene>(id: string, construct: new () => A): A {
        if (this.scenes[id]) return undefined;

        var scene = new construct();
        scene.gameManager = this;
        this.scenes[id] = scene;

        return scene;
    }
 
    public goToScene(id: string): boolean
    {

        if (this.scenes[id]) {
            if (this.currentScene) this.currentScene.pause();
            this.currentScene = this.scenes[id];
            this.currentScene.resume();
            return true;
        }
        return false;
    }
}
