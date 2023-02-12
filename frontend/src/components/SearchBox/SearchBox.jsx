import React, { useState } from 'react';
import $ from "jquery"

//city country
export default function SearchBox() {

  const handleClick = () => {
    var searchInput, city, country;
    searchInput = $("#searchInput").val();
    console.log(searchInput);
    const inputArray = searchInput.split(" ");
    city = inputArray[0];
    country = inputArray[1];
    console.log(city);
    console.log(country);
  };

  const searchBoxStyle = {
    color: "grey",
    width: "70%",
    fontSize: "25px",
    height: "40px",
    margin: "50px 0px",
    border: "none",
    boxShadow: "10px 10px 50px rgba(0,0,0,0.1)"
  }

  const submitButtonStyle = {
    borderRadius: "2px",
    cursor: "pointer",
    fontSize: "30px",
    backgroundImage: "linear-Gradient(rgba(0,0,0,0), rgba(0,0,0,0))",
    backgroundColor: "rgba(0,0,0,0)",
    border: "none",
    color: "white"
  }

  const divStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  }


return(<div style={divStyle}>
  <input type ="text" id="searchInput" style={searchBoxStyle}/>
  <button onClick={handleClick} style={submitButtonStyle}>Submit</button>
</div>)


}