//GIOCO BOGGLE
//click per lanciare i dadi

int x;
int y;
boolean n = true;
String [] lettere = {"A","B","C","D","E","F","G","H","I","L","E","M","N","O","I","P","R","S","A","T","U","V","Z","A","W","X","K","J","Y","Q"};


void setup () {
  x = width/2;
  y = height/2;
  fullScreen();
  background (255);
  fill(#ff0000);
}

void draw() {
  background (255);
  
  textAlign(CENTER);
  textSize(20);
  for (int i = 0; i < 10; i ++){
    for (int j = 0; j < 10; j ++){
     String generatore = lettere[int(random(20))];
     text(generatore,(width/2 -30*i) + 100 , (height/2 -30*j) +100 );
    }
   }
   String s = "Click to roll the dice. Click to stop them. Find words as possible. The letters must be adjoining in a chain (horizontally, vertically, or diagonally). Words must contain at least three letters.";
   String t = "3 Letters: 1 point 4 Letters: 1 point 5 Letters: 2 points 6 Letters: 3 points 7 Letters: 4 points 8 or More Letters: 11 points";
   textSize(11);
   textAlign(LEFT);
   //coordinate viewport, grandezza box di testo
   text(s, 1100, 590, 160, 200);
   text(t, 1100, 450, 100, 200);
   text("BOGGLE",502, 160);
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