import * as PIXI from "pixi.js";

import {Control} from "./Controls";
import {MenuStrip} from "./Menus";

import {Event} from "./Utils";
import {IEventHandler} from "./Utils";
import {IFormClosingEventHandler} from "./Utils";
import {FormClosingEventArgs} from "./Utils";

export class Form extends Control {

    public Load: Event<IEventHandler>;
    public FormClosing: Event<IFormClosingEventHandler>;
    private mainMenuStrip: MenuStrip;

    constructor() {
        super();
        this.Load = new Event();
        this.FormClosing = new Event();

        PIXI.loader
        .add(this.GetNeededResources())
        .on("progress", this.OnLoadProgress)
        .load(this.OnLoadFinished);

        $(window).on("beforeunload", this.OnBeforeUnload);
    }

    set MainMenuStrip(value: MenuStrip){
        this.mainMenuStrip = value;
        this.addChild(this.mainMenuStrip);
    }

      public GetNeededResources(): any[] {
        return [
            // "../data/fonts/Proggy.xml"
        ];
    }

    public OnBeforeUnload = (e) => {
        // console.log("Scene's OnBeforeUnload (Empty)");
        const newArg = new FormClosingEventArgs();
        this.FormClosing.Raise(this, newArg);

        if (newArg.Cancel === true) {
            const e1 = e || window.event;

            // IE & Firefox
            if (e1) {
                e1.returnValue = "Are you sure?";
            }

            // For Safari
            return "Are you sure?";
            }
    }

    public OnLoadFinished = () => {
        // console.log("Scene's OnLoadFinished (Empty)");
        this.Load.Raise(this, null);
    }
    public OnLoadProgress = (loader, resource) => {

        // console.log("loading: " + resource.url);

        // console.log("progress: " + loader.progress + "%");

        // if you gave your files names as the first argument
        // of the `add` method, you can access them like this
        // console.log("loading: " + resource.name);
    }

    public Render() {

    // super.Render();

    for (const element of this.Controls)
        {
            element.Render(true);
            this.addChild(element);
        }

    }

}
