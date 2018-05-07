//randomizzatore di parole che seguono il mio cursore, quando clicco fermo una parola, clicco di nuovo e il tutto riparte. //<>//
boolean toggleLoop = true; //mi permette di gestire valori vero/falso per fermare e riavviare il loop
String [] words;

void setup() {
  fullScreen();
  background(0);
  frameRate(25);
  words = loadStrings("english.txt"); //carico il file testo
  // String interotesto = join(lines, " "); //rende un array un'unica stringa
  // words = split(interotesto, " "); //splitto l'array su un'unica stringa appena creato in un array di parole
}

void draw(){
  background(0);
  titolo();
  String word = words[int(random(words.length))]; //random che sceglie una parola in words da 0 al numero massimo di parole nell'array
  textSize(80); //dimensione del testo
  textAlign(CENTER); //punto dell'allineamento del testo: centro rispetto alle coordinate
  text(word, mouseX, mouseY); //scrivi nel posto delle coordinate del mouse
}

void mousePressed(){
  if (mouseButton == LEFT) { //quando clicco con il mouse
    if (toggleLoop){ //se toggleLoop è vero
      noLoop(); //ferma il loop
      toggleLoop = false; //toggleLoop falso
    }
    else { //altrimenti, cioè quando toggleLoop falso
      loop(); //riattiva il loop 
      toggleLoop = true; //toggleLoop vero
    }
  }
}

void titolo() {
  textSize(16);
  textAlign(LEFT);
  text("JUST CLICK\nrandom words for you", 50, 50);
}
