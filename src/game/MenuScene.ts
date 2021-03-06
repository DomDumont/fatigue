import { Scene } from "../engine/Scene";
import * as PimGUI from "../engine/PimGUI";
import { TileMap } from "../engine/TileMap";
import { TileSet } from "../engine/TileSet";


let img_bunny: any = require("../public/data/images/bunny.png");
let img_zelda1: any = require("../public/data/images/zelda1.png");


export class MenuScene extends Scene {

    // variables

    private mySPrite: PIXI.Sprite;
    private bitmapFontText: PIXI.extras.BitmapText;

    private tileSet: TileSet;
    private tileMap: TileMap;

    private mainMenu: PimGUI.Menu;
    private fileMenuItem: PimGUI.MenuItem;
    private editMenuItem: PimGUI.MenuItem;
    private openMenuItem: PimGUI.MenuItem;
    private closeMenuItem: PimGUI.MenuItem;


    constructor() {
        super();
    } // constructor



    public GetNeededResources():any[] {
        return [img_bunny,
            img_zelda1,
            "../data/fonts/Proggy.xml"
        ];
    }

    public Update():void {
        super.Update();
        if (this.mySPrite) {
            this.mySPrite.rotation += 0.1;
            this.bitmapFontText.text = "rotation = " + this.mySPrite.rotation;
        }
    }


    public InitializeComponent(): void {
        this.mainMenu = new PimGUI.Menu();

        this.fileMenuItem = new PimGUI.MenuItem();
        this.editMenuItem = new PimGUI.MenuItem();
        this.openMenuItem = new PimGUI.MenuItem();
        this.closeMenuItem = new PimGUI.MenuItem();

        this.fileMenuItem.Text = "File";
        this.editMenuItem.Text = "Edit";
        this.openMenuItem.Text = "Open";
        this.closeMenuItem.Text = "Close";

        // add two MenuItem objects to the MainMenu.
        this.mainMenu.AddItem(this.fileMenuItem);
        this.mainMenu.AddItem(this.editMenuItem);

    }

    public OnLoadFinishedCB(): void {
        this.InitializeComponent();
        // this code will run when the loader has finished loading the image
        this.mySPrite = new PIXI.Sprite(PIXI.loader.resources[img_bunny].texture);
        // center the sprites anchor point
        this.mySPrite.anchor.x = 0.5;
        this.mySPrite.anchor.y = 0.5;
        // move the sprite t the center of the screen
        this.mySPrite.position.x = 250;
        this.mySPrite.position.y = 390;

        // add the cat to the stage
        this.addChild(this.mySPrite);


        this.bitmapFontText = new PIXI.extras.BitmapText("Test of India", { font: "ProggyClean", align: "right" });

        this.bitmapFontText.position.x = 200;
        this.bitmapFontText.position.y = 200;

        this.addChild(this.bitmapFontText);

        let tempForm:PimGUI.Form = this.gameManager.gui.CreateForm("Test", new PimGUI.Vec2(300, 300));

        tempForm.Menu = this.mainMenu;


        this.tileSet = new TileSet(PIXI.loader.resources[img_zelda1].texture.baseTexture, 32, 32);
        this.tileMap = new TileMap(32);
        window.addEventListener("orc", this.OnORC);
        this.tileMap.tileSet = this.tileSet;
        /*
        for (var i=0;i<20;i++)
            {
            for (var j=0;j<20;j++)
                {
                this.tileMap.SetData(i,j,Math.floor(Math.random() * 4) + 0  );
                }
            }
        */

        this.tileMap.position.x = 50;
        this.tileMap.position.y = 50;

        this.addChild(this.tileMap);


    }

    public OnORC = (event: CustomEvent) => {
        (<any>$("#orc_modal")).modal("show");
        console.log("on orc !!!");
    }

}