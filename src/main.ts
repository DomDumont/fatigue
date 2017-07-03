// http://ezelia.com/2013/pixi-tutorial

import {GameManager} from "./engine/GameManager"
import { MenuScene } from './game/MenuScene';

let gameManager = GameManager.GetInstance();
 
gameManager.create(800,600);





gameManager.CreateScene("Menu",MenuScene);

gameManager.goToScene('Menu');

