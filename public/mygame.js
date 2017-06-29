    var type = "WebGL"
    if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }

    PIXI.utils.sayHello(type)

      //Create the renderer
  var renderer = PIXI.autoDetectRenderer(256, 256);

  //Add the canvas to the HTML document
  document.body.appendChild(renderer.view);

  //Create a container object called the `stage`
  var stage = new PIXI.Container();

  //Tell the `renderer` to `render` the `stage`
  renderer.backgroundColor = 0xAA1639;
  renderer.render(stage);


PIXI.loader
  .add([
    'music1','data/music/crisis_scoring_action.mp3'
  ])
  .on("progress", loadProgressHandler)
  .load(setup);

function loadProgressHandler(loader, resource) {

  //Display the file `url` currently being loaded
  console.log("loading: " + resource.url); 

  //Display the precentage of files currently loaded
  console.log("progress: " + loader.progress + "%"); 

  //If you gave your files names as the first argument 
  //of the `add` method, you can access them like this
  console.log("loading: " + resource.name);
}

function setup() {
  console.log("All files loaded");
   var music = sounds['music1'];
   music.play();
   music.loop();
}