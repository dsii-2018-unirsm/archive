
//------------------------------CREAZIONE MAPPA DA IMG O URL

var bounds = [[-1200,-1200], [1200,1200]];
var imageURL = 'img/antarctica_3-02.jpg';
// var imageURL = 'https://eoimages.gsfc.nasa.gov/images/imagerecords/78000/78592/antarctica_etm_2000001_lrg.jpg';

var map = L.map('mapid', {
  crs: L.CRS.Simple,
  center: [-550, -188],
  zoom:2,
  maxBounds: bounds,
  maxBoundsViscosity: 1,
  minZoom: -0.7,
  maxZoom: 2,
});

var image = L.imageOverlay(imageURL, bounds).addTo(map);

//------------------------------MARKER CUSTOM

var campicon = L.icon({
          iconUrl: 'img/marker_camp.png',
          iconSize: [40 , 40],
          tooltipAnchor: [30,0],
});
var boaticon = L.icon({
          iconUrl: 'img/marker_boat.png',
          iconSize: [44 , 44],
          tooltipAnchor: [30,0],
});

//------------------------------WELCOME POPUP

var popup = L.popup({ closeButton: false, autoClose: true, closeOnClick:true})
.setLatLng([-564, -270])
.setContent('<p><b>Welcome to Journey</b></p> Discover the map<br>and try to find all the checkpoint<br>like a true pioneer');

var popupWelcome = new L.FeatureGroup();
popupWelcome.addLayer(popup);

map.addLayer(popup);

map.on('zoomend', function() {
    if (map.getZoom() <2){
            map.removeLayer(popup);
    }
});

//------------------------------LETTURA SPREADSHEET E VARIABILI

var url = "https://spreadsheets.google.com/feeds/list/1JDSbPNu-fHFAWMpIPzLiX_GG77CxRFYXaYVpT2_Fc-A/od6/public/values?alt=json";
// var markers = [];
var markers2 = [
            [-534, -190, "Framheim<br>78.37.60.S<br>163.40.0.O"],
            [-473, -170, "Depot 1<br>80.00.00.S<br>163.40.00.O"],
            [-425, -155, "Depot 2<br>80.59.00.S<br>163.40.00.O"],
            [-417, -150, "Steershead Crevasses<br>81.10.00.S<br>164.00.00.O"],
            [-377, -140, "Depot 3"],
            [-361, -135, "Discovery"],
            [-330, -124, "83S"],
            [-230, -93, "Betty's Knoll"],
            [-221, -90, "Axel Heiberg Glacier"],
            [-215, -81,	"Axel Heiberg Glacier"],
            [-213, -77,	"Axel Heiberg Glacier ice falls"],
            [-211, -69,	"Butcher's Shop"],
            [-203, -67,	"Plateau journey begins"],
            [-178, -62, "Devil's Glacier"],
            [-151,	-55, "Devil's dance floor<br>AKA Ballroom"],
            [-75,	-37, "Passed Shackleton's Farthest South"],
            [3,	-18, "The Pole"]
          ];

//------------------------------PRELOAD & SETUP

var indice = 1;

// function preload() {
//   loadJSON(url, gotSpreadsheet);
// }
//

// function setup() {
// }


// //------------------------------LETTURA SPREADSHEET

// function gotSpreadsheet(journey) {
//   for (var i = 0; i < journey.feed.entry.length; i++) {
//     var ma = {
//                   "XXX": journey.feed.entry[i].gsx$x.$t,
//                   "YYY": journey.feed.entry[i].gsx$y.$t,
//                   // "Data": journey.feed.entry[i].gsx$data.$t
//                   "Nome": journey.feed.entry[i].gsx$nome.$t
//                   // "latitude": journey.feed.entry[i].gsx$latitude.$t
//                   // "longitude": journey.feed.entry[i].gsx$longitude.$t
//               }
//     ma["XXX"] = int(ma["XXX"]);
//     ma["YYY"] = int(ma["YYY"]);
//     markers.push(ma);
//   }
// }

//------------------------------DISEGNO MARKER DA ARRAY SPREADSHEET

// for (var i=0; i<markers.length; i++) {
//       // var lat = markers[i]["XXX"];
//       // var lon = markers[i]["YYY"];
//       // var popupText = markers[i]["Nome"];
//       var markerLocation = new L.LatLng(markers[i]["XXX"], markers[i]["YYY"]);
//       var marker = new L.Marker(markers[i]["Nome"]);
//       map.addLayer(marker);
//       marker.bindPopup(popupText);
// }

//------------------------------DISEGNO MARKER DA ARRAY MANUALE

// for (var i=0; i<markers2.length; i++) {
//    var lon = markers2[i][1];
//    var lat = markers2[i][0];
//    var popupText = markers2[i][2];
//    var markerLocation = new L.LatLng(lat, lon);
//    var marker = new L.Marker(markerLocation);
//    map.addLayer(marker);
//    marker.bindPopup(popupText);
//
// }

// for (var i=0; i<markers2.length; i++) {
//    var lon = markers2[i][1];
//    var lat = markers2[i][0];
//    var popupText = markers2[i][2];
//    L.marker([lat, lon], {icon: campicon}).bindPopup(popupText).addTo(map);
// }

L.marker([markers2[0][0], markers2[0][1]], {icon: boaticon}).bindTooltip(markers2[0][2]).addTo(map).on('click', nextmarker);

function nextmarker() {
  var lon = markers2[indice][1];
  var lat = markers2[indice][0];
  var popupText = markers2[indice][2];
  L.marker([lat, lon], {icon: campicon,}).bindTooltip(popupText, {direction: 'right'}).addTo(map).on('click', nextmarker);
  indice = indice + 1;
}



//------------------------------CREAZIONE IMMAGINI OVERLAY

// var imageUrl = 'img/marker_camp.png',
// imageBounds = [[-500, -160], [-490, -150]];
// L.imageOverlay(imageUrl, imageBounds).addTo(map);

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

//------------------------------AGGIUNTA DI UN ELEMENTO GRAFICO STATICO SU PAGINA

// L.Control.Watermark = L.Control.extend({
//     onAdd: function(map) {
//         var img = L.DomUtil.create('img');
//         img.src = 'img/marker_camp.png';
//         img.style.width = '50px';
//         return img;
//     },
//
//     onRemove: function(map) {
//         // Nothing to do here
//     }
// });
//
// L.control.watermark = function(opts) {
//     return new L.Control.Watermark(opts);
// }
//
// L.control.watermark({ position: 'topright' }).addTo(map);

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

// var popup = L.popup();
// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent(e.latlng.toString())
//         .openOn(map);
//         console.log(e.latlng);
// }
// map.on('click', onMapClick);

//------------------------------LINEA CON MOUSE OVER E POPUP

// L.polyline([
//   [-539, -191],
//   [-473, -170],
//   [-425, -155],
// ],{ weight: 30, color: '#fe57a1', opacity: 0.1,}).bindTooltip('Even polylines can have labels.', { direction: 'auto', sticky: 'true'}).addTo(map);

//------------------------------AREA CON MOUSE OVER E POPUP

// L.polygon([
//   [[-450, 126], [-388, 161], [-308, 115], [-284, 73], [-204, -18], [-266, -74]],
// ],{color: '#fe57a1', stroke:0})
//   .bindTooltip('MultiPolygon\'s have labels as well :)', { direction: 'auto', sticky: 'true'})
//   .addTo(map);
