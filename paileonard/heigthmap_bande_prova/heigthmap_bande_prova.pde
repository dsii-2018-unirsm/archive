//©2015-2018 Mit Licence UNIRSM
// Daniele Tabellini @fupete

import processing.sound.*;

// Declare the processing sound variables 
SoundFile sample;
Amplitude rms;

import controlP5.*;

ControlP5 gui;

PImage img;
ArrayList points = new ArrayList();

float rotationY = 0;
float rotationX = 0;
float hgt=0;
float altezzaP = 70;
int risoluzione =8;

float delta;

void setup()
{
  size (800, 800, P3D);
  //fullScreen(P3D);
  colorMode(HSB, 100);
  background(0);
  smooth();

  //Load and play a soundfile and loop it
  sample = new SoundFile(this, "viking2.mp3");
  sample.loop();

  // Create and patch the rms tracker
  rms = new Amplitude(this);
  rms.input(sample);
// reimpostare rms con FFT
  gui = new ControlP5(this);

  setupGui();

  load();
  strokeWeight(4);
}

void load() {
  img=loadImage("img1.jpg");
  img.loadPixels();
  ricrea();
}

void draw()
{
  background(0);

  // ricrea(); // < per rigenerarla ogni frame... 

  hint(ENABLE_DEPTH_TEST);
  pushMatrix();
  translate(width/2, height/2, mouseY);

  rotateY(rotationY);
  rotateX(rotationX);

  colorMode(RGB);
  for (int i = 0; i<points.size(); i++)
  {
    PVector p = (PVector) points.get(i);
    stroke(-map(p.z, 0, altezzaP, 0, 255)); // < bianco e nero rispetto ad altezza
    //stroke(map(p.x, 0, width, 100, 255), map(p.y, 0, height, 100, 255), map(p.z, 0, altezzaP, 100, 255)); // < rgb rispetto a posizione nello spazio
    //if (i<points.size()/2) {
    //sx viso, verranno visualizzate le frequenze basse
    // stroke(255, 0, 0);
    // delta = rms.analyze() * 20;
    // point(p.x, p.y, p.z + delta);
    //  } else {
    //dx viso verranno visualizzate le frequenze alte
    //   stroke(0, 0, 255);
    //  point(p.x, p.y, p.z - delta);
    // }
    //*cos(hgt));

    int area = points.size() / 8;
    if (i < area) {
      stroke(255, 0, 0);
      delta = rms.analyze() * 20;
      point(p.x, p.y, p.z + delta);
    } else if (i > area && i< area*2) {
      stroke(2, 255, 0);
      delta = rms.analyze() * 20;
      point(p.x, p.y, p.z + delta);
    } else if (i > area*2 && i < area*3) {
      stroke(235, 123, 0);
      delta = rms.analyze() * 20;
      point(p.x, p.y, p.z + delta);
    } else if (i > area*3 && i < area*4) {
      stroke(255, 0,133);
      delta = rms.analyze() * 20;
      point(p.x, p.y, p.z + delta);
    } else if (i > area*4 && i < area*5) {
      stroke(255, 0, 100);
      delta = rms.analyze() * 20;
      point(p.x, p.y, p.z + delta);
    } else if (i > area*5 && i < area*6) {
      stroke(255, 0, 50);
      delta = rms.analyze() * 20;
      point(p.x, p.y, p.z + delta);
    } else if (i > area*6 && i < area*7) {
      stroke(255, 89, 0);
      delta = rms.analyze() * 20;
      point(p.x, p.y, p.z + delta);
    } else if (i > area*7 && i < area*8) {
      stroke(255, 0, 189);
      delta = rms.analyze() * 20;
      point(p.x, p.y, p.z + delta);
    }
  }


  //for (int i=0; i<width; i++) {
  // for (int j=0; j<height; j++) {
  // if (i*width+j < points.size()) {
  // PVector p = (PVector) points.get(i*width+j);
  // stroke(map(p.x, 0, width, 100, 255), map(p.y, 0, height, 100, 255), map(p.z, 0, altezzaP, 100, 255));
  // point(p.x, p.y, p.z);
  // }
  // }
  // }


  colorMode(HSB, 100);

  //hgt+=.01;
  //if (hgt>PI/2) hgt=-PI/2;

  popMatrix();
  hint(DISABLE_DEPTH_TEST);
  image(img, width-100, height-100, 100, 100);
}

void mouseDragged()
{
  rotationY+= map(mouseX-pmouseX, 0, 100, 0, 2);
  rotationX+= map(mouseY-pmouseY, 0, 100, 0, 2);
}

public void ricrea() {
  clear();
  img.loadPixels();
  println(img.width+" "+img.height);

  //cercare di cambiare questi parametri, adesso c'é la visione in 2D dei punti/pixel
  for (int x = 0; x<img.width; x+=risoluzione)
  {
    for (int y = 0; y<img.height; y+=risoluzione)
    {
      float xx=x-img.width/2;
      float yy=y-img.height/2;
      float zz = -map(brightness(img.get(x, y)), 0, 255, 0, altezzaP);
      points.add(new PVector(xx, yy, zz)); // cambiare il valore della z 
      //<---fino qui
    }
  }

  //strokeWeight(risoluzione);
}

void setupGui() {
  Group g1 = gui.addGroup("gui_gr")
    .setPosition(0, 10)
    ;

  gui.addSlider("altezzaP", -100.0, 1000.0).setGroup(g1).linebreak();
  gui.addSlider("risoluzione", 4, 40).setGroup(g1).linebreak();
  gui.addButton("ricrea")
    .setSize(40, 40)
    .setGroup(g1)
    ;
}

void clear()
{
  for (int i = points.size() - 1; i >= 0; i--)
  {
    points.remove(i);
  }
  println(points.size());
}
