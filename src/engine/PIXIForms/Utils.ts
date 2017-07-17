
export class Point {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

// tslint:disable-next-line:max-classes-per-file
export class Size {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

// tslint:disable-next-line:max-classes-per-file
export class EventArgs {

}

// tslint:disable-next-line:max-classes-per-file
export class CancelEventArgs extends EventArgs {
public Cancel: boolean;
}

// tslint:disable-next-line:max-classes-per-file
export class FormClosingEventArgs extends CancelEventArgs {
    public ClosingReason: string;
}

export type IEventHandler = ( sender: object , arg: EventArgs ) => void;

export type IFormClosingEventHandler = (sender: object , arg: FormClosingEventArgs) => void;

// tslint:disable-next-line:max-classes-per-file
export class Event<T> {
    private handlers: T [];

    constructor() {
        this.handlers = [];
    }

    public Add( newHandler: T) {
    this.handlers.push(newHandler);
    }

    public Remove(handler: T): void {
    this.handlers.splice(this.handlers.indexOf(handler), 1);
    }

    public Raise(sender: object , arg: EventArgs): void {

    this.handlers.forEach((handler: T) => {
            (handler as any)(sender, arg);
    });
    }

}
