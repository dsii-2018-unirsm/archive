// -
/10 print 0.1 by Riccardo Frignani [pattern]
// 2018 © Riccardo Frignani, Daniele @Fupete and the course DSII2018 @UniRSM 
// github.com/fupete — github.com/dsii-2018-unirsm
// Educational purposes, MIT License, 2018, San Marino
// —
//
// Help:
// [key] action
// [key] action
// [mouse] action
//
// —


void setup() {
  fullScreen();
frameRate(45); //bpm
  smooth();
     
}

int n = 0;


void draw() {


  stroke(random(255),random(255),random(255)); //#ED5D5D
  strokeWeight(int(random(7)));

int random = int(random(random(1000)));
  if (n<width) {
  
    for (float i = random(-200,height/2); i< random(height-height/2,height); i+=10) {
      int rand = int(random(2));
      if (rand == 0) {
        line(n, i, n+random, i+random);
      } else {
        line(n+random, i, n, i+random);
      }
    }
  }
  if (n<width) {
    n+=random;
  } else {
    n=0; 
    background(int(random(255)));
 
  }
}








//PImage img;
//void setup() {
//fullScreen();}
//void draw() {
// PImage img;
//for (int i = 0; i < 4000; i = i+30) {
//  img=loadImage("e.jpg");
//  image(img, i, i);}}
