import * as PIXI from 'pixi.js';
import {Scene} from "./Scene";
import * as PimGUI from './PimGUI';
import 'stats.js';


export class GameManager 
{

    private static instance: GameManager;
    private stats = new Stats();
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

    

    public create(width: number, height: number)
    {
        if (this.renderer) 
            {
            return this;
            }

        this.renderer = PIXI.autoDetectRenderer(width, height);
        (this.renderer as any).backgroundColor = 0x000000;
        document.body.appendChild(this.renderer.view);

    


        requestAnimationFrame(this.Loop);

        this.stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
        this.stats.dom.style.position = 'absolute';
		this.stats.dom.style.top = '10px';
        this.stats.dom.style.left = '10px';
        document.body.appendChild( this.stats.dom );        
        return this;
    }
    private  Loop = () => {
        this.stats.begin();
        requestAnimationFrame(this.Loop);


        if (!this.currentScene || this.currentScene.isPaused()) return;


        this.currentScene.Update();
        this.renderer.render(this.currentScene);
        
    
        this.stats.end();
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
