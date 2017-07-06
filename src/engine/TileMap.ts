import {TileSet} from './TileSet';

export class TileMap extends PIXI.Container
{
    public tileSet:TileSet;
    // public data:number[][];
    public sprites:PIXI.Sprite[];

    constructor()
    {
        super();
        // this.data = [];        
    }

    public SetData(x:number,y:number,spriteIndex:number)
    {
        let tempSprite =  this.tileSet.CreateSprite(spriteIndex);
        tempSprite.position.x = x * 48;
        tempSprite.position.y = y * 48;
        this.addChild(tempSprite);
        
    }
}