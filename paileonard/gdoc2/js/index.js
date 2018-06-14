// Daniele Tabellini @fupete © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON | Firenze, IT | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM

// example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell’url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json
//

var url = "https://spreadsheets.google.com/feeds/list/1WI5OR5AyxKyZMgmXbqY5ywmGxEY9NoOBhTtqPJKEzaE/od6/public/values?alt=json";

// array per contenere i dati/oggetto
var dati = [];

 var punti ={
   x:300,y:400,
 };
 var punt ={
   x:300,y:400,
 };
 var pun ={
   x:300,y:400,
 };

var colore = {
  r:255,g:255,b:255
};


function setup() {

 // pixelDensity(displayDensity());
 createCanvas(windowWidth, windowHeight);

 // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
 loadJSON(url, gotSpreadsheet);
 //print(“ciao”);
 colorMode(RGB);
 rectMode(CENTER);//right
 background(0,0,21);

//setTimeout(persone,1000);
} // setup()
background(0,0,21);
var padding = width/(dati.length+1);
for (var i = 0; i < dati.length; i++) {
  // fill(dati[i].hue,dati[i].saturation,dati[i].brightness,dati[i].alpha/100);
  // if (dati[i].forma == “quadrato”) {
 //(padding + i * padding, height/1.4, padding*0.3,padding*1.2);
  // } else if (dati[i].forma == “cerchio”) {
 //rect(padding + i * padding, height/4, padding*0.3,padding*0.3);
  // }
  //countDown(100,0);
 frameRate(100);

  punti.x = random(100,200);
  punti.y = random(880,400);
  fill(colore.r,colore.g, colore.b);
  rect(punti.x,punti.y, 5, 5);

  // punt.x = random(250,350);
  // punt.y = random(880,400);
  // fill(colore.r,colore.g, colore.b);
  // rect(punt.x,punt.y, 5, 5);
  //
  // pun.x = random(400,500);
  // pun.y = random(880,400);
  // fill(colore.r,colore.g, colore.b);
  // rect(pun.x,pun.y, 5, 5);

  // noStroke();
  // fill(255,255,255);
 // textSize(18);
  // textAlign(LEFT, CENTER);
  // text(dati[i].timeline, padding + (i * padding),height/1.1);//timeline

  //textAlign(LEFT, CENTER);
  //text(dati[i].titolo1, padding + (i * padding),height/8);//titolo1
  // textAlign(LEFT, CENTER);

  //fill(255,0,255);
}

function draw() {
 // piccolo loop per verificare di avere i dati,
 // stampa su schermo cerchi con i colori presenti nel google doc
 //background(0,0,21);
 var padding = width/(dati.length+1);
 for (var i = 0; i < dati.length; i++) {
   //fill(dati[i].hue,dati[i].saturation,dati[i].brightness,dati[i].alpha/100);
   // if (dati[i].forma == “quadrato”) {
  //(padding + i * padding, height/1.4, padding*0.3,padding*1.2);
   // } else if (dati[i].forma == “cerchio”) {
  //rect(padding + i * padding, height/4, padding*0.3,padding*0.3);
   // }

  frameRate(25);

   punti.x = random(100,1200);

   punti.y = random(680,400);

   fill(colore.r,colore.g, colore.b);
   rect(punti.x,punti.y, 5, 5);

   //  punt.x = random(250,350);
   //  punt.y = random(880,400);
   //  fill(colore.r,colore.g, colore.b);
   //  rect(punt.x,punt.y, 5, 5);
   //
   // pun.x = random(400,500);
   // pun.y = random(880,400);
   // fill(colore.r,colore.g, colore.b);
   // rect(pun.x,pun.y, 5, 5);

   // noStroke();
   // fill(255,255,255);
   textSize(18);

   // textAlign(LEFT, CENTER);
   // text(dati[i].timeline, padding + (i * padding),height/1.1);//timeline

   //textAlign(LEFT, CENTER);
   //text(dati[i].titolo1, padding + (i * padding),height/8);//titolo1
   //textAlign(LEFT, CENTER);
   text(dati[i].influweb, width/2,height/2, 1000,300);//totale
   //fill(255,0,255);
 }
} // draw()




function gotSpreadsheet(datiEgx) {
 //println(colori.feed.entry.length); // < debug, numero righe della tabella
 for (var i = 0; i < datiEgx.feed.entry.length; i++) {
   // costruzione dell’oggetto singolo, la riga
   var rigo = {
                 // dati, nomi delle colonne, i parametri

                 // "totale": datiEgx.feed.entry[i].gsx$totale.$t,
                 "influweb": datiEgx.feed.entry[i].gsx$influweb.$t,
                 // “hue”: datiEgx.feed.entry[i].gsx$hue.$t,
                 // “saturation”: datiEgx.feed.entry[i].gsx$saturation.$t,
                 // “brightness”: datiEgx.feed.entry[i].gsx$brightness.$t,
                 // “alpha”: datiEgx.feed.entry[i].gsx$alpha.$t,
                 // “forma”: datiEgx.feed.entry[i].gsx$forma.$t
             }
             //println(colore); // < debug, verifica oggetto 1x1
   dati.push(rigo); // < inserimento nell’array del dato
 }
} // gotSpreadsheet(colori)

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
