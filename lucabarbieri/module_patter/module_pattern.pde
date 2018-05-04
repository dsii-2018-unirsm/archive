// Luca Barbieri @lb © 2017-18 MIT License
// % pattern | San Marino, RSM | 3.2018
// Educational purpose, made for DSII2018 lab @UniRSM
// Fork from Pearlyn Lii

float i = 0;
float j = 0;
float k = 0;

void setup() {
  background(200);
  fullScreen();;
  smooth();
  strokeWeight(2);
  
  fill(0);
  text("% PATTERN", 100 ,height-100);
}

void draw() {
  //i = i + .01; //changes path 
  //j = j + .05; //changes path
  i = (i + .01) % width;
  j = (j + .05) % width;

  //changes color increment
  k = k + 1; 
  if (k > 300) {
    k = 0;
  }
  stroke(k+3, 0, 100, 30); //changes color range

  float a = map(sin(i), -2, 2, 0, width+800);
  float b = map(sin(i), -1, 1, 0, height);
  float c = map(cos(j), -2, 2, 0, width-800);
  float d = map(sin(j), -1, 1, 0, height);
  
  noFill();
  ellipse(a, b, c, d);
}
