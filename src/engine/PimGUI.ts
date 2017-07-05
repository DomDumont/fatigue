import {GameManager} from './GameManager';
import * as Utils from './Utils';
import * as assert from 'assert';


enum ImGuiWindowFlags_
{
    // Default: 0
    ImGuiWindowFlags_NoTitleBar             = 1 << 0,   // Disable title-bar
    ImGuiWindowFlags_NoResize               = 1 << 1,   // Disable user resizing with the lower-right grip
    ImGuiWindowFlags_NoMove                 = 1 << 2,   // Disable user moving the window
    ImGuiWindowFlags_NoScrollbar            = 1 << 3,   // Disable scrollbars (window can still scroll with mouse or programatically)
    ImGuiWindowFlags_NoScrollWithMouse      = 1 << 4,   // Disable user vertically scrolling with mouse wheel
    ImGuiWindowFlags_NoCollapse             = 1 << 5,   // Disable user collapsing window by double-clicking on it
    ImGuiWindowFlags_AlwaysAutoResize       = 1 << 6,   // Resize every window to its content every frame
    ImGuiWindowFlags_ShowBorders            = 1 << 7,   // Show borders around windows and items
    ImGuiWindowFlags_NoSavedSettings        = 1 << 8,   // Never load/save settings in .ini file
    ImGuiWindowFlags_NoInputs               = 1 << 9,   // Disable catching mouse or keyboard inputs
    ImGuiWindowFlags_MenuBar                = 1 << 10,  // Has a menu-bar
    ImGuiWindowFlags_HorizontalScrollbar    = 1 << 11,  // Allow horizontal scrollbar to appear (off by default). You may use SetNextWindowContentSize(ImVec2(width,0.0f)); prior to calling Begin() to specify width. Read code in imgui_demo in the "Horizontal Scrolling" section.
    ImGuiWindowFlags_NoFocusOnAppearing     = 1 << 12,  // Disable taking focus when transitioning from hidden to visible state
    ImGuiWindowFlags_NoBringToFrontOnFocus  = 1 << 13,  // Disable bringing window to front when taking focus (e.g. clicking on it or programatically giving it focus)
    ImGuiWindowFlags_AlwaysVerticalScrollbar= 1 << 14,  // Always show vertical scrollbar (even if ContentSize.y < Size.y)
    ImGuiWindowFlags_AlwaysHorizontalScrollbar=1<< 15,  // Always show horizontal scrollbar (even if ContentSize.x < Size.x)
    ImGuiWindowFlags_AlwaysUseWindowPadding = 1 << 16,  // Ensure child windows without border uses style.WindowPadding (ignored by default for non-bordered child windows, because more convenient)
    // [Internal]
    ImGuiWindowFlags_ChildWindow            = 1 << 20,  // Don't use! For internal use by BeginChild()
    ImGuiWindowFlags_ChildWindowAutoFitX    = 1 << 21,  // Don't use! For internal use by BeginChild()
    ImGuiWindowFlags_ChildWindowAutoFitY    = 1 << 22,  // Don't use! For internal use by BeginChild()
    ImGuiWindowFlags_ComboBox               = 1 << 23,  // Don't use! For internal use by ComboBox()
    ImGuiWindowFlags_Tooltip                = 1 << 24,  // Don't use! For internal use by BeginTooltip()
    ImGuiWindowFlags_Popup                  = 1 << 25,  // Don't use! For internal use by BeginPopup()
    ImGuiWindowFlags_Modal                  = 1 << 26,  // Don't use! For internal use by BeginPopupModal()
    ImGuiWindowFlags_ChildMenu              = 1 << 27   // Don't use! For internal use by BeginMenu()
};


export class Vec2
{
    public x:number;
    public y:number;

    constructor(_x:number,_y:number)
    {
        this.x = _x;
        this.y = _y;
    }


}



export class IO
{
    public DisplaySize:Vec2;

    constructor()
    {
        this.DisplaySize = new Vec2(-1, -1);
    }
}

class Context
{
    public initialized:boolean;
    public IO: IO;
    public Windows:Window[];
    public CurrentWindowStack:Window[];
    public FrameCount: number;
    public FontSize: number;
    public CurrentWindow:Window;                      // Being drawn into
    public FontBaseSize:number;                       // (Shortcut) == IO.FontGlobalScale * Font->Scale * Font->FontSize. Size of characters.

    constructor()
    {
        this.IO = new IO();
        this.Windows = [];
        this.CurrentWindowStack = [];
        this.FontSize = this.FontBaseSize = 0.0;
    }
}


let g:Context = new Context();

class ImDrawList
{
    public AddRectFilled(a:Vec2,b:Vec2,col:number,rounding:number,flags:number = 0)
    {

    }

    public Clear()
    {
        
    }
}



export class Window 
{
    public name:string;
    public ID:number;
    public IDStack = [];
    public Size:Vec2;
    public SizeFull:Vec2;
    public LastFrameActive:number;
    public Flags:number;
    public FontWindowScale:number;                    // Scale multiplier per-window
    public DrawList:ImDrawList;
    public Active:boolean;


    constructor(name:string)
    {
    this.name = name;    
    this.IDStack.push(Utils.HashCode(name));
    }

    public CalcFontSize():number 
    { 
        let temp:number = g.FontBaseSize * this.FontWindowScale;
        return temp; 
        
    }
}

export class PimGUI extends PIXI.Container
{
    
    private static instance: PimGUI;
    static Get() 
        {
        if (!PimGUI.instance) 
            {
            PimGUI.instance = new PimGUI();
            // ... any one time initialization goes here ...
            }
        return PimGUI.instance;
        }

    private constructor()
    {
        super();
        g.initialized = false;
    }


    public GetIO():IO
    {
        return g.IO;
    }

    public NewFrame():void
    {
    assert.ok(g.IO.DisplaySize.x >= 0.0 && g.IO.DisplaySize.y >= 0.0);
    }

    public Render():void
    {    
    }

    public Button(text:string,pos:Vec2):boolean
    {
    var graphics = new PIXI.Graphics();
        // set a fill and a line style again and draw a rectangle
    graphics.lineStyle(2, 0x0000FF, 1);
    graphics.beginFill(0xFF700B, 1);
    graphics.drawRect(pos.x, pos.y,200,100);
    this.addChild(graphics);
    return true;
    }

    public CreateNewWindow(name: string,size:Vec2, flags: Number):Window
    {
        let tempWindow:Window = new Window(name);
        tempWindow.Size = size;
        tempWindow.SizeFull = size;

        g.Windows.push(tempWindow);

        return tempWindow;
    }


    public FindWindowByName(name:string): Window
        {
            let tempID:number = Utils.HashCode(name);
            g.Windows.forEach(element => {
                if (element.ID == tempID)
                    {
                    return element;
                    }
            });
            return null;
        }

    public SetCurrentWindow(window:Window):void
    {
    g.CurrentWindow = window;
    if (window)
        {
        g.FontSize = window.CalcFontSize();
        }
    }
    public Begin(name: string, p_open : boolean,size_on_first_use : Vec2, bg_alpha : number,flags:number):boolean    
    {
    // Find or create
    let window_is_new:boolean = false;
    let window:Window = this.FindWindowByName(name);
    if (!window)
        {
        window = this.CreateNewWindow(name, size_on_first_use, flags);
        window_is_new = true;
        }
    let current_frame:number = g.FrameCount;

    const first_begin_of_the_frame:boolean = (window.LastFrameActive != current_frame);
    if (first_begin_of_the_frame)
        window.Flags = flags;
    else
        flags = window.Flags;

    let parent_window: Window = !g.CurrentWindowStack.length?null:g.CurrentWindowStack[g.CurrentWindowStack.length -1];
    g.CurrentWindowStack.push(window);
    this.SetCurrentWindow(window);

    let window_was_active:boolean = (window.LastFrameActive == current_frame - 1);


    // When reusing window again multiple times a frame, just append content (don't need to setup again)
    if (first_begin_of_the_frame)
    {
        window.Active = true;
        // Clear draw list, setup texture, outer clipping rectangle
        window.DrawList.Clear();
        
    }
    return true;
    }

    public End()
    {
        let window:Window = g.CurrentWindow;

        g.CurrentWindowStack.pop();

        let parent_window: Window = !g.CurrentWindowStack.length?null:g.CurrentWindowStack[g.CurrentWindowStack.length -1];
        this.SetCurrentWindow(parent_window);
    }

    public GetCurrentWindow():Window
    {
        return g.CurrentWindow;
    }

    public RenderFrame(p_min:Vec2,p_max:Vec2, fill_col:number,border:boolean,rounding:number)
    {
        let window:Window = this.GetCurrentWindow();
        window.DrawList.AddRectFilled(p_min, p_max, fill_col, rounding);
    }
} //Class PimGUI 