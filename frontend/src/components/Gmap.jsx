import React, { useEffect } from 'react';
/*global google*/

export function renderMap(){
  if(localStorage.getItem("events") === null){
    console.log("no events")
    if (navigator.geolocation) {
      let map;
      navigator.geolocation.getCurrentPosition( coord => {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: coord.coords.latitude, lng: coord.coords.longitude },
          zoom: 13,
        });

        const input = document.getElementById("searchInput");
        // Specify just the place data fields that you need.
        const autocomplete = new google.maps.places.Autocomplete(input, {
          fields: ["place_id", "geometry", "formatted_address", "name"],
        });
      
        autocomplete.bindTo("bounds", map);
      })
    } else {
        document.getElementById("map").innerHTML = "Geolocation is not supported by this browser.";
    }
  } else {
      console.log("has events")
      const events = JSON.parse(localStorage.getItem("events"));
      console.log(events);

        let map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: events[0].coord[0], lng: events[0].coord[1] },
          zoom: 13,
        });

        const input = document.getElementById("searchInput");
        // Specify just the place data fields that you need.
        const autocomplete = new google.maps.places.Autocomplete(input, {
          fields: ["place_id", "geometry", "formatted_address", "name"],
        });
      
        autocomplete.bindTo("bounds", map);
        for(var i in events){
          const content = 
            "<h1>" + events[i].name + "</h1>" + 
            "<h3>" + events[i].summary + "</h3>" + 
            "<p>" + events[i].description + "</p>";
          const contentWindow = new google.maps.InfoWindow({
            content: content,
            ariaLabel: events[i].name
          });
          const marker = new google.maps.Marker({
              position : new google.maps.LatLng(events[i].coord[0],events[i].coord[1]),
              map,
              title: "Current Location",
              label: {text:events[i].name, backgroundColor: "white"}
          })
          marker.addListener("click", () => {
            contentWindow.open({
              anchor: marker,
              map,
            })
          })
        }
    }
}

export default function Gmap() {
  // Declare a new state variable, which we'll call "count"
    useEffect(() => {
        renderMap();
    })

    return (
        <div style={{height: "100%", width: "auto"}}>
            <div id = "map" style={{height: "100%", width: "auto", borderRadius: "10px"}}></div>
            {/* <div id="infowindow-content">
                <span id="place-name"></span><br />
                <strong>Place ID:</strong> <span id="place-id"></span><br />
                <span id="place-address"></span>
            </div> */}
        </div>
    );
}