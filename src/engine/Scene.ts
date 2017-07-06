import * as PIXI from "pixi.js";
import {SceneManager} from './SceneManager';

export abstract class Scene extends PIXI.Container
    {
    public  gameManager: SceneManager;
    private paused:boolean = false;
    
    constructor() 
    {
        super();
        this.gameManager = SceneManager.Get();

        PIXI.loader
        .add(this.GetNeededResources())
        .on("progress", this.OnLoadProgress)
        .load(this.OnLoadFinished);
    }

    
    public abstract OnLoadFinishedCB():void;

    public OnLoadFinished = () =>
    {
    console.log("Scene's OnLoadFinished (Empty)");
    this.OnLoadFinishedCB();
    }
    public OnLoadProgress = (loader, resource) =>
    {

    console.log("loading: " + resource.url); 

    console.log("progress: " + loader.progress + "%"); 

    //If you gave your files names as the first argument 
    //of the `add` method, you can access them like this
    //console.log("loading: " + resource.name);
    }


    
    public abstract GetNeededResources(): any;

    public Update()
    {
    
    }
    public Pause() 
        {
        this.paused = true;
        }
    public Resume() 
        {
        this.paused = false;
        }
    public isPaused() 
        {
        return this.paused;
        }
    }