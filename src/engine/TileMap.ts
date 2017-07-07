import {TileSet} from './TileSet';

export class TileMap extends PIXI.Container
{
    public tileSet:TileSet;
    public sprites:PIXI.Sprite[];

    public sizeX:number;
    public sizeY:number;

    public scaleX:number;
    public scaleY:number;

    private myCursor:PIXI.Graphics;
    

    constructor()
    {
        super();
        this.scaleX = 1;
        this.scaleY = 1;

        this.interactive = true;
        this.on("mousemove",this.OnMouseMove);
        
        this.myCursor = new PIXI.Graphics();
        this.myCursor.drawRect(0,0,32,32);
        
        this.addChild(this.myCursor);
    }

    public OnMouseMove = (event) =>
    {
    var mousePosition = event.data.getLocalPosition(this);
    this.myCursor.position = mousePosition;
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