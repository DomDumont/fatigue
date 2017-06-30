import * as PIXI from "pixi.js";
import {Scene} from "./scene";

export class ScenesManager 
{
    private  scenes: any = {}; // should be hashmap but a JS object is fine too :)
    public  currentScene: Scene;
    public  renderer: PIXI.WebGLRenderer|PIXI.CanvasRenderer;

    public  create(width: number, height: number) {
        if (this.renderer) return this;

        this.renderer = PIXI.autoDetectRenderer(width, height);
        document.body.appendChild(this.renderer.view);
        requestAnimationFrame(this.loop);
        return this;
    }
    private  loop() {
        requestAnimationFrame(function () { this.loop() });

        if (!this.currentScene || this.currentScene.isPaused()) return;
        this.currentScene.update();
        this.renderer.render(this.currentScene);
    }
}
