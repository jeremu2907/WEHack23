import React from 'react'
import SearchBox from '../SearchBox/SearchBox'
import './SelectionPanel.css'

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

    const overflowStyle = {
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        width: '100%',
        // border: "solid 5px red"
    }

    const test = {
        height: "200px",
        width: "100%",
        backgroundColor: "red",
        // marginTop: "50px"
    }

    return(
        <div style={containerStyle}>
            {SearchBox()}
            <div style={overflowStyle} id="overflowStyle">
                {/* {SearchBox()}
                {SearchBox()}
                {SearchBox()}
                {SearchBox()}
                {SearchBox()}
                {SearchBox()}
                {SearchBox()}
                {SearchBox()} */}
            </div>
        </div>
    )
}