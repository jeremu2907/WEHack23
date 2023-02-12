


export function searchCityCountry(){
    const url = "http://scrolls.io/api/v1/experiences"
    console.log("hi")
    fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }).then(response => {
        console.log(response)
        return response.json();
    }).then(data => {
        console.log(data)
        localStorage.setItem("events", JSON.stringify(data))
    })

}

export function searchByName(place){
}