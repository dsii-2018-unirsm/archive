var x = 0;
var y = 0;
var s = 40;

function setup() {
  createCanvas(900, 500);
  background(255);
}

function draw() {
  fill(255);
  strokeWeight(3)
  //noStroke();
  if (random(1) < 0.4) {
    line(x, y, x, y + s, x + s, y + s);
  } else {
    (x, y, x + s, y + s, x + s, y);
  }
  x += s;
  if (x > width) {
    x = 0;
    y += s;
  }
}
