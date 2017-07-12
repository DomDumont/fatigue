let Mustache = require('Mustache') ;

let lol_menu: any = require("../public/data/templates/menu.lol");
let lol_image: any = require("../public/data/templates/image.lol");

let img_zelda1: any = require("../public/data/images/zelda1.png");

export class Treeview
{
 public Nodes:TreeNode[];
 public Render():string
 {
   let tempString:string;

 tempString = '<div class="ui list">';
 for (let entry of this.Nodes) 
    {
    tempString += '<div class="item">';
    tempString += entry.Render();
    tempString += '</div>';
  }
  
  tempString += '</div';

  
  return tempString;
 }

 public Show()
 {
   
 }
}

export class TreeNode
{
  public Text:string;
  public Nodes:TreeNode[];  
 public Render():string
 {
   let tempString:string;
   return tempString;
 }
  
}


export class UIManager 
{
    private static instance: UIManager;


    static Get() 
    {
        if (!UIManager.instance) 
            {
            UIManager.instance = new UIManager();
            // ... any one time initialization goes here ...
            }
        return UIManager.instance;
    }
    
    private constructor()
        {
        
        }   


    public LoadImage()
        {
          $.get(lol_image, function(template) 
            {
            var rendered = Mustache.render(template, {imageLink: img_zelda1 });
            $('#TargetImage').html(rendered);
            });
        }


    public LoadMenu()
    {
      $.get(lol_menu, function(template) 
        {
        var rendered = Mustache.render(template, {name: "MyMenu", text: "TropFort", items:[{text:'File'},{text:'Edit'}]});
        $('#TargetMenu').html(rendered);
        });
    }

    

    public CreateUI()
    {
    let myPage = 
    `
    <div id='TargetMenu'> target menu </div>


  <div class="ui two column  grid container">
  <div class="stretched row">

  <div class="four wide column">  

  <div class="ui segment">
  <div id='TargetImage'> target image </div>
  </div>


  <div class="ui segment">  
  <div id='TargetTreeview'> target treeview </div>
  </div>

  <div class="ui segment">  
  <div id="fpsCounter"></div>
  </div>
</div>
<div class="column">    
      <div id="gameContainer">  
</div>
      
</div>    
</div> 


<div id="orc_modal" class="ui modal">
  <i class="close icon"></i>
  <div class="header">
    Profile Picture
  </div>
  <div class="image content">
    <div class="ui medium image">
      <img src="/images/avatar/large/chris.jpg">
    </div>
    <div class="description">
      <div class="ui header">We've auto-chosen a profile image for you.</div>
      <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
      <p>Is it okay to use this photo?</p>
    </div>
  </div>
  <div class="actions">
    <div class="ui black deny button">
      Nope
    </div>
    <div class="ui positive right labeled icon button">
      Yep, that's me
      <i class="checkmark icon"></i>
    </div>
  </div>
</div>

    `;

    console.log(Mustache.render('Salut {{name}}',{name : 'John'}));

    
    //document.getElementById('App').innerHTML =(myPage);
    $("#App")[0].innerHTML =(myPage);   
    this.LoadMenu();
    this.LoadImage();

    //(<any>$("#TargetMenu")).transition('fly down')
;
    let testTreeview = new Treeview();
    

    // Test des clicks du menu
    $("#MainMenu .item").click(function(event)
      {
      console.log("click on " + event.target.innerText);
      }); 

        
    }
/*
<div class="ui fluid container">
<div class="ui grid">
 <div class="four wide column">
  <div class="ui sidebar inverted vertical menu">
    <a class="item">
      1
    </a>
    <a class="item">
      2
    </a>
    <a class="item">
      3
    </a>
  </div>
</div>     
<div class="twelvw wide column">
<button class="ui primary button">
  Save
</button>
<button class="ui button">
  Discard
</button>
<p>pouet pouet</p>
</div>

  <div id="gameContainer"></div>
  <div id="fpsCounter"></div>

</div>
*/
}