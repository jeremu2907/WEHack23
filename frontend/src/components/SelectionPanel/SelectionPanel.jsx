import React, {useState} from 'react'
// import SearchBox from '../SearchBox/SearchBox'
import './SelectionPanel.css'
import EventListing from '../EventListing/EventListing'

import $ from "jquery"
import "../SearchBox/SearchBox.css"

export default function SelectionPanel() {
    const [events, setEvents] = useState([]);

    const handleClick = () => {
        var searchInput, city, country;
        searchInput = $("#searchInput").val();
        console.log(searchInput);
        const inputArray = searchInput.split(", ");
        city = inputArray[0];
        country = inputArray[1];
        console.log(city);
        console.log(country);
    
        if($("input[name='field']:checked")[0].id === "rcity"){
            const url = "http://justpaddle.tech/api/v1/experiences?city=" + city
            fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                headers: {
                  'Content-Type': 'application/json'
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            }).then(response => {
                return response.json();
            }).then(data => {
                localStorage.setItem("events", JSON.stringify(data))
                setEvents(data)
            })
        } else if ( $("input[name='field']:checked")[0].id === "rcountry") {
            const url = "http://justpaddle.tech/api/v1/experiences?country=" + country
            fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                headers: {
                  'Content-Type': 'application/json'
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            }).then(response => {
                return response.json();
            }).then(data => {
                localStorage.setItem("events", JSON.stringify(data))
                setEvents(data)
            })
        } else {
            const url = "http://justpaddle.tech/api/v1/experiences"
            fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                headers: {
                  'Content-Type': 'application/json'
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            }).then(response => {
                return response.json();
            }).then(data => {
                localStorage.setItem("events", JSON.stringify(data))
                setEvents(data)
            })
        }

    };
    
      const searchBoxStyle = {
        color: "white",
        width: "70%",
        fontSize: "25px",
        fontFamily: "'Montserrat', sans-serif",
        height: "40px",
        margin: "10px 0px",
        border: "none",
        borderBottom: "solid 2px white",
        boxShadow: "10px 10px 50px rgba(0,0,0,0.1)",
        fontWeight: "bold",
        backgroundImage: "linear-Gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1))",
        backgroundColor: "rgba(0,0,0,0)",
    
      }
    
      const submitButtonStyle = {
        borderRadius: "20px",
        cursor: "pointer",
        fontSize: "15px",
        fontFamily: "'Montserrat', sans-serif",
        backgroundImage: "linear-Gradient(rgba(0,0,0,0), rgba(0,0,0,0))",
        backgroundColor: "rgb(222, 122, 34)",
        border: "none",
        padding: "2px 10px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }
    
      const divStyle = {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }
      
      const labelStyle = {
        color: "white",
        fontFamily: "'Montserrat', sans-serif",
        marginRight: "auto"
      }

    const containerStyle = {
        backdropFilter: "blur(3px)",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    const overflowStyle = {
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        width: '100%',
        // border: "solid 5px red"
    }

    return(
        <div style={containerStyle}>
            <div style={{width:"100%", height:"auto", display: "flex", flexDirection: "column"}}>
                <div style={divStyle}>
                    <input type ="text" id="searchInput" style={searchBoxStyle}/>
                    
                    <button onClick={handleClick} style={submitButtonStyle} id="submitButton"> Search </button>      
                </div>
                <div style={{display: "flex",justifyContent: "space-evenly", alignItems: "center"}}>
                    <h3 style={{color: "#f4cc70", margin: "10px 10px 10px auto", fontFamily: "'Montserrat', sans-serif",}}>Search by:</h3>
                    <label style={labelStyle}>City
                    <input type="radio" name="field" id="rcity"/>
                    </label>
                    <label style={labelStyle}>Country
                    <input type="radio" name="field" id="rcountry"/>
                    </label>
                    <label style={labelStyle}>All
                    <input type="radio" name="field" id="rall"/>
                    </label>
                </div>
            </div>
            <div style={overflowStyle} id="overflowStyle">
                {
                (localStorage.getItem("events") === null)? null : 
                    JSON.parse(localStorage.getItem("events")).map(event =>
                        <EventListing
                            key = {event._id}
                            object = {event}
                        />
                    )
                }
            </div>
        </div>
    )
}