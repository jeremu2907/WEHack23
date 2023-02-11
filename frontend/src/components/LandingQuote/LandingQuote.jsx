import React, { useState, useEffect } from 'react';

export default function LandingQuote(){
    let quoteList = ["Explore the World", "Explore Cultures", "Explore Communities"];
    var [quotesIdx, setQuotes] = useState(0);
    const styles = {
        color: "white",
        fontSize: "100px"
    }

    useEffect(() => {
        const updateQuote = () => {
            setTimeout(() => {
                setQuotes((quotesIdx + 1) % quoteList.length).then(updateQuote);
            }, 1000)
        }

        updateQuote();
    })

    return(
        <div>
            <h1 style={styles}>{quoteList[quotesIdx]}</h1>
        </div>
    )
}