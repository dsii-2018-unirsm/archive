int x;
int y;
boolean n = true;

void setup () {
  x = width/2;
  y = height/2;
  fullScreen();
  background (255);
  fill(#ff0000);
  frameRate(10);
}

void draw() {
  background (255);
  String text = "the quick brown fox jumps over the lazy dog";
  String splitted[] = split(text, ' ');
  String generator = splitted[int(random(splitted.length))];
  textAlign(CENTER);
  textSize(20);
  text(generator, width/2, height/2);
}

void mousePressed() {
if (n == true) {
  noLoop();
  n = false;
}
else{
  n = true;
  loop();
}
}