"use strict";
// http://ezelia.com/2013/pixi-tutorial
Object.defineProperty(exports, "__esModule", { value: true });
var SceneManager_1 = require("./engine/SceneManager");
var UIManager_1 = require("./engine/UIManager");
var MenuScene_1 = require("./game/MenuScene");
UIManager_1.UIManager.Get().Create();
SceneManager_1.SceneManager.Get().Create(800, 600, 0x3399FF);
SceneManager_1.SceneManager.Get().CreateScene("Menu", MenuScene_1.MenuScene);
SceneManager_1.SceneManager.Get().GoToScene('Menu');
//# sourceMappingURL=main.js.map