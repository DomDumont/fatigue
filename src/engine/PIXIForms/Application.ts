import {Form} from "./Form";
export default class Application {

    private static _ready:any;
    
    public static Initialize()
    {
    PIXI.loader.add("../data/fonts/Proggy.xml").load(Application.OnLoadFinished);
    }
    public static Run(mainForm: Form): void {
 
    }    

    public static Ready(callback:any)
    {
        Application._ready = callback;
    }
    public static OnLoadFinished()
    {
        console.log('Application.OnLoadFinished');
        Application._ready();
        
    }

    
}

Application.Initialize();
