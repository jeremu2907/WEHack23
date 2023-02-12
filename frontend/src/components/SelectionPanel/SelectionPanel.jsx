import React from 'react'
import SearchBox from '../SearchBox/SearchBox'

export default function SelectionPanel() {
    const containerStyle = {
        backdropFilter: "blur(3px)",
        height: "100%",
        width: "100%",
        border: "solid 3px #6ab187",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    return(
        <div style={containerStyle}>
            {SearchBox()}
        </div>
    )
}