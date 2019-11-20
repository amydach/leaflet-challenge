    // Create the tile layer that will be the background of our map
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken: API_KEY
    });

        // Create a baseMaps object to hold the lightmap layer
    var baseMaps = 
        L.map("map",{
        center: [40.73, -74.0059],
        zoom: 2,
        });

lightmap.addTo(baseMaps)

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"

        //Starter Code for loop to get data into the markers
d3.json(url, function(response) {
  // Create a new marker cluster group
  var markers = L.markerClusterGroup();
  // Loop through data
  for (var i = 0; i < response.length; i++) {
    // Set the data location property to a variable
    var location = response[i].location;
    // Check for location property
    if (location) {
      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([features.coordinates[1], features.coordinates[0]])
        .bindPopup(response[i].descriptor));
    }
  }

    // Add our marker cluster layer to the map
    myMap.addLayer(markers);
});


// function createMap(quakeStations) {

//     // Create the tile layer that will be the background of our map
//     var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
//         attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
//         maxZoom: 18,
//         id: "mapbox.light",
//         accessToken: API_KEY
//     });

//     // Create a baseMaps object to hold the lightmap layer
//     var baseMaps = {
//         "Light Map": lightmap
//     };

//     // Create an overlayMaps object to hold the quakeStations layer
//     var overlayMaps = {
//         "Earthquake Stations": quakeStations
//     };

//     // Create the map object with options
//     var map = L.map("map-id", {
//         center: [40.73, -74.0059],
//         zoom: 12,
//         layers: [lightmap, quakeStations]
//     });

//     // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
//     L.control.layers(baseMaps, overlayMaps, {
//         collapsed: false
//     }).addTo(map);
// }

// function createMarkers(response) {

//     // Pull the "features" property off of response.data
//     var features = response.data.features;

//     // Loop through the features array
//     const quakeMarkers = features.map(Feature => {
//         // For each earthquake, create a marker and bind a popup with the earthquake magnitude
//         const coord = [Feature.coordinates];
//         const popupMsg = "<h3>" + Feature.place + "<h3><h3>Magnitude: " + Feature.mag + "<h3>";
//         const quakeMarker = L.marker(coord).bindPopup(popupMsg);
//         // Add the marker to the quakeMarkers array
//         return quakeMarker;
//     })

//     // Create a layer group made from the earthquake markers array, pass it into the createMap function
//     createMap(L.layerGroup(quakeMarkers));
// }


// // Perform an API call to the USGS API to get last 30 days of all earthquakes information. Call createMarkers when complete
// (async function(){
//     const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
//     const response = await d3.json(url)
//     createMarkers(response)
// })()
