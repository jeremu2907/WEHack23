import React from 'react';
import $ from "jquery"
import * as apiCall from '../apiCalls';
import "./SearchBox.css"

//city country
export default function SearchBox() {

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
      apiCall.searchCity(city)
    } else if ( $("input[name='field']:checked")[0].id === "rcountry") {
      apiCall.searchCountry(country)
    } else {
      apiCall.searchGeneral()
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
    borderRadius: "2px",
    cursor: "pointer",
    fontSize: "30px",
    fontFamily: "'Montserrat', sans-serif",
    backgroundImage: "linear-Gradient(rgba(0,0,0,0), rgba(0,0,0,0))",
    backgroundColor: "rgba(0,0,0,0)",
    border: "none",
  }

  const divStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
  
  const labelStyle = {
    color: "white",
    fontFamily: "'Montserrat', sans-serif",
    marginRight: "auto"
  }


return(
<div style={{width:"100%", height:"auto", display: "flex", flexDirection: "column"}}>
  <div style={divStyle}>
    <input type ="text" id="searchInput" style={searchBoxStyle}/>
    <button onClick={handleClick} style={submitButtonStyle} id="submitButton">submit</button>
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
)


}