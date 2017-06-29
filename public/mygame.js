var type = "WebGL"
var g_soundObjects = {};

//First, create a list of the kind of sound files we want to check
var soundExtensions = ["wav", "mp3", "ogg", "webm"];

//Set default loading mechanism for sound file extensions to use XHR
let Resource = PIXI.loaders.Resource;
Resource.setExtensionLoadType("wav", Resource.LOAD_TYPE.XHR);
Resource.setExtensionLoadType("mp3", Resource.LOAD_TYPE.XHR);
Resource.setExtensionLoadType("ogg", Resource.LOAD_TYPE.XHR);
Resource.setExtensionLoadType("webm", Resource.LOAD_TYPE.XHR);

//Set default loading type for sound file extensions to be arraybuffer
Resource.setExtensionXhrType("wav", Resource.XHR_RESPONSE_TYPE.BUFFER);
Resource.setExtensionXhrType("mp3", Resource.XHR_RESPONSE_TYPE.BUFFER);
Resource.setExtensionXhrType("ogg", Resource.XHR_RESPONSE_TYPE.BUFFER);
Resource.setExtensionXhrType("webm", Resource.XHR_RESPONSE_TYPE.BUFFER);


    if (!PIXI.utils.isWebGLSupported()) {
      type = "canvas"
    }

    PIXI.utils.sayHello(type)

      //Create the renderer
  var renderer = PIXI.autoDetectRenderer(512, 512);

  //Add the canvas to the HTML document
  document.body.appendChild(renderer.view);

  //Create a container object called the `stage`
  var stage = new PIXI.Container();

  //Tell the `renderer` to `render` the `stage`
  renderer.backgroundColor = 0xAA16AA;
  renderer.render(stage);


PIXI.loader
  .add(
    'data/music/1-01 Town of Wishes.ogg'
  )
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


//Loop through all the loader's resources and look for sound files
Object.keys(PIXI.loader.resources).forEach(function(resource) {

  //Find the file extension of the asset
  var extension = resource.split(".").pop();

  //If one of the resource file extensions matches the sound file
  //extensions, then we know we have a sound file
  if(soundExtensions.indexOf(extension) !== -1){

    //Count one more sound to decode
    soundsToDecode += 1;

    //Create aliases for the sound's `xhr` object and `url` (its
    //file name)
    var xhr = PIXI.loader.resources[resource].xhr,
          url = PIXI.loader.resources[resource].url;

    //Create a sound sprite using`sound.js`'s
    //`makeSound` function. Notice the 4th argument is the loaded
    //sound's `xhr` object. Setting the 3rd argument to `false`
    //means that `makeSound` won't attempt to load the sounds
    //again. When the sound has been decoded, the `decodeHandler`
    //(see above!) will be run 
    var soundSprite = makeSound(url, decodeHandler.bind(this), false, xhr);

      //Get the sound file name.
        soundSprite.name = PIXI.loader.resources[resource].name;

        //Add the sound object to Hexi's `soundObjects` object.
        //You'll be able to access them in your application through
        //Hexi's higher-level `sound` method, like this:
        //`hexi.sound("soundFileName.wav");`
        g_soundObjects[soundSprite.name] = soundSprite;
  }
});  
  console.log("All files loaded");
 
}

//Variables to count the number of sound files and the sound files
//that have been decoded. If both these numbers are the same at
//some point, then we know all the sounds have been decoded and we
//can set `allSoundsDecoded` to `true`
var soundsToDecode = 0,
    soundsDecoded = 0,
    allSoundsDecoded = false;


//The `decodeHandler` will run when each sound file is decoded
var decodeHandler = function() {

  //Count 1 more sound as having been decoded
  soundsDecoded += 1;

  //If the decoded sounds match the number of sounds to decode,
  //then we know all the sounds have been decoded and we can call
  //`finishLoadingState`
  if (soundsToDecode === soundsDecoded) {

    // All sounds have been decoded.
    allSoundsDecoded = true;

  var music = g_soundObjects['data/music/1-01 Town of Wishes.ogg'];
   //music.play();
   //music.loop = true;
  }
};

