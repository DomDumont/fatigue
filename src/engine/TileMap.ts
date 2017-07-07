import {TileSet} from './TileSet';

export class TileMap extends PIXI.Container
{
    public tileSet:TileSet;
    public sprites:PIXI.Sprite[];
    public scaleX:number;
    public scaleY:number;

    constructor()
    {
        super();
        this.scaleX = 1;
        this.scaleY = 1;
    }

    public SetData(x:number,y:number,spriteIndex:number)
    {
        let tempSprite =  this.tileSet.CreateSprite(spriteIndex);
        tempSprite.position.x = x *  this.tileSet.sizeX;
        tempSprite.position.y = y *  this.tileSet.sizeY;
        tempSprite.scale.x = this.scaleX;
        tempSprite.scale.y = this.scaleY;
        this.addChild(tempSprite);
        
    }
}