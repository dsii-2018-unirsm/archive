// -
// Knitting by Claudia Panfili [modulo, pattern]
// 2018 © Claudia Panfili, Daniele @Fupete and the course DSII2018 @UniRSM 
// github.com/fupete — github.com/dsii-2018-unirsm
// Educational purposes, MIT License, 2018, San Marino
// —
//
int j = 0;
int f = 0;
int k = int (random(10));

void setup(){
  fullScreen();
   background(255);
   rectMode(CENTER);
}

void draw(){
  j = (j + k) % width;
  f = (f + k) % height;
  if (j > 3) {
  noFill();
    stroke (255);
    rect (width/2, height/2, j, f);
 } if (j > 2) {
    noFill();
    stroke(255,0,100);
    rect (width/2, height/2, j, f);
 }
}