// http://ezelia.com/2013/pixi-tutorial

import {ScenesManager} from "./engine/SceneManager"
import { MenuScene } from './game/MenuScene';

let scenesManager = new ScenesManager();
 
scenesManager.create(500,500);





scenesManager.CreateScene("Menu",MenuScene);

scenesManager.goToScene('Menu');

