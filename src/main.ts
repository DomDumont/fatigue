// http://ezelia.com/2013/pixi-tutorial

import { SceneManager } from "./engine/SceneManager";
import { UIManager } from "./engine/UIManager";
import { MenuScene } from "./game/MenuScene";

import Application from "./engine/PIXIForms/Application";
import Form1 from "./game/Form1";

//$(document).ready(() => {
//    Application.Run(new Form1());
//});

Application.Ready(() => {
    Application.Run(new Form1());
});



