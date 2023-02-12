import React, {useEffect, useState} from 'react'
import SearchBox from '../SearchBox/SearchBox'

export default function SelectionPanel() {
    const containerStyle = {
        backdropFilter: "blur(10px)",
        height: "100%",
        width: "100%",
        border: "solid white 2px",
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