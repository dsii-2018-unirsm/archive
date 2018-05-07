void setup(){
  fullScreen(); 
  background(0);
  noSmooth();
  noStroke();
}

void draw(){
  int w = width / 100; 
  int h = height / 100;
  for (int col = 0; col < width; col++) {
    for (int row = 0; row < height; row++) {
        if (frameCount%2==0 && row%2==0){
          fill(255); 
        } else {
          fill(255, 200, 200);
        }
      rect(w * col, h * row,
           w * 4/5, h*4/5);
    }
  }
}
