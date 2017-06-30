"use strict";
// http://ezelia.com/2013/pixi-tutorial
Object.defineProperty(exports, "__esModule", { value: true });
var SceneManager_1 = require("./engine/SceneManager");
var MenuScene_1 = require("./game/MenuScene");
var scenesManager = new SceneManager_1.ScenesManager();
scenesManager.create(500, 500);
scenesManager.CreateScene("Menu", MenuScene_1.MenuScene);
scenesManager.goToScene('Menu');
//# sourceMappingURL=main.js.map