import React, {useEffect, useState} from 'react'
import "./EventListing.css"
//import Grid from './Grid'


const events = [
    //'ID, name, coord, addy, country, city, imageURL, desc, date, time, summary, videoURL',   
  ];

const eventItemStyle = {
     //style whatever 
    //  marginLeft: "0px",
    //  marginRight: "auto",
    margin: "10px",
    padding: "30px",
    borderRadius: "5px",
    //  border: "5px",
    //  borderStyle: "none",
    background: "rgba(255, 255, 255, 1)",


     
}

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "auto auto auto",
    gridGap: "1rem",
    gridTemplateAreas: 
    `'image name name name name name name name city country'
    'desc desc desc . . . . . time date'
    'summary summary summary summary summary summary summary summary summary summary'
    `

}

export default function EventListing() {

    const eventListItems = events.map(event => <li>{event}</li>);
    return( 
        <div style={eventItemStyle}>
            <div style={gridStyle}>
                <img alt="reference" src={"https://images.theconversation.com/files/393210/original/file-20210401-13-z6rl6z.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"} style={{ gridArea: "image", width: "50px", height: "50px", scale: "1", borderRadius: "50%", overflow: "hidden", alignSelf: "center",}}/>
                <div style={{fontSize: "35px", gridArea: "name", alignSelf: "center", color: "#20948b", fontWeight: "bold", fontFamily: "Timmana, sans-serif"}}>Cleaning Beaches</div>
                <div style={{fontSize: "25px", gridArea: "city", alignSelf: "center", color:"#DE7a22", fontWeight: "800", fontFamily: "Noto Sans, sans-serif"}}>CITY,</div>
                <div style={{fontSize: "25px", gridArea: "country", alignSelf: "center", color:"#DE7a22", fontWeight: "800", fontFamily: "Noto Sans, sans-serif"}}>COUNTRY</div>
                <div style={{fontSize: "20px", gridArea: "time", alignSelf: "start", justifySelf: "start", color: "#2f9e96", fontWeight: "700", fontFamily: "Noto Sans, sans-serif"}}>TIME</div>
                <div style={{fontSize: "20px", gridArea: "date", alignSelf: "start", justifySelf: "start", color: "#2f9e96", fontWeight: "700", fontFamily: "Noto Sans, sans-serif"}}>DATE</div>
                <div style={{fontSize: "20px", gridArea: "desc", alignSelf: "start", fontStyle: "italic", color: "#6Ab187"}}>DESCRIPTION</div>
                <div style={{ gridArea: "summary", color: "#032b28"}}>SUMMARY Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
        </div>
    )



}

