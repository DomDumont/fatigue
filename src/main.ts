// http://ezelia.com/2013/pixi-tutorial

import {SceneManager} from "./engine/SceneManager"
import { MenuScene } from './game/MenuScene';

let sceneManager = SceneManager.Get();
 
sceneManager.Create(1000,1000,0x3399FF);





sceneManager.CreateScene("Menu",MenuScene);

sceneManager.GoToScene('Menu');

