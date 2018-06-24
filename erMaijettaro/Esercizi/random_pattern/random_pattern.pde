// -
// random pattern 0.1 by Riccardo Frignani [random, pattern]
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
background(0);
frameRate(200);
}

int n = 0;


void draw() {



int random = int(random(50));
  if (n<width) {
    
    for (int i = 0; i< height+100; i+=10) {
      int rand = int(random(2));
      if (rand == 0) {
        fill(0);
        rect(n, i, n+random, i+random);
      } else {
        fill(255,0,0);
        rect(n, i, n+random, i+random);
      }
      
    }
  }
  if (n<width) {
    n+=random;
  } else {
    n=0; 
    
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
