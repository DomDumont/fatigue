

export class Size {
    public x: number;
    public y: number;

    constructor(x: number,y:number) {
        this.x = x;
        this.y = y;
    }
}

interface EventHandler {
    ( error: Error, result?: number ) : void;
}

export class Event
{
    public Add( newHandler:EventHandler)
    {

    }

}