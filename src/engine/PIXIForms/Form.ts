import * as PIXI from "pixi.js";

import {Size} from "./Utils";
import {Event} from "./Utils";

export class Form 
{

    public MinimumSize: Size;
    public MaximumSize: Size;
    public Load: Event;
    public FormClosing: Event;

    constructor() {
        this.Load = new Event();
        this.FormClosing = new Event();

        PIXI.loader
        .add(this.GetNeededResources())
        .on("progress", this.OnLoadProgress)
        .load(this.OnLoadFinished);

        $(window).on("beforeunload",this.OnBeforeUnload);
        
    }

      public GetNeededResources():any[] {
        return [
            "../data/fonts/Proggy.xml"
        ];
    }

    public OnBeforeUnload = (e) => {
        console.log("Scene's OnBeforeUnload (Empty)");
        this.FormClosing.Raise(this,null);
        var e = e || window.event;

        //IE & Firefox
        if (e) {
            e.returnValue = 'Are you sure?';
        }

        // For Safari
        return 'Are you sure?';
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

