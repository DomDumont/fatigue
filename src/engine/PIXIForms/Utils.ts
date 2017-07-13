

export class Size {
    public x: number;
    public y: number;

    constructor(x: number,y:number) {
        this.x = x;
        this.y = y;
    }
}

export class EventArg{

}
interface EventHandler {
    ( sender: object , arg: EventArg ) : void;
}

export class Event
{
    private handlers : EventHandler [];

    constructor() {
		this.handlers = [];
	}

    public Add( newHandler:EventHandler)
    {
    this.handlers.push(newHandler);
    }
    public Remove (handler : EventHandler) : void {
		this.handlers.splice(this.handlers.indexOf(handler), 1);
	}

    public Raise (sender: object , arg: EventArg) : void 
    {

		this.handlers.forEach((handler : EventHandler)=> {
			handler(sender,arg);
		});
	}

}