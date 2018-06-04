// Luca Barbieri @lb © 2017-18 MIT License
// Making visible | San Marino, RSM | 3.2018
// Educational purpose, made for DSII2018 lab @UniRSM
var sound_background;

function preload() {
  sound_background = loadSound('assets/sound_background.mp3');
}

function setup() {
  background();
  createCanvas(windowWidth, windowHeight); // set dimension of html view box
  sound_background.loop(); // song is ready to play during setup() because it was loaded during preload

}

function draw() {
sound_background.play();
}


// implementazioni future
