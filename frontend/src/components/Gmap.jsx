import React, { useEffect } from 'react';
/*global google*/

export default function Gmap() {
  // Declare a new state variable, which we'll call "count"
    useEffect(() => {
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition((coord) => {
                // eslint-disable-next-line
                const map = new google.maps.Map(document.getElementById("map"),
                    {
                        center: new google.maps.LatLng(coord.coords.latitude, coord.coords.longitude),
                        zoom: 15, 
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    }
                )
            })
            // document.getElementById("map").innerHTML = "Map Loading..."

        } else {
            document.getElementById("map").innerHTML = "Geolocation is not supported by this browser.";
        }
    })

    return (
        <div id = "map" style={{height: "100%", width: "auto"}}></div>
    );
}