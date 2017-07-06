// http://ezelia.com/2013/pixi-tutorial

import {SceneManager} from "./engine/SceneManager"
import { MenuScene } from './game/MenuScene';

let sceneManager = SceneManager.Get();
 
sceneManager.create(800,600);





sceneManager.CreateScene("Menu",MenuScene);

sceneManager.GoToScene('Menu');

