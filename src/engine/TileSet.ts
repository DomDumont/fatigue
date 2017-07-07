

export class TileSet
{
    public nbTilesX:number;
    public nbTilesY:number;
    public texture:PIXI.BaseTexture;
    public sizeX:number;
    public sizeY:number;
    //public sprites:PIXI.Sprite[][];
    

    constructor(_texture:PIXI.BaseTexture, _sizeX:number, _sizeY:number)
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
        

    //this.sprites[i][j] = new PIXI.Sprite(texture);
    return new PIXI.Sprite(new PIXI.Texture(this.texture,new PIXI.Rectangle(x * this.sizeX,y * this.sizeY, this.sizeX, this.sizeY)));
        
    }
}