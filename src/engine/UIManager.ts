

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

    public Create()
    {
    let myPage = 
    `
    

  <div class="ui top menu visible">
    <a class="item">
      File
    </a>    
    <a class="item">
      File
    </a>    
    <a class="item">
      File
    </a>      
    <a class="item">
      File
    </a>    
    <a class="item">
      File
    </a>    
    <a class="item">
      File
    </a>          
  </div>

  <div class="ui two column  grid container">
<div class="two wide column">  
<div id="fpsCounter"></div>
</div>    
  <div class="column">  
      <div id="gameContainer"></div>
      
  </div>    
    `;
    document.getElementById('App').innerHTML =(myPage);
        
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