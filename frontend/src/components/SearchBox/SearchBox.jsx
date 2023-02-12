import React, { useState } from 'react';

//city country
export default function SearchBox() {
 // const [searchInput, getInput] = useState('');

  // const getSearch = (event) => {
  //   getInput({ searchInput: event.target.value});
  
  // };
   
  const handleClick = () => {
    var searchInput, city, country;
    searchInput = document.getElementById("searchInput").val();
    console.log(searchInput)
    searchInput.split(" ");
    city = searchInput[1];
    country = searchInput[2];
    console.log(city);
    console.log(country);
  };

return(<div>
  <input type ="text" id="searchInput"/>

  <button onClick={handleClick}>Submit</button>
</div>)


}