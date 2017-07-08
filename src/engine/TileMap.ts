import {TileSet} from './TileSet';

export class TileMap extends PIXI.Container
{
    public tileSet:TileSet;
    public sprites:PIXI.Sprite[];


    private myCursor:PIXI.Graphics;

    private tileSize:number;    

    constructor(_tileSize:number)
    {
        super();

        this.tileSize = _tileSize;

        this.interactive = true;
        this.on("mousemove",this.OnMouseMove);
        
        this.myCursor = new PIXI.Graphics();
        this.myCursor.lineStyle(2, 0xFF00FF, 1);
        this.myCursor.beginFill(0, 0);
        this.myCursor.drawRect(0,0,this.tileSize,this.tileSize);
        this.myCursor.endFill();
        this.myCursor.pivot.x = this.tileSize / 2;
        this.myCursor.pivot.y = this.tileSize / 2;
        
        this.addChild(this.myCursor);
    }

    public OnMouseMove = (event) =>
    {
    var mousePosition:PIXI.Point = event.data.getLocalPosition(this);
    // now snap to grid
    mousePosition.x = Math.floor(mousePosition.x / this.tileSize) * this.tileSize;
    mousePosition.y = Math.floor(mousePosition.y / this.tileSize) * this.tileSize;
    this.myCursor.position = mousePosition;
    }

    public SetData(x:number,y:number,spriteIndex:number)
    {
        let tempSprite =  this.tileSet.CreateSprite(spriteIndex);
        tempSprite.position.x = x *  this.tileSize;
        tempSprite.position.y = y *  this.tileSize;
        tempSprite.anchor.x = 0.5;
        tempSprite.anchor.y = 0.5;
        this.addChildAt(tempSprite,0);
        
    }
}