import {Size} from "./Utils";
import {Event} from "./Utils";

export class Form 
{

    public MinimumSize: Size;
    public MaximumSize: Size;
    public Load: Event;

    constructor() {
        this.Load = new Event();
        this.Load.Raise(this,null);
    }
}

