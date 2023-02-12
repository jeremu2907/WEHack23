import React, {useEffect, useState} from 'react'

const events = [
    //'ID, name, coord, addy, country, city, imageURL, desc, date, time, summary, videoURL',   
  ];

export default function EventListing() {

    const eventListItems = events.map(event => <li>{event}</li>);
    return( 
        <div style={eventItemStyle}>

        </div>
    )



}
