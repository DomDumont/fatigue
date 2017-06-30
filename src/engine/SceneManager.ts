import * as PIXI from "pixi.js";
import {Scene} from "./scene";

export class ScenesManager 
{
    private static scenes: any = {}; // should be hashmap but a JS object is fine too :)
    public static currentScene: Scene;
    public static renderer: PIXI.GraphicsRenderer;

    public static create(width: number, height: number) {
        if (ScenesManager.renderer) return this;

        ScenesManager.renderer = PIXI.autoDetectRenderer(width, height);
        document.body.appendChild(ScenesManager.renderer.view);
        requestAnimFrame(ScenesManager.loop);
        return this;
    }
    private static loop() {
        requestAnimFrame(function () { ScenesManager.loop() });

        if (!currentScene || currentScene.isPaused()) return;
        currentScene.update();
        ScenesManager.renderer.render(currentScene);
    }
}
