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

function setup() {

 // pixelDensity(displayDensity());
 createCanvas(windowWidth, windowHeight);

 // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
 loadJSON(url, gotSpreadsheet);
 //print(“ciao”);
 colorMode(RGB);
 rectMode(CENTER);//right
} // setup()

function draw() {

 // piccolo loop per verificare di avere i dati,
 // stampa su schermo cerchi con i colori presenti nel google doc
 background(0,0,21);
 var padding = width/(dati.length+1);
 for (var i = 0; i < dati.length; i++) {
   // fill(dati[i].hue,dati[i].saturation,dati[i].brightness,dati[i].alpha/100);
   // if (dati[i].forma == “quadrato”) {
  //(padding + i * padding, height/1.4, padding*0.3,padding*1.2);
   // } else if (dati[i].forma == “cerchio”) {
  //rect(padding + i * padding, height/4, padding*0.3,padding*0.3);
   // }
   noStroke();
   fill(255,255,255);
   textSize(13);
   textAlign(LEFT, CENTER);
   text(dati[i].timeline, padding + (i * padding),height/1.1);//timeline

   //textAlign(LEFT, CENTER);
   //text(dati[i].titolo1, padding + (i * padding),height/8);//titolo1
   textAlign(LEFT, CENTER);
   text(dati[i].deceduti, padding + (i * padding),height/1.25);//deceduti
   //fill(255,0,255);
   textAlign(LEFT, CENTER);
   text(dati[i].persone, padding + (i * padding),height/1.2);//persone

   textAlign(LEFT, CENTER);
   text(dati[i].titolo2, padding + (i * padding),height/6);//titolo2

   textAlign(LEFT, CENTER);
   text(dati[i].sintomi, padding + (i * padding),height/1.5);//sintomi

   textAlign(LEFT, CENTER);
   text(dati[i].totale, padding + (i * padding),height/1.8);//totale

   textAlign(LEFT, CENTER);
   text(dati[i].titolo, padding + (i * padding),height/8);//titolo

   textAlign(LEFT, CENTER);
   text(dati[i].settimana, padding + (i * padding),height/2.65);//titolo

   textAlign(LEFT, CENTER);
   text(dati[i].influweb, padding + (i * padding),height/2.2);//titolo influweb

   textAlign(LEFT, CENTER);
   text(dati[i].descrizione1, padding + (i * padding),height/5);//descrizione1

   textAlign(LEFT, CENTER);
   text(dati[i].descrizione2, padding + (i * padding),height/4.5);//descrizione2


   rect(265,375,200,30);
// percentuale di persone che non sono state visitate dal medico
   rect(765,450,1200,30);
//8.4 millioni di persone
   rect(715,550,1100,30);
//105.000 persone
   rect(190,650,50,50);
   rect(245,650,50,50);
   rect(300,650,50,50);
   rect(355,650,50,50);
   rect(410,650,50,50);
   rect(465,650,50,50);
   rect(520,650,50,50);
   rect(575,650,50,50);
   rect(630,650,50,50);
   rect(685,650,50,50);
   rect(720,673,5,5);

   //rect(width/2,height/2,30,200);
   //rect(width/2,400,150,30);

   //rect(150,550,3,500);//asse y

   rect(650,800,1000,3);//asse x




 }
} // draw()

function gotSpreadsheet(datiEgx) {
 //println(colori.feed.entry.length); // < debug, numero righe della tabella
 for (var i = 0; i < datiEgx.feed.entry.length; i++) {
   // costruzione dell’oggetto singolo, la riga
   var rigo = {
                 // dati, nomi delle colonne, i parametri

                 "titolo1": datiEgx.feed.entry[i].gsx$titolo1.$t,
                 "persone": datiEgx.feed.entry[i].gsx$persone.$t,
                 "timeline": datiEgx.feed.entry[i].gsx$timeline.$t,
                 "titolo2": datiEgx.feed.entry[i].gsx$titolo2.$t,
                 "deceduti": datiEgx.feed.entry[i].gsx$deceduti.$t,
                 "sintomi": datiEgx.feed.entry[i].gsx$sintomi.$t,
                 "totale": datiEgx.feed.entry[i].gsx$totale.$t,
                 "titolo": datiEgx.feed.entry[i].gsx$titolo.$t,
                 "influweb": datiEgx.feed.entry[i].gsx$influweb.$t,
                 "settimana": datiEgx.feed.entry[i].gsx$settimana.$t,
                 "descrizione1": datiEgx.feed.entry[i].gsx$descrizione1.$t,
                 "descrizione2": datiEgx.feed.entry[i].gsx$descrizione2.$t,

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
