var x = 0;
var y = 0;
var s = 50;

function setup() {
  createCanvas(1190, 800);
  //background(50);
}

function draw() {
  background(random(255),random(255),random(255));
  fill(255);
  noStroke();

  if (random(1) < 0.9) {
    triangle(x, y, x, y + s, x + s, y + s);
  } else {
    rect(x, y, x + s, y + s, x + s, y);
  }
  x += s;
  if (x > width) {
    x = 0;
    y += s;
  }
}
