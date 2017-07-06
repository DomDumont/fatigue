// http://ezelia.com/2013/pixi-tutorial

import {SceneManager} from "./engine/SceneManager"
import { MenuScene } from './game/MenuScene';

let sceneManager = SceneManager.Get();
 
sceneManager.create(1000,1000);





sceneManager.CreateScene("Menu",MenuScene);

sceneManager.GoToScene('Menu');

