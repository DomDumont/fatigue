/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// http://ezelia.com/2013/pixi-tutorial
Object.defineProperty(exports, "__esModule", { value: true });
var SceneManager_1 = __webpack_require__(2);
var MenuScene_1 = __webpack_require__(3);
var scenesManager = new SceneManager_1.ScenesManager();
scenesManager.create(500, 500);
scenesManager.CreateScene("Menu", MenuScene_1.MenuScene);
scenesManager.goToScene('Menu');


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(0);
var ScenesManager = (function () {
    function ScenesManager() {
        var _this = this;
        this.scenes = {}; // should be hashmap but a JS object is fine too :)
        this.Loop = function () {
            requestAnimationFrame(_this.Loop);
            if (!_this.currentScene || _this.currentScene.isPaused())
                return;
            _this.currentScene.Update();
            _this.renderer.render(_this.currentScene);
        };
    }
    ScenesManager.prototype.create = function (width, height) {
        if (this.renderer)
            return this;
        this.renderer = PIXI.autoDetectRenderer(width, height);
        this.renderer.backgroundColor = 0x1099bb;
        document.body.appendChild(this.renderer.view);
        requestAnimationFrame(this.Loop);
        return this;
    };
    ScenesManager.prototype.CreateScene = function (id, construct) {
        if (this.scenes[id])
            return undefined;
        var scene = new construct();
        this.scenes[id] = scene;
        return scene;
    };
    ScenesManager.prototype.goToScene = function (id) {
        if (this.scenes[id]) {
            if (this.currentScene)
                this.currentScene.pause();
            this.currentScene = this.scenes[id];
            this.currentScene.resume();
            return true;
        }
        return false;
    };
    return ScenesManager;
}());
exports.ScenesManager = ScenesManager;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = __webpack_require__(4);
var img_bunny = __webpack_require__(5);
var MenuScene = (function (_super) {
    __extends(MenuScene, _super);
    function MenuScene() {
        var _this = _super.call(this) || this;
        _this.OnLoadFinished = function () {
            //This code will run when the loader has finished loading the image
            _this.mySPrite = new PIXI.Sprite(PIXI.loader.resources[img_bunny].texture);
            // center the sprites anchor point
            _this.mySPrite.anchor.x = 0.5;
            _this.mySPrite.anchor.y = 0.5;
            // move the sprite t the center of the screen
            _this.mySPrite.position.x = 250;
            _this.mySPrite.position.y = 250;
            //Add the cat to the stage
            _this.addChild(_this.mySPrite);
        };
        PIXI.loader
            .add(img_bunny)
            .load(_this.OnLoadFinished);
        var basicText = new PIXI.Text('Basic text in pixi');
        basicText.x = 30;
        basicText.y = 90;
        var graphics = new PIXI.Graphics();
        // set a fill and a line style again and draw a rectangle
        graphics.lineStyle(2, 0x0000FF, 1);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(50, 250, 120, 120);
        // draw a rounded rectangle
        graphics.lineStyle(2, 0xFF00FF, 1);
        graphics.beginFill(0xFF00BB, 0.25);
        graphics.drawRoundedRect(150, 450, 300, 100, 15);
        graphics.endFill();
        _this.addChild(graphics);
        _this.addChild(basicText);
        return _this;
    } // constructor
    MenuScene.prototype.Update = function () {
        _super.prototype.Update.call(this);
        this.mySPrite.rotation += 0.1;
    };
    ;
    return MenuScene;
}(Scene_1.Scene));
exports.MenuScene = MenuScene;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(0);
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super.call(this) || this;
        _this.paused = false;
        _this.updateCB = function () { };
        return _this;
    }
    Scene.prototype.onUpdate = function (updateCB) {
        this.updateCB = updateCB;
    };
    Scene.prototype.Update = function () {
        this.updateCB();
    };
    Scene.prototype.pause = function () {
        this.paused = true;
    };
    Scene.prototype.resume = function () {
        this.paused = false;
    };
    Scene.prototype.isPaused = function () {
        return this.paused;
    };
    return Scene;
}(PIXI.Container));
exports.Scene = Scene;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "data/images/img-1c525f6960c2ef60c9b0e64c8ee65634.png";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map