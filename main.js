mapboxgl.accessToken = 'pk.eyJ1IjoibWlsZXNtaWxlc21pbGVzIiwiYSI6ImNrNms1NGplYzAwb3gzamtnajRkZXU3NnQifQ.nWRgr-9qGhfLQrZTI4CdFA';

var map1 = new mapboxgl.Map( {
  container: 'map-div-1',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-73.98, 40.73],
  zoom: 11
});

map1.addControl(new mapboxgl.NavigationControl());

map1.scrollZoom.disable();
