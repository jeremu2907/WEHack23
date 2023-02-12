import { renderMap } from "./Gmap";

export function searchGeneral(){
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
    }).then(data => {
        renderMap()
        return data;
    })

}

export async function searchCity(city){
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
        return data
    }).then(data => {
        renderMap()
        return data;
    })
}

export function searchCountry(country){
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
    }).then(data => {
        renderMap()
        return data;
    })
}