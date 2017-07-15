import * as PIXI from "pixi.js";

import {Size} from "./Utils";
import {Event} from "./Utils";
import {EventHandler} from "./Utils";
import {FormClosingEventHandler} from "./Utils";
import {FormClosingEventArgs} from "./Utils";

export class Form 
{

    public MinimumSize: Size;
    public MaximumSize: Size;
    public Load: Event<EventHandler>;
    public FormClosing: Event<FormClosingEventHandler>;

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
        let newArg = new FormClosingEventArgs();
        this.FormClosing.Raise(this,newArg);

        if (newArg.Cancel === true)
            {
            var e = e || window.event;

            //IE & Firefox
            if (e) {
                e.returnValue = 'Are you sure?';
            }

            // For Safari
            return 'Are you sure?';
            }
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

