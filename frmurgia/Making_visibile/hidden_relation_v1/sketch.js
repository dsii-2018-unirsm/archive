p5.disableFriendlyErrors = true;



 let val ;
let canvas;
let myMap;
var date = [];
var formattati = [];
var time = [];
var giorni = [];
var delta = 0;
let tripsCoordinates;
let allCoordinates = [];
var coordinate = 0;

var origin;
var originVector;
var destination;
var destinationVector;

var taxiPosition;

var visitedRoutes = [];

const key = 'pk.eyJ1Ijoic2d0bXVyZ2lhIiwiYSI6ImNpeTFicWJpMDAwOGIzM3Bpanh3OGZvYTIifQ.hgbn3Hf9_BD-hO7p2TOH7A'

// Options for map
const options = {

  lng: 12.447716,
  lat: 43.932500499999996,
  zoom: 16,
studio: true,

  style: 'mapbox://styles/sgtmurgia/cjhup6ps60ziv2sk251dck4nt',
  interactive: false

};


const mappa = new Mappa('Mapbox', key);

function preload() {
  posizioni = loadJSON('js/posizioni.json');
  console.log("preload OK!")


}

var ordinamento=[];

function setup() {

  trip();


//  ordinamento = giorni.sort();
var  canvas = createCanvas(500, 500);

//Static map non funziona
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  tripsCoordinates = (giorni);

  tripsCoordinates.forEach(function(trip) {
    trip.forEach(function(coordinate) {
      allCoordinates = giorni
    })
  });



}




var a=-1;
function trip() {
  for (var i = 0; i < posizioni.locations.length; i++) {
    date[i] = new Date(parseInt(posizioni.locations[i].timestampMs));
    time[i] = moment(date[i]).format("DD-MM-YYYY");

    c = {
      "giorno": moment(date[i]).format("DD-MM-YYYY"),
      "longitude": posizioni.locations[i].longitudeE7 * 0.0000001,
      "latitude": posizioni.locations[i].latitudeE7 * 0.0000001,
      "anni": (moment(date[i]).format("YYYY")),
      "accuracy": posizioni.locations[i].accuracy
    };
    //  formattati.push(new Oggetto(c.giorno, c.longitude, c.latitude, c.anni))
    if (((moment(date[i]).format("YYYY"))) == 2018 &&((moment(date[i]).format("MM")))==04 ) {

    // if ((posizioni.locations[i].accuracy > 150) && ((moment(date[i]).format("MM"))) == 05) {

      a++
      giorni[a] = [
        (posizioni.locations[i].longitudeE7 * 0.0000001),
        (posizioni.locations[i].latitudeE7 * 0.0000001)

      ]
    }


  }
  console.log("giorni OK")
}
// fine funzione trip


function Mese(_giorno, _longitude, _latitude) {
  this.giorno = (_giorno);
  this.longitude = Number(_longitude);
  this.latitude = Number(_latitude);
}


function draw() {
  //
  // //clear(); //clear can be commented since drawRoute() will handle clearing the canvas
  // if (delta < 1) {
  //   delta += 0.2;
  // } else {
  //   visitedRoutes.push(allCoordinates[coordinate]) // Once it has arrived at its destination, add the origin as a visited location
  //   delta = 0;
  //   coordinate++;
  // // drawRoute(); // Call the drawRoute to update the route
  // }
  //
  // origin = myMap.latLngToPixel(allCoordinates[coordinate][1], allCoordinates[coordinate][0]);
  // originVector = createVector(origin.x, origin.y);
  // destination = myMap.latLngToPixel(allCoordinates[coordinate + 1][1], allCoordinates[coordinate + 1][0]);
  // destinationVector = createVector(destination.x, destination.y);
  //
  // taxiPosition = originVector.lerp(destinationVector, delta);
  //
  // noStroke(); // remove the stroke from the route
  // fill(255, 255, 0);
  // ellipse(taxiPosition.x, taxiPosition.y, 7, 7);
  //
  //   //myMap.onChange(drawPoints);
  //

}


// //This functions draws a line with n-vertices where n = visited routes;
// function drawRoute(){
//   clear();
//   stroke(25); // stroke color and width to see the route line
//   strokeWeight(1);
//   strokeCap(ROUND); // < FU così non saltellano gli angoli...
//   if(visitedRoutes.length > 0){
//     noFill();
//     beginShape();
//     visitedRoutes.forEach(function (e) {
//         var pos = myMap.latLngToPixel(e[1], e[0]);
//         vertex(pos.x, pos.y);
//     })
//     endShape()
//   }
// }





  function drawPoints() {
  //clear()
  stroke(183,48,45);
    fill(255,255,255,10);
    for (var i = 0; i < allCoordinates.length; i++) {
      var pos = myMap.latLngToPixel(allCoordinates[i][1], allCoordinates[i][0])
      ellipse(pos.x, pos.y, 5, 5);
    }
  }
