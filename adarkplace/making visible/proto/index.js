// var map = L.map('mapid').setView([51.505, -0.09], 13);
var bounds = [[-1200,-1200], [1200,1200]];
// var imageURL = 'https://eoimages.gsfc.nasa.gov/images/imagerecords/78000/78592/antarctica_etm_2000001_lrg.jpg';
var imageURL = 'img/antarctica_3-01.jpg';



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







var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);




L.polyline([
  [-333, -109],
  [-538, -188],
],{ weight: 30, color: '#fe57a1' }).bindTooltip('Even polylines can have labels.', { direction: 'auto', sticky: 'true'}).addTo(map);


L.polygon([
  [[-450, 126], [-388, 161], [-308, 115], [-284, 73], [-204, -18], [-266, -74]],
],{color: '#fe57a1', stroke:0})
  .bindTooltip('MultiPolygon\'s have labels as well :)', { direction: 'auto', sticky: 'true'})
  .addTo(map);



  var firefoxIcon = L.icon({
          iconUrl: 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png',
          iconSize: [40 , 40], // size of the icon
          });


L.marker([-37.7772, 50], {icon: firefoxIcon}).bindTooltip('Look revealing label!').addTo(map);






// L.control.coordinates({
// 			position:"topright",
// 			useDMS:true,
// 			labelTemplateLat:"N {y}",
// 			labelTemplateLng:"E {x}",
// 			useLatLngOrder:true
// }).addTo(map);
// L.control.coordinates().addTo(map);
// //add configured controls
// L.control.coordinates({
//   position:"bottomleft",
//   decimals:2,
//   decimalSeperator:",",
//   labelTemplateLat:"Latitude: {y}",
//   labelTemplateLng:"Longitude: {x}"
// }).addTo(map);
