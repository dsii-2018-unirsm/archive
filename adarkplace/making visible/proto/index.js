// var map = L.map('mapid').setView([51.505, -0.09], 13);
var bounds = [[-1200,-1200], [1200,1200]];
// var imageURL = 'https://eoimages.gsfc.nasa.gov/images/imagerecords/78000/78592/antarctica_etm_2000001_lrg.jpg';
var imageURL = 'img/antarctica_3.jpg';



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

// map.fitBounds(bounds);


var sol = L.latLng([ 2, -20 ]);
L.marker(sol).addTo(map);

var sol = L.latLng([-163, -58]);
L.marker(sol).addTo(map);

var sol = L.latLng([-206, -71]);
L.marker(sol).addTo(map);

var sol = L.latLng([-263, -89]);
L.marker(sol).addTo(map);

var sol = L.latLng([-333, -109]);
L.marker(sol).addTo(map);

var sol = L.latLng([-538, -188]);
L.marker(sol).addTo(map);

// var sol = L.latLng([ 200, 200 ]);
// L.marker(sol).addTo(map);
// map.setView( [70, 120], 1);

var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);

var locationI = L.icon({
    iconUrl: 'img/pin.png',
    iconSize: [42, 78],
    iconAnchor: [21, 0],
    popupAnchor: [-3, -76],
    shadowUrl: 'img/pin.png',
    shadowSize: [42, 78],
    shadowAnchor: [21, 0]
});
L.marker([0,50], {icon: locationI}).addTo(map);
