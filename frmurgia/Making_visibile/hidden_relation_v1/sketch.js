let canvas;
let myMap;
var lati = [];
var long = [];
var date = [];
var formattati = [];
var time = [];

var giornate = [];

function preload() {

  posizioni = loadJSON('js/posizioni.json');

}


const options = {
  lat: 40.73447,
  lng: -74.00232,
  zoom: 13,
  style: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
}
const mappa = new Mappa('Leaflet');

var c = [];

function trip() {
  for (var i = 0; i < posizioni.locations.length; i++) {
    //posizioni.locations.length
    date[i] = new Date(parseInt(posizioni.locations[i].timestampMs));
    time[i] = moment(date[i]).format("DD-MM-YYYY");



    c = {
      "giorno": time[i],
      "longitude": posizioni.locations[i].longitudeE7 * 0.0000001,
      "latitude": posizioni.locations[i].latitudeE7 * 0.0000001
    };

    formattati.push(new Oggetto(c.giorno, c.longitude, c.latitude));
  }
}

function Oggetto(_giorno, _longitude, _latitude) {
  this.giorno = (_giorno);
  this.longitude = Number(_longitude);
  this.latitude = Number(_latitude);
}
var days = [];

function setup() {
  trip();









  function oggetto(_giorno, _lat, _long) {
    this.giorno = _giorno;
    this.lat = _lat;
    this.long = _long;
  }
  for (i = 0; i < 1000; i++) {
    lati[i] = posizioni.locations[i].latitudeE7 * 0.0000001
    long[i] = posizioni.locations[i].longitudeE7 * 0.0000001
  }


  canvas = createCanvas(800, 700);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);


}

function draw() {

}
