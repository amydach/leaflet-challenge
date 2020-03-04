# __Visualizing Data with Leaflet__

![1-Logo](Images/1-Logo.png)

## Project Description:

Built a new set of tools for the US Geological Survey that will allow them visualize their earthquake data. 
They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. 
Their hope is that being able to visualize their data will allow them to better educate the public and other government 
organizations (and hopefully secure more funding..) on issues facing our planet.

1. **Data source:**

   ![3-Data](Images/3-Data.png) 

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. 
   Visited the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page to pick a data set to visualize. 
   When I click on a data set, for example 'All Earthquakes from the Past 7 Days', I was given a JSON representation of that data. 
   I will be using the URL of this JSON to pull in the data for my visualization.

   ![4-JSON](Images/4-JSON.png)

2. **Importing & Visualizing the Data:**

   * Created a map using Leaflet that plots all of the earthquakes from USGS data set based on their longitude and latitude.
   * My data markers reflect the magnitude of the earthquake by their size and color. Earthquakes with higher magnitudes appear larger and darker in color.
   * Included popups that provide additional information about the earthquake when a marker is clicked.
   * Created a legend that will provide context for your map data.  



## Link to my Github repo:

https://github.com/amydach/leaflet-challenge
Run file index.html to see the output

## Dependencies:
Leaflet,
JavaScript,
HTML

## Usage:
Provide a geographic visualization of global earthquake activity.



