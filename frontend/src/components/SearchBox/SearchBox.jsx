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
    width: "80%",
    fontSize: "25px",
    height: "40px",
    margin: "50px 0px"

  }

  const submitButtonStyle = {
    borderRadius: "2px",
    cursor: "pointer",
    fontSize: "15px",
    margin: "50px 0px",
    //background: "rgb(2,0,36)"
    //background: "rgb(2,0,36), linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(0,212,255,0) 100%)"


  }

  const divStyle = {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }


return(<div style={divStyle}>
  <input type ="text" id="searchInput" style={searchBoxStyle}/>
  <button onClick={handleClick} style={submitButtonStyle}>Submit</button>
</div>)


}