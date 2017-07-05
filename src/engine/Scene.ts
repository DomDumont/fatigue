import * as PIXI from "pixi.js";
import {GameManager} from './GameManager';

export class Scene extends PIXI.Container
    {
    public  gameManager: GameManager;
    private paused:boolean = false;
    private updateCB = function () 
        { };

    constructor() 
    {
        super();
        this.gameManager = GameManager.Get();
    }
    public onUpdate(updateCB: () => void ) {
        this.updateCB = updateCB;
    }

    public Update()
    {
        this.updateCB();
    }
    public pause() 
        {
        this.paused = true;
        }
    public resume() 
        {
        this.paused = false;
        }
    public isPaused() 
        {
        return this.paused;
        }
    }