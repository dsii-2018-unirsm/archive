//modulo reference
//value1 % value2
//int or float

float n = 400;
int d = 150;
void setup() {
  fullScreen();
  background(0);
  frameRate(10);
}

void draw() {
  n = (n + 50) % width;  
  line (mouseX , d , n, mouseY);
  stroke(200);
}

void mousePressed(){
background(0);
}