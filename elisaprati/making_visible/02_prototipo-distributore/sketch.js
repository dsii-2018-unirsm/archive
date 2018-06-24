
//---------
    var url = "https://spreadsheets.google.com/feeds/list/17FcN8zhX5ULdwoJaraF0jWDK9XE4L8wioLQkYbtVjHY/od6/public/values?alt=json";
     // array per contenere i dati/oggetto
    var dati = [];
//---------
var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1421'; // fill in your serial port name here
var inData; // for incoming serial data



function setup() {
  //----------
      createCanvas(windowWidth, windowHeight);
      // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
      loadJSON(url, gotSpreadsheet);
      //print("ciao");
      colorMode(HSB);
      rectMode(CENTER);
  //---------
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors

  serial.open(portName); // open a serial port
  serial.clear();
}

function draw() {
  // black background, white text:
  background(0);
  fill(255);
  // display the incoming serial data as a string:
  text("incoming value: " + inData, 30, 30);
}

function keyTyped() {
    var outByte = key;
    console.log("Sending " + outByte);
    //serial.write(Number(outByte)); // Send as byte value
    serial.write(outByte); // Send as a string/char/ascii value
}

function serialEvent() {
  // read a byte from the serial port:
  var inByte = serial.read();
  println("inByte: " + inByte);
  inData = inByte;

  if (inByte == 1) {
    var pointer = Math.round(random(1,dati.length-1));
    serial.write(dati[pointer].titolo+"\n");
    serial.write(dati[pointer].tipologia+"\n");
    serial.write(dati[pointer].luogo+"\n");
    serial.write(dati[pointer].data + " ");
    serial.write(dati[pointer].ora+"\n");
    serial.write(dati[pointer].posto+"\n");
  }
}

function serialError(err) {
  println('Something went wrong with the serial port. ' + err);
}





// --------------------------------INDEX.JS---------------------------------------------



function gotSpreadsheet(biglietti) {
  //println(colori.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < biglietti.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var biglietto = {
                  // dati, nomi delle colonne, i parametri
                  "tipologia": biglietti.feed.entry[i].gsx$tipologia.$t,
                  "luogo": biglietti.feed.entry[i].gsx$luogo.$t,
                  "titolo": biglietti.feed.entry[i].gsx$titolo.$t,
                  "data": biglietti.feed.entry[i].gsx$data.$t,
                  "ora": biglietti.feed.entry[i].gsx$ora.$t,
                  "posto": Math.round(random(1,90)) + String.fromCharCode(random(65,90)) //generare a random il numero e la lettera del posto
              }
              //println(colore); // < debug, verifica oggetto 1x1
    dati.push(biglietto); // < inserimento nell'array del dato
  }
} // gotSpreadsheet(colori)

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
