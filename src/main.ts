// http://ezelia.com/2013/pixi-tutorial

import {GameManager} from "./engine/SceneManager"
import { MenuScene } from './game/MenuScene';

let gameManager = new GameManager();
 
gameManager.create(800,600);





gameManager.CreateScene("Menu",MenuScene);

gameManager.goToScene('Menu');

