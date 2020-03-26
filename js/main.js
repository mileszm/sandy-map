mapboxgl.accessToken = 'pk.eyJ1IjoibWlsZXNtaWxlc21pbGVzIiwiYSI6ImNrNms1NGplYzAwb3gzamtnajRkZXU3NnQifQ.nWRgr-9qGhfLQrZTI4CdFA';

var map1 = new mapboxgl.Map( {
  container: 'map-div-1',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-73.98, 40.73],
  zoom: 11,
});

// add UI zoom controls but disable scroll zooming
map1.scrollZoom.disable();
map1.addControl(new mapboxgl.NavigationControl());

// wait until map is ready
map1.on('load', function() {

// import geoJSON files
  map1.addSource('nycha-all', {
    type: 'geojson',
    data: './data/nycha.geojson',
  });
  map1.addSource('nycha-completed', {
    type: 'geojson',
    data: './data/nycha-comp.geojson',
  });
  map1.addSource('nycha-construction', {
    type: 'geojson',
    data: './data/nycha-cons.geojson',
  });
  map1.addSource('flood-extent', {
    type: 'geojson',
    data: './data/flood.geojson',
  });

// add layers to map
  map1.addLayer({
      id: 'nycha-all-layer',
      type: 'fill',
      source: 'nycha-all',
      paint: {
        'fill-color': '#9d0f24',
        'fill-opacity': 0.3,
      },
  });
  map1.addLayer({
        id: 'nycha-completed-properties',
        type: 'fill',
        source: 'nycha-completed',
        paint: {
          'fill-color': '#4444FF',
          'fill-opacity': 1,
        },
  });
  map1.addLayer({
        id: 'nycha-construction-properties',
        type: 'fill',
        source: 'nycha-construction',
        paint: {
          'fill-color': '#441144',
          'fill-opacity': 1,
        },
  });
  map1.addLayer({
      id: 'flood-extent-layer',
      type: 'fill',
      source: 'flood-extent',
      paint: {
        'fill-color': '#072F5F',
        'fill-opacity': 0.3,
      },
  });

// do this on click of NYCHA under construction properties
  map1.on('click', 'nycha-construction-properties', function(e) {
    var description = e.features[0].properties.name;
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(description)
      .addTo(map1);
  });

// make cursor hand pointer on hover
  map1.on('mouseenter', 'nycha-construction-properties', function() {
    map1.getCanvas().style.cursor = 'pointer';
  });

// make cursor normal on hover
  map1.on('mouseleave', 'nycha-construction-properties', function() {
    map1.getCanvas().style.cursor = '';
  });

});
