

export class TileSet
{
    public nbTilesX:number;
    public nbTilesY:number;
    //public sprites:PIXI.Sprite[][];
    public sprites:PIXI.Sprite[];

    constructor(texture:PIXI.Texture,sizeX:number,sizeY:number)
    {
        this.sprites = [];
        this.nbTilesX = texture.width / sizeX;
        this.nbTilesY = texture.height / sizeY;

        for (let i=0;i< this.nbTilesX-1;i++)
            {
            for (let j=0;j< this.nbTilesY-1;j++)
                        {
                        let tempTexture = texture;                            
                        tempTexture.frame = new PIXI.Rectangle(i * sizeX,j * sizeY, sizeX, sizeY);                        
                        //this.sprites[i][j] = new PIXI.Sprite(texture);
                        this.sprites.push(new PIXI.Sprite(tempTexture));
                        }
            }
        
    }
}