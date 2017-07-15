import * as PIXI from "pixi.js";

import {Size} from "./Utils";
import {Event} from "./Utils";

export class Form 
{

    public MinimumSize: Size;
    public MaximumSize: Size;
    public Load: Event;

    constructor() {
        this.Load = new Event();

        PIXI.loader
        .add(this.GetNeededResources())
        .on("progress", this.OnLoadProgress)
        .load(this.OnLoadFinished);

        
    }

      public GetNeededResources():any[] {
        return [
            "../data/fonts/Proggy.xml"
        ];
    }

    public OnLoadFinished = () => {
        console.log("Scene's OnLoadFinished (Empty)");
        this.Load.Raise(this,null);
    }
    public OnLoadProgress = (loader, resource) => {

        console.log("loading: " + resource.url);

        console.log("progress: " + loader.progress + "%");

        // if you gave your files names as the first argument
        // of the `add` method, you can access them like this
        // console.log("loading: " + resource.name);
    }
    
}

