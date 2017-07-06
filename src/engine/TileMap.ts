import {TileSet} from './TileSet';

export class TileMap extends PIXI.Container
{
    public tileSet:TileSet;
    // public data:number[][];

    constructor()
    {
        super();
        // this.data = [];        
    }

    public SetData(x:number,y:number,spriteIndex:number)
    {
        this.addChild(this.tileSet.sprites[spriteIndex]);
    }
}