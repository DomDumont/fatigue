import * as PIXI from 'pixi.js';
import {Scene} from "./Scene";
import * as PimGUI from './PimGUI';
import 'stats.js';


export class SceneManager 
{

    private static instance: SceneManager;
    private stats = new Stats();
    public gui:PimGUI.PimGUI;

    static Get() 
        {
        if (!SceneManager.instance) 
            {
            SceneManager.instance = new SceneManager();
            // ... any one time initialization goes here ...
            }
        return SceneManager.instance;
        }

    private constructor()
    {
        this.gui = new PimGUI.PimGUI();
    }

    private  scenes: any = {}; // should be hashmap but a JS object is fine too :)
    public  currentScene: Scene;
    public  renderer: PIXI.WebGLRenderer|PIXI.CanvasRenderer;

    

    public Create(width: number, height: number, color:number)
    {
        if (this.renderer) 
            {
            return this;
            }

        this.renderer = PIXI.autoDetectRenderer(width, height);
        (this.renderer as any).backgroundColor = color;
        //document.body.appendChild(this.renderer.view);
        this.DisableContextMenu(this.renderer.view);
        document.getElementById('gameContainer').appendChild(this.renderer.view);
    


        requestAnimationFrame(this.Loop);

        this.stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
        this.stats.dom.style.position = 'absolute';
		this.stats.dom.style.top = '10px';
        this.stats.dom.style.left = '10px';
        //document.body.appendChild( this.stats.dom );     
        document.getElementById('fpsCounter').appendChild( this.stats.dom );      
        return this;
    }

    public DisableContextMenu(canvas) 
        {
        canvas.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        });
}
    private  Loop = () => {
        this.stats.begin();
        requestAnimationFrame(this.Loop);


        if (!this.currentScene || this.currentScene.isPaused()) return;


        this.currentScene.Update();
        this.renderer.render(this.gui);
        
    
        this.stats.end();
    }

    public CreateScene<A extends Scene>(id: string, construct: new () => A): A {
        if (this.scenes[id]) return undefined;

        var scene = new construct();
        scene.gameManager = this;
        this.scenes[id] = scene;

        return scene;
    }
 
    public GoToScene(id: string): boolean
    {

        if (this.scenes[id]) 
        {
            if (this.currentScene) 
                {
                //Pause old scene and remove it from the GUI
                this.gui.removeChild(this.currentScene);
                this.currentScene.Pause();
            }
            //Set currentScene, add it to the GUI node, and resume it
            this.currentScene = this.scenes[id];
            this.gui.addChild(this.currentScene);
            this.currentScene.Resume();
            return true;
        }
        return false;
    }
}
