import ddf.minim.*;
import ddf.minim.analysis.*;

Minim minim;
AudioPlayer song;
FFT fft;


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
int sampleRate = 44100;
int lowFreq;
/* a bufferSize of 512 results in the sharpest, most responsive movement - change 
 bufferSize to 1024 or 2048 and note how the movement appears more sluggish */

int bufferSize = 512; // this is actually called timeSize

/* if the number for fft_band_per_oct is higher than 1, it will still result in 9 octaves / bands 
 because the number of bands you get is equal to log2 of bufferSize ie. log2(512) = 9 */

// 512 returns 86hz bandwidth which allows 9 octaves / bands
// 1024 returns 43hz bandwidth which allows 10 octaves / bands
// 2048 returns 21hz bandwidth which allows 11 octaves / bands

int fft_base_freq = 86; // size of the smallest octave to use (in Hz) so we calculate averages based on a miminum octave width of 86 Hz 
int  fft_band_per_oct = 1; // how many bands to split each octave into? in this case split each octave into 1 band

int numZones = 0;

int yPos = 270;


void load() {
  img=loadImage("img1.jpg");
  img.loadPixels();
  ricrea();
}

void setup() {
  size (800, 800, P3D);
  //fullScreen(P3D);
  colorMode(HSB, 100);
  background(0);
  smooth();

  minim = new Minim(this);
  song = minim.loadFile("viking2.mp3", bufferSize);
  song.loop();

  fft = new FFT( bufferSize, sampleRate ); // make a new fft

  // first parameter specifies the size of the smallest octave to use (in Hz), second is how many bands to split each octave into.
  fft.logAverages(fft_base_freq, fft_band_per_oct); // results in 9 bands

  fft.window(FFT.HAMMING);

  numZones = fft.avgSize(); // avgSize() returns the number of averages currently being calculated
  println("numZones: " + numZones); // returns 9 bands

  rectMode(CENTER);
  noStroke();


  gui = new ControlP5(this);

  setupGui();

  load();
  strokeWeight(4);
}

void draw() {

  background(0);

  fft.forward(song.mix); // perform forward FFT on songs mix buffer

  // println("Bandwidth: " + fft.getBandWidth() + " Hz"); // returns 86 Hz

  int highZone = numZones - 1;

  for (int i = 0; i < numZones; i++) { // 9 bands / zones / averages

    float average = fft.getAvg(i); // return the value of the requested average band, ie. returns averages[i]
    // println("Averages " + i + " : " + average);


    float avg = 0;


    if ( i == 0 ) {
      lowFreq = 0;
    } else {
      lowFreq = (int)((sampleRate/2) / (float)Math.pow(2, numZones - i)); // 0, 86, 172, 344, 689, 1378, 2756, 5512, 11025
    }
    int hiFreq = (int)((sampleRate/2) / (float)Math.pow(2, highZone - i)); // 86, 172, 344, 689, 1378, 2756, 5512, 11025, 22050

    // ***** ASK FOR THE INDEX OF lowFreq & hiFreq USING freqToIndex ***** //

    // freqToIndex returns the index of the frequency band that contains the requested frequency

    int lowBound = fft.freqToIndex(lowFreq);
    int hiBound = fft.freqToIndex(hiFreq);

    println("lowFreq: " + lowFreq + " Hz");
    println("hiFreq: " + hiFreq + " Hz");
    println("lowBound: " + lowBound);
    println("hiBound: " + hiBound);

    // ***** NB: THE BELOW PRINTS THE RANGES 0 - 8, THEIR RESPECTIVE FREQENCIES & INDEXES ***** //

    println("range " + i + " = " + "Freq: " + lowFreq + " Hz - " + hiFreq + " Hz " + "indexes: " + lowBound + "-" + hiBound);

    for (int j = lowBound; j <= hiBound; j++) { // j is 0 - 256

      float spectrum = fft.getBand(j); // return the amplitude of the requested frequency band, ie. returns spectrum[offset]
      //println("Spectrum " + j + " : " +  spectrum); // j is 0 - 256

      avg += spectrum; // avg += spectrum[j];
      // println("avg: " + avg);
    }

    avg /= (hiBound - lowBound + 1);
    average = avg; // averages[i] = avg;

    pushMatrix();


    translate(width/2, height/2, mouseY);

    rotateY(rotationY);
    rotateX(rotationX);

    colorMode(RGB);
    for (int a = 0; a<points.size(); a++)
    {
      PVector p = (PVector) points.get(a);
      stroke(-map(p.z, 0, altezzaP, 0, 255)); // < bianco e nero rispetto ad altezza
      //stroke(map(p.x, 0, width, 100, 255), map(p.y, 0, height, 100, 255), map(p.z, 0, altezzaP, 100, 255)); // < rgb rispetto a posizione nello spazio
      //if (i<points.size()/2) {
      //sx viso, verranno visualizzate le frequenze basse
      // stroke(255, 0, 0);
      // delta = lowFreq * 20;
      // point(p.x, p.y, p.z + delta);
      //  } else {
      //dx viso verranno visualizzate le frequenze alte
      //   stroke(0, 0, 255);
      //  point(p.x, p.y, p.z - delta);
      // }
      //*cos(hgt));
      // frequenza bassi
      int area = points.size() / 8;
      if (a < area) {
        stroke(255, 0, 0);
        //println("ognvnbcvbcvbcvbcvbcvbcvbcvbcvbcvbcvbcvbcvbcvbk");
        delta =  fft.getAvg(0);
        point(p.x, p.y, p.z +delta);
        // area verde
      } else if ((a > area) && (a< area*2)) {
        stroke(2, 255, 0);
        delta =  fft.getAvg(1);
        point(p.x, p.y, p.z + (delta));
        //println(delta);
        //area gialla
      } else if (a > area*2 && a < area*3) {
        stroke(235, 123, 0);
        delta =  fft.getAvg(2);
        point(p.x, p.y, p.z + delta);
        //area viola
      } else if (a > area*3 && a < area*4) {
        stroke(255, 0, 133);
        delta =  fft.getAvg(3);
        point(p.x, p.y, p.z + delta);
        //area bianca
      } else if (a > area*4 && a < area*5) {
        stroke(255, 200, 100);
        delta =  fft.getAvg(4);
        point(p.x, p.y, p.z + delta);
        //area blu
      } else if (a > area*5 && a < area*6) {
        stroke(0, 0, 255);
        delta =  fft.getAvg(5);
        point(p.x, p.y, p.z + delta);
        //area marrone
      } else if (a > area*6 && a < area*7) {
        stroke(50, 20, 10);
        delta =  fft.getAvg(6);
        point(p.x, p.y, p.z + delta);
        // area azzurra
      } else if (a > area*7 && a < area*8) {
        stroke(5, 180, 100);
        delta =  fft.getAvg(7);
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





    // ***** THIS IS WHERE WE CAN ISOLATE SPECIFIC FREQUENCIES. THERE ARE 9 FREQUENCY BANDS (0 - 8) ***** //

    // ***** 0 Hz - 86 Hz ***** //
    /*
    if (i == 0) {  // if the frequency band is equal to 0 ie. between 0 Hz and 86 Hz
     
     // println(average); // printing the average to the console is super helpful as you can see the loudness of each frequency band & further isolate parts of a track, for example just the peak
     
     if (average > 40.0) {
     fill(255, 200, 100);
     }
     else {
     fill(255, 100, 100);
     }
     
     if (average > 20.0) {
     rect(75, yPos, average * 3, average * 3);
     }
     else {
     rect(75, yPos, 50, 50);
     }
     }
     
     // ***** 86 Hz - 172 Hz ***** //
     
     if (i == 1) { 
     
     fill(265, 100, 100); 
     if (average > 20) {
     rect(176, yPos, average * 2, average * 2);
     }
     else {
     rect(176, yPos, 50, 50);
     }
     
     if (average > 40 && average < 50) {
     strokeWeight(20); 
     stroke(96, 100, 100);
     } 
     else {
     strokeWeight(5); 
     stroke(0, 0, 100);
     }
     
     if (average > 20 && average < 50) {
     line(0, 0, width, height);
     }
     }
     
     // ***** 172 Hz - 344 Hz ***** //
     
     if (i == 2) { 
     
     fill(272, 100, 100);
     if (average > 20) {
     rect(277, yPos, average * 2, average * 2);
     }
     else {
     rect(277, yPos, 50, 50);
     }
     }
     
     // ***** 344 Hz - 689 Hz ***** //
     
     if (i == 3) { 
     
     fill(281, 100, 100);
     if (average > 8) {
     rect(378, yPos, average * 2, height);
     }
     else {
     rect(378, yPos, 1, height);
     }    
     
     strokeWeight(6);
     
     if (average > 10.0 && average < 20.0) {
     
     for (int y = 60; y < height; y += 150) { 
     for (int x = 40; x < width; x += 150) { 
     stroke(0, 0, 100);
     point (x, y);
     }
     }
     }
     }
     
     noStroke();
     
     // ***** 689 Hz - 1378 Hz ***** //
     
     if (i == 4) { 
     
     if (average > 2) {
     fill(96, 100, 100);
     rect(480, yPos, average * 20, average * 20);
     }
     else {
     fill(287, 100, 100);
     rect(480, yPos, 50, 50);
     }
     }
     
     // ***** 1378 Hz - 2756 Hz ***** //
     
     if (i == 5) { 
     
     fill(295, 100, 100);     
     if (average > 1) {
     rect(581, yPos, average * 40, average * 40);
     }
     else {
     rect(581, yPos, 50, 50);
     }
     }
     
     // ***** 2756 Hz - 5512 Hz ***** //
     
     if (i == 6) { 
     
     if (average > 2) {
     fill(96, 100, 100);
     }
     else {
     fill(312, 100, 100);
     }
     
     if (average > 1) {
     rect(682, yPos, average * 40, average * 40);
     }
     else {
     rect(682, yPos, 50, 50);
     }
     }
     
     // ***** 5512 Hz - 11025 Hz ***** //
     
     if (i == 7) { 
     
     fill(332, 100, 100);
     
     if (average > 1) {
     rect(783, yPos, average * 60, average * 60);
     }
     else {
     rect(783, yPos, 50, 50);
     }
     }
     
     // ***** 11025 Hz - 22050 Hz ***** //
     
     if (i == 8) { 
     
     fill(349, 100, 100);      
     float newSize = map(average, 0.0, 0.3, 50.0, 150.0);     
     rect(885, yPos, newSize, newSize);
     }*/

    // ********** //
  }
}

void stop() {
  song.close(); // always close Minim audio classes when you are finished with them
  minim.stop(); // always stop Minim before exiting
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

/*

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
 */
void clear()
{
  for (int i = points.size() - 1; i >= 0; i--)
  {
    points.remove(i);
  }
  //  println(points.size());
}
void mouseDragged()
{
  rotationY+= map(mouseX-pmouseX, 0, 100, 0, 2);
  rotationX+= map(mouseY-pmouseY, 0, 100, 0, 2);
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
