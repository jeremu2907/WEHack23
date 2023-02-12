import React, { useEffect } from 'react';
import $ from 'jquery'

export default function LandingQuote(){
    let quoteList = ["Explore the World", "Explore Cultures", "Explore Communities"];
    const styles = {
        color: "white",
        fontSize: "100px",
        marginLeft: "100px"
    }

    const welcomeMessage = (i) => {
        setTimeout(() => {
                $("#welcomeMessage").animate({
                    opacity: "0"
                }, 1000, function() {
                    i++;
                    $("#welcomeMessage").html(quoteList[i%quoteList.length])
                    $("#welcomeMessage").animate({
                        opacity: "1"
                    }, 500, welcomeMessage(i));
                });  
        },1500);
    }

    useEffect(() => {
        welcomeMessage(0)
    })

    return(
        <div>
            <h1 id="welcomeMessage" style={styles}>{quoteList[0]}</h1>
        </div>
    )
}