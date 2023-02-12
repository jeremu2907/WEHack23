import React, { useEffect } from 'react';
import $ from 'jquery'

export default function LandingQuote(){
    let quoteList = ["the World", "Cultures", "Communities"];
    const styles = {
        color: "white",
        fontSize: "100px",
        margin: "100px 0px 100px 0px"
    }
    const containerStyle  = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
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
        <div style={containerStyle}>
            <h1 style={styles}>Explore&nbsp;</h1><h1 id="welcomeMessage" style={styles}>{quoteList[0]}</h1>
        </div>
    )
}