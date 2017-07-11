// http://ezelia.com/2013/pixi-tutorial

import {SceneManager} from "./engine/SceneManager";
import {UIManager} from "./engine/UIManager";
import { MenuScene } from './game/MenuScene';


UIManager.Get().CreateUI();
 
SceneManager.Get().Create(800,600,0x3399FF);





SceneManager.Get().CreateScene("Menu",MenuScene);

SceneManager.Get().GoToScene('Menu');

