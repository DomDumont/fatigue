"use strict";
// http://ezelia.com/2013/pixi-tutorial
Object.defineProperty(exports, "__esModule", { value: true });
var GameManager_1 = require("./engine/GameManager");
var MenuScene_1 = require("./game/MenuScene");
var gameManager = GameManager_1.GameManager.Get();
gameManager.create(800, 600);
gameManager.CreateScene("Menu", MenuScene_1.MenuScene);
gameManager.goToScene('Menu');
//# sourceMappingURL=main.js.map