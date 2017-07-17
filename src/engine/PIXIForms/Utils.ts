

export class Point {
    public x: number;
    public y: number;

    constructor(x: number,y:number) {
        this.x = x;
        this.y = y;
    }
}



export class Size {
    public x: number;
    public y: number;

    constructor(x: number,y:number) {
        this.x = x;
        this.y = y;
    }
}


export class EventArgs{

}

export class CancelEventArgs extends EventArgs
{
public Cancel:boolean;
}

export class FormClosingEventArgs extends CancelEventArgs
{
    public ClosingReason:string;
}


export interface EventHandler {
    ( sender: object , arg: EventArgs ) : void;
}

export interface FormClosingEventHandler {
    ( sender: object , arg: FormClosingEventArgs ) : void;
}



export class Event<T>
{
    private handlers : T [];

    constructor() {
		this.handlers = [];
	}

    public Add( newHandler:T)
    {
    this.handlers.push(newHandler);
    }
    public Remove (handler : T) : void {
		this.handlers.splice(this.handlers.indexOf(handler), 1);
	}

    public Raise (sender: object , arg: EventArgs) : void 
    {

		this.handlers.forEach((handler : T)=> {
            (<any>handler)(sender,arg);            
		});
	}

}