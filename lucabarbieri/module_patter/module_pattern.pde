// -
// Smoke circle 0.1 by lucabarbieri [modulus, smoke effect]
// 2018 © lucabarbieri, Daniele @Fupete and the course DSII2018 @UniRSM 
// github.com/fupete — github.com/dsii-2018-unirsm
// Educational purposes, MIT License, 2018, San Marino
// —
//
// Help:
// [mouse] The circle search your mouse pointer
//
// -

float i = 0;
float j = 0;
float k = 0;
float c = 0;
float d = 0; 

void setup() {
  background(0);
  fullScreen();;
  smooth();
  strokeWeight(25);
}

void draw() {
  
  fill(255);
  text("Smoke circle - %", 100 ,height-100);
  
  i += .03;
  j += .02; 

  //changes color increment
  k += 1; 
  if (k > 300) {
    k = 0;
  }
  stroke(k+3, 0, 100, 30); //changes color range


  c = map(cos(i), -2, 2, 0, 400);
  d = map(sin(j), -1, 1, 0, 400);
  
  noFill();
  
  if (k % 20 == 0){
  background(i);
  }
  
  ellipse(mouseX, mouseY, c, d);
}
