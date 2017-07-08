"use strict";
// http://ezelia.com/2013/pixi-tutorial
Object.defineProperty(exports, "__esModule", { value: true });
var SceneManager_1 = require("./engine/SceneManager");
var MenuScene_1 = require("./game/MenuScene");
var sceneManager = SceneManager_1.SceneManager.Get();
sceneManager.Create(1000, 1000, 0x3399FF);
sceneManager.CreateScene("Menu", MenuScene_1.MenuScene);
sceneManager.GoToScene('Menu');
//# sourceMappingURL=main.js.map