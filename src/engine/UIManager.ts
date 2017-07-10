import * as $ from "jquery";

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
    

  <div class="ui menu">
  <div class="header item">
    Our Company
  </div>
  <a class="item">
    About Us
  </a>
  <a class="item">
    Jobs
  </a>
  <a class="item">
    Locations
  </a>
</div>

  <div class="ui two column  grid container">
  <div class="stretched row">
<div class="two wide column">  

  <div class="ui segment">
  coucou
  </div>
  <div class="ui segment">  
  <div id="fpsCounter"></div>
  </div>
</div>
<div class="column">  
  <div class="ui segment">
      <div id="gameContainer">
  </div>
</div>
      
</div>    
</div> 


<div class="ui modal">
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

    //document.getElementById('App').innerHTML =(myPage);
    $("#App")[0].innerHTML =(myPage);    
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