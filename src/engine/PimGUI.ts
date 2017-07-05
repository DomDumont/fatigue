import {GameManager} from './GameManager';
import * as Utils from './Utils';
import * as assert from 'assert';


export class Vec2
{
    public x:number;
    public y:number;

    constructor(_x:number,_y:number)
    {
        this.x = _x;
        this.y = _y;
    }
}


export class PimGUI extends PIXI.Container
{
    public CreateWindow(title:string, size: Vec2)
    {
        var roundBox = new PIXI.Graphics();
        roundBox.lineStyle(4, 0x99CCFF, 1);
        roundBox.beginFill(0x000000);
        roundBox.drawRoundedRect(0, 0, size.x, size.y, 10)
        roundBox.endFill();
        roundBox.x = 0;
        roundBox.y = 0;
        roundBox.alpha = 0.5;
        this.addChild(roundBox);
    }
} //Class PimGUI 