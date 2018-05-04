//modulo reference
//value1 % value2
//int or float

float n = 10;
int d = 150;
void setup() {
  fullScreen();
  background(0);
  frameRate(10);
}

void draw() {
  n = (n + 50) % width;  
  line (0, n ,  n +d, n);
  stroke(200);
}