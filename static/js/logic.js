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

       // Define the data source
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"

        //Starter Code for loop to get data into the markers
d3.json(url, function(response) {
    function marker_style(feature) {
        return{
        opacity: 1, 
        fillOpacity: 1,
        fillColor: marker_color(feature.properties.mag),
        color: "#00000",
        radius: getRadius(feature.properties.mag),
        stroke: true,
        weight: 0.5};
    }

    function marker_color(magnitude) {
        switch (true){
            case magnitude > 5:
                return "#EA2C2C";
            case magnitude > 4:
                return "#EA822C";
            case magnitude > 3:
                return "#EE9C00";
            case magnitude > 2:
                return "#EECC00";
            case magnitude > 1:
                return "D4EE00";
            default:
                return "#98EE00";
        }
    }


    // Get the radius of the markers
    function getRadius(magnitude) {
        if (magnitude === 0) {
          return 1;
        }
        return magnitude * 2;
      }
    
    L.geoJson(response, {
    // We turn each feature into a circleMarker on the map
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng);
    },
    // We set the style for each circleMarker using our styleInfo function
    style: marker_style,
    // Create a popup for each marker to display the magnitude and location of the earthquake after the marker has been created and styled
    onEachFeature: function(feature, layer) {
        layer.bindPopup('Magnitude: ' + feature.properties.mag + '<br>Location: ' + feature.properties.place);
    }
    }).addTo(baseMaps);

});

