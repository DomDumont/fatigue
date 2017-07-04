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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
var Utils = __webpack_require__(4);
var ImVec2 = (function () {
    function ImVec2(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    return ImVec2;
}());
exports.ImVec2 = ImVec2;
var Window = (function () {
    function Window(name) {
        this.IDStack = [];
        this.name = name;
        this.IDStack.push(Utils.HashCode(name));
    }
    return Window;
}());
exports.Window = Window;
var Context = (function () {
    function Context() {
    }
    return Context;
}());
var g = new Context();
var PimGUI = (function (_super) {
    __extends(PimGUI, _super);
    function PimGUI() {
        var _this = _super.call(this) || this;
        g.initialized = false;
        return _this;
    }
    PimGUI.prototype.NewFrame = function () {
    };
    PimGUI.prototype.Render = function () {
    };
    PimGUI.prototype.Button = function (text, pos) {
        var graphics = new PIXI.Graphics();
        // set a fill and a line style again and draw a rectangle
        graphics.lineStyle(2, 0x0000FF, 1);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(pos.x, pos.y, 200, 100);
        this.addChild(graphics);
        return true;
    };
    return PimGUI;
}(PIXI.Container));
exports.PimGUI = PimGUI;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// http://ezelia.com/2013/pixi-tutorial
Object.defineProperty(exports, "__esModule", { value: true });
var GameManager_1 = __webpack_require__(3);
var MenuScene_1 = __webpack_require__(6);
var gameManager = GameManager_1.GameManager.GetInstance();
gameManager.create(800, 600);
gameManager.CreateScene("Menu", MenuScene_1.MenuScene);
gameManager.goToScene('Menu');


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(0);
var PimGUI = __webpack_require__(1);
__webpack_require__(5);
var GameManager = (function () {
    function GameManager() {
        var _this = this;
        this.stats = new Stats();
        this.scenes = {}; // should be hashmap but a JS object is fine too :)
        this.Loop = function () {
            _this.stats.begin();
            requestAnimationFrame(_this.Loop);
            if (!_this.currentScene || _this.currentScene.isPaused())
                return;
            _this.gui.NewFrame();
            _this.currentScene.Update();
            _this.currentScene.addChild(_this.gui);
            _this.renderer.render(_this.currentScene);
            _this.gui.Render();
            _this.stats.end();
        };
    }
    GameManager.GetInstance = function () {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
            // ... any one time initialization goes here ...
        }
        return GameManager.instance;
    };
    GameManager.prototype.create = function (width, height) {
        if (this.renderer)
            return this;
        this.renderer = PIXI.autoDetectRenderer(width, height);
        this.renderer.backgroundColor = 0x000000;
        document.body.appendChild(this.renderer.view);
        this.gui = new PimGUI.PimGUI();
        requestAnimationFrame(this.Loop);
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(this.stats.dom);
        return this;
    };
    GameManager.prototype.CreateScene = function (id, construct) {
        if (this.scenes[id])
            return undefined;
        var scene = new construct();
        scene.gameManager = this;
        this.scenes[id] = scene;
        return scene;
    };
    GameManager.prototype.goToScene = function (id) {
        if (this.scenes[id]) {
            if (this.currentScene)
                this.currentScene.pause();
            this.currentScene = this.scenes[id];
            this.currentScene.resume();
            return true;
        }
        return false;
    };
    return GameManager;
}());
exports.GameManager = GameManager;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function HashCode(s) {
    return s.split("").reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
}
exports.HashCode = HashCode;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = Stats;

/***/ }),
/* 6 */
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
var Scene_1 = __webpack_require__(7);
var FatGUI = __webpack_require__(1);
var img_bunny = __webpack_require__(8);
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
            _this.mySPrite.position.y = 390;
            //Add the cat to the stage
            _this.addChild(_this.mySPrite);
            var bitmapFontText = new PIXI.extras.BitmapText("bitmap fonts are\n now supported!", { font: "ProggyClean", align: "right" });
            bitmapFontText.position.x = 200;
            bitmapFontText.position.y = 200;
            _this.addChild(bitmapFontText);
        };
        PIXI.loader
            .add(img_bunny)
            .add("../data/fonts/Proggy.xml")
            .on("progress", _this.loadProgressHandler)
            .load(_this.OnLoadFinished);
        var basicText = new PIXI.Text('Yes !!!');
        basicText.x = 30;
        basicText.y = 90;
        _this.addChild(basicText);
        return _this;
        /*
        var graphics = new PIXI.Graphics();
            // set a fill and a line style again and draw a rectangle
        graphics.lineStyle(2, 0x0000FF, 1);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(50, 250, 120, 120);
    
        // draw a rounded rectangle
        graphics.lineStyle(2, 0xFF00FF, 1);
        graphics.beginFill(0xFF00BB, 0.25);
        graphics.drawRoundedRect(200, 250, 200, 50, 15);
            graphics.endFill();
        
            this.addChild(graphics);
        */
    } // constructor
    MenuScene.prototype.Update = function () {
        _super.prototype.Update.call(this);
        if (this.mySPrite)
            this.mySPrite.rotation += 0.1;
        if (this.gameManager.gui.Button("coucou", new FatGUI.ImVec2(20, 20))) {
        }
    };
    ;
    MenuScene.prototype.loadProgressHandler = function (loader, resource) {
        //Display the file `url` currently being loaded
        console.log("loading: " + resource.url);
        //Display the precentage of files currently loaded
        console.log("progress: " + loader.progress + "%");
        //If you gave your files names as the first argument 
        //of the `add` method, you can access them like this
        //console.log("loading: " + resource.name);
    };
    return MenuScene;
}(Scene_1.Scene));
exports.MenuScene = MenuScene;


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "data/images/img-1c525f6960c2ef60c9b0e64c8ee65634.png";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map