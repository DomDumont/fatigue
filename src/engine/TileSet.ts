

export class TileSet
{
    public nbTilesX:number;
    public nbTilesY:number;
    public texture:PIXI.Texture;
    public sizeX:number;
    public sizeY:number;
    //public sprites:PIXI.Sprite[][];
    

    constructor(_texture:PIXI.Texture, _sizeX:number, _sizeY:number)
    {
        
        this.texture = _texture;
        this.sizeX = _sizeX;
        this.sizeY = _sizeY;

        this.nbTilesX = this.texture.width / this.sizeX;
        this.nbTilesY = this.texture.height / this.sizeY;

        
    }

    public CreateSprite(spriteIndex:number):PIXI.Sprite
    {
        let x = spriteIndex % this.nbTilesX;        
        let y = Math.floor(spriteIndex / this.nbTilesX);
        

    this.texture.frame = new PIXI.Rectangle(x * this.sizeX,y * this.sizeY, this.sizeX, this.sizeY);                        
    //this.sprites[i][j] = new PIXI.Sprite(texture);
    return new PIXI.Sprite(this.texture);
        
    }
}