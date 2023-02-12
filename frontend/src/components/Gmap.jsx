import React, { useEffect } from 'react';
import * as apiCalls from './apiCalls.js'
/*global google*/

export default function Gmap() {
  // Declare a new state variable, which we'll call "count"
    useEffect(() => {
        apiCalls.searchByName("UT Dallas");
        
        if (navigator.geolocation) {



            const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: -33.8688, lng: 151.2195 },
                zoom: 13,
              });
              const input = document.getElementById("pac-input");
              // Specify just the place data fields that you need.
              const autocomplete = new google.maps.places.Autocomplete(input, {
                fields: ["place_id", "geometry", "formatted_address", "name"],
              });
            
              autocomplete.bindTo("bounds", map);
              map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
            
              const infowindow = new google.maps.InfoWindow();
              const infowindowContent = document.getElementById("infowindow-content");
            
              infowindow.setContent(infowindowContent);
            
              const marker = new google.maps.Marker({ map: map });
            
              marker.addListener("click", () => {
                infowindow.open(map, marker);
              });
              autocomplete.addListener("place_changed", () => {
                infowindow.close();
            
                const place = autocomplete.getPlace();
            
                if (!place.geometry || !place.geometry.location) {
                  return;
                }
            
                if (place.geometry.viewport) {
                  map.fitBounds(place.geometry.viewport);
                } else {
                  map.setCenter(place.geometry.location);
                  map.setZoom(17);
                }
            
                // Set the position of the marker using the place ID and location.
                // @ts-ignore This should be in @typings/googlemaps.
                marker.setPlace({
                  placeId: place.place_id,
                  location: place.geometry.location,
                });
                marker.setVisible(true);
                infowindowContent.children.namedItem("place-name").textContent = place.name;
                infowindowContent.children.namedItem("place-id").textContent =
                  place.place_id;
                infowindowContent.children.namedItem("place-address").textContent =
                  place.formatted_address;
                infowindow.open(map, marker);
              });



            // navigator.geolocation.getCurrentPosition((coord) => {
            //     // eslint-disable-next-line
            //     const map = new google.maps.Map(document.getElementById("map"),
            //         {
            //             center: new google.maps.LatLng(coord.coords.latitude, coord.coords.longitude),
            //             zoom: 15, 
            //             mapTypeId: google.maps.MapTypeId.ROADMAP
            //         }
            //     )

            //     const marker = new google.maps.Marker({
            //         position : new google.maps.LatLng(coord.coords.latitude, coord.coords.longitude),
            //         map,
            //         title: "Current Location",
            //         label: {text:"Current location", backgroundColor: "white"}
            //     })
                
            //     const infowindow = new google.maps.InfoWindow();
            //     const infowindowContent = document.getElementById("infowindow-content");
            
            //     infowindow.setContent(infowindowContent);
            
                
            
            //     marker.addListener("click", () => {
            //         infowindow.open(map, marker);
            //     });
                
            // })
            // document.getElementById("map").innerHTML = "Map Loading..."

        } else {
            document.getElementById("map").innerHTML = "Geolocation is not supported by this browser.";
        }
    })

    return (
        <div id = "map" style={{height: "100%", width: "auto"}}></div>
    );
}