int num = 100; //numero rettangoli generati
float[] y = new float[num]; //imposto l'array

void setup() {
  size(500, 500);
  smooth();
  background(0);

  for (int i = 0; i < y.length; i++) {
    y[i] = random(150); //imposto la discesa di ogni rettangolo
  }
}


void draw() {
  stroke(random(0),random(255),random(255));
  noFill();
  
  
  for (int i = 0; i<y.length;i++) {
    rect((2*width/y.length) * i, y[i], 50, 15);
    y[i] = y[i]+1; //trascino i rettangoli verso il basso
    if (y[i] > height) y[i] = 0;
  }
}
