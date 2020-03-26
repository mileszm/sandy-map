mapboxgl.accessToken = 'pk.eyJ1IjoibWlsZXNtaWxlc21pbGVzIiwiYSI6ImNrNms1NGplYzAwb3gzamtnajRkZXU3NnQifQ.nWRgr-9qGhfLQrZTI4CdFA';

var map1 = new mapboxgl.Map( {
  container: 'map-div-1',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-73.98, 40.73],
  zoom: 11,
});

// map1.addControl(new mapboxgl.NavigationControl());

map1.on('load', function() {

  map1.addSource('nycha', {
    type: 'geojson',
    data: './data/nycha.geojson',
  });

  map1.addSource('nycha-comp', {
    type: 'geojson',
    data: './data/nycha-comp.geojson',
  });

  map1.addSource('nycha-cons', {
    type: 'geojson',
    data: './data/nycha-cons.geojson',
  });

  map1.addSource('flood', {
    type: 'geojson',
    data: './data/flood.geojson',
  });

  map1.addLayer({
      id: 'nycha-area',
      type: 'fill',
      source: 'nycha',
      paint: {
        'fill-color': '#9d0f24',
        'fill-opacity': 0.5,
      },
  });

  map1.addLayer({
        id: 'nycha-cons',
        type: 'fill',
        source: 'nycha-cons',
        paint: {
          'fill-color': '#444444',
          'fill-opacity': 1,
        },
  });

  map1.addLayer({
      id: 'flood-area',
      type: 'fill',
      source: 'flood',
      paint: {
        'fill-color': '#072F5F',
        'fill-opacity': 0.5,
      },
  });

});

var map2 = new mapboxgl.Map( {
  container: 'map-div-2',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-73.98, 40.73],
  zoom: 11,
  interactive: false,
});

map2.scrollZoom.disable();

map2.on('load', function() {

  map2.addSource('flood', {
    type: 'geojson',
    data: './data/flood.geojson',
  });

  map2.addSource('subway', {
    type: 'geojson',
    data: './data/subway.geojson',
  });

  map2.addLayer({
      id: 'flood-area',
      type: 'fill',
      source: 'flood',
      paint: {
        'fill-color': '#072F5F',
        'fill-opacity': 0.5,
      },
  });

  map2.addLayer({
      id: 'subway-lines',
      type: 'line',
      source: 'subway',
  });

})
