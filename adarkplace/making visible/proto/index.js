//------------------------------CREAZIONE MAPPA DA IMG O URL

var bounds = [[-1200,-1200], [1200,1200]];
var imageURL = 'img/antarctica_3-01.jpg';
// var imageURL = 'https://eoimages.gsfc.nasa.gov/images/imagerecords/78000/78592/antarctica_etm_2000001_lrg.jpg';

var map = L.map('mapid', {
  crs: L.CRS.Simple,
  center: [-538, -188],
  zoom:2,
  maxBounds: bounds,
  maxBoundsViscosity: 1,
  minZoom: -0.7,
  maxZoom: 2,
});

var image = L.imageOverlay(imageURL, bounds).addTo(map);

//------------------------------LETTURA SPREADSHEET E VARIABILI

var url = "https://spreadsheets.google.com/feeds/list/1JDSbPNu-fHFAWMpIPzLiX_GG77CxRFYXaYVpT2_Fc-A/od6/public/values?alt=json";
var markers = [
            [-539, -191, "Framheim<br>78.37.60.S<br>163.40.0.O"],
            [-473, -170, "Depot 1<br>80.00.00.S<br>163.40.00.O"]
          ];
//------------------------------SETUP

function setup() {
  loadJSON(url, gotSpreadsheet, 'jsonp');   // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
}

//------------------------------DISEGNO MARKER DA ARRAY

for (var i=0; i<markers.length; i++) {
  var lat = markers[i][0];
  var lon = markers[i][1];
  var popupText = markers[i][2];
  var markerLocation = new L.LatLng(lat, lon);
  var marker = new L.Marker(markerLocation);
  map.addLayer(marker);
  marker.bindPopup(popupText);
}

// //------------------------------LETTURA SPREADSHEET
//
// function gotSpreadsheet(chart) {
//   println(chart.feed.entry.length);
//   for (var i = 0; i < chart.feed.entry.length; i++) {
//     var c = {
//                   "ics": chart.feed.entry[i].gsx$x.$t,
//                   "ipsilon": chart.feed.entry[i].gsx$y.$t,
//                   // "Data": chart.feed.entry[i].gsx$data.$t,
//                   "Nome": chart.feed.entry[i].gsx$nome.$t,
//                   // "Lat": chart.feed.entry[i].gsx$latitudine.$t,
//                   // "Long": chart.feed.entry[i].gsx$longitudine.$t,
//               }
//     markers.push(c);
//   }
// }
// //------------------------------CREAZIONE DEI MARKER DA SPREADSHEET
//
// function Oggetto(_id, _ics, _ipsilon,) {
//   this.id = Number(_id);
//   this.ics = Number(_ics);
//   this.ipsilon = Number(_ipsilon);
//   // this.Data;
//   // this.Nome;
//   // this.Lat;
//   // this.Long;
//
//   this.mostra = function() {
//     // L.marker([CooX, CooY]).bindTooltip(Data + ' - ' + Nome + ' - ' + Lat + ' - ' + Long).addTo(map);
//     var markerLocation = new L.LatLng(this.ics, this.ipsilon);
//     var marker = new L.Marker(markerLocation);
//     map.addLayer(marker);
//   }
// }

// var markers = [
//             [ -539, -191, "Big Ben" ],
//             [ -473, -170, "London Eye" ],
// ];

//------------------------------CREAZIONE DEI MARKER A MANO

// var m17 = L.latLng([ 3, -18 ]);
// L.marker(m17).addTo(map);
//
// var m16 = L.latLng([-75, -37]);
// L.marker(m16).addTo(map);
//
// var m15 = L.latLng([-151, -55]);
// L.marker(m15).addTo(map);
//
// var m14 = L.latLng([-178, -62]);
// L.marker(m14).addTo(map);
//
// var m13 = L.latLng([-203, -67]);
// L.marker(m13).addTo(map);
//
// var m12 = L.latLng([-211, -69 ]);
// L.marker(m12).addTo(map);
//
// var m11 = L.latLng([-213, -77]);
// L.marker(m11).addTo(map);
//
// var m10 = L.latLng([-215, -81]);
// L.marker(m10).addTo(map);
//
// var m9 = L.latLng([-221, -90]);
// L.marker(m9).addTo(map);
//
// var m8 = L.latLng([-230, -93]);
// L.marker(m8).addTo(map);
//
// var m7 = L.latLng([-330, -124 ]);
// L.marker(m7).addTo(map);
//
// var m6 = L.latLng([-361, -135 ]);
// L.marker(m6).addTo(map);
//
// var m5 = L.latLng([-377, -140]);
// L.marker(m5).bindTooltip('07/11/1911 - Depot 3 - 81.59.59.S - 163.39.60.O').addTo(map);
//
// var m4 = L.latLng([-417, -150]);
// L.marker(m4).bindTooltip('01/11/1911 - Steershead Crevasses - 81.10.00.S - 164.00.00.O').addTo(map);
//
// var m3 = L.latLng([-425, -155]);
// L.marker(m3).bindTooltip('31/10/1911 - Depot 2 - 80.59.00.S - 163.40.00.O').addTo(map);
//
// var m2 = L.latLng([-473, -170]);
// L.marker(m2).bindTooltip('24/10/1911 - Depot 1 - 80.00.00.S - 163.40.00.O').addTo(map);
//
// var m1 = L.latLng([-539, -191]);
// L.marker(m1).bindTooltip('Framheim - 78.37.60.S - 163.40.0.O').addTo(map);

//------------------------------PROVA PER CREARE MARKER IN SUCCESSIONE

// var Ln = -180;
// for (var i = 0; i < 16; i++) {
//   L.marker([-530, Ln]).addTo(map);
//   var Ln = Ln - 10;
// }

//------------------------------FUNZIONE DI PROVA PER CRARE MARKER IN SUCCESSIONE AL MOUSE OVER

// L.marker([-538, -230]).addTo(map).on('mouseover', over1);
//
// function over1(e) {
//   L.marker([-538, -250]).addTo(map).on('mouseover', over2);
// }
//
// function over2(e) {
//
// }

//------------------------------POPUP DI DEBUG PER COORDINATE

var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);

//------------------------------LINEA CON MOUSE OVER E POPUP

L.polyline([
  [-539, -191],
  [-473, -170],
  [-425, -155],
],{ weight: 30, color: '#fe57a1', opacity: 0.1,}).bindTooltip('Even polylines can have labels.', { direction: 'auto', sticky: 'true'}).addTo(map);

//------------------------------AREA CON MOUSE OVER E POPUP

L.polygon([
  [[-450, 126], [-388, 161], [-308, 115], [-284, 73], [-204, -18], [-266, -74]],
],{color: '#fe57a1', stroke:0})
  .bindTooltip('MultiPolygon\'s have labels as well :)', { direction: 'auto', sticky: 'true'})
  .addTo(map);

//------------------------------CUSTOM icon

// var customIcon = L.icon({
//           iconUrl: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png',
//           iconSize: [40 , 40], // size of the icon
//           });
// L.marker([-37.7772, 50], {icon: customIcon}).bindTooltip('Look revealing label!').addTo(map);
