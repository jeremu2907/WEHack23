import React, {Component} from 'react'
import "./EventListing.css"
//import Grid from './Grid'

export default class EventListing extends Component {
    eventItemStyle = {
        //style whatever 
       //  marginLeft: "0px",
       //  marginRight: "auto",
       margin: "10px",
       padding: "30px",
       borderRadius: "5px",
       //  border: "5px",
       //  borderStyle: "none",
       background: "rgba(255, 255, 255, 1)", 
   }
   
   gridStyle = {
       display: "grid",
       gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
       gridTemplateRows: "auto auto auto",
       gridGap: "1rem",
       gridTemplateAreas: 
       `'image name name name name name name name city country'
       'desc desc desc . . . . . time date'
       'summary summary summary summary summary summary summary summary summary summary'
       `
   
   }

    toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
    // const eventListItems = events.map(event => <li>{event}</li>);
    render(){
        return( 
            <div style={this.eventItemStyle}>
                <div style={this.gridStyle}>
                    <img alt="reference" src={this.props.object.image_url} style={{ gridArea: "image", width: "50px", height: "50px", scale: "1", borderRadius: "50%", overflow: "hidden", alignSelf: "center",}}/>
                    <div style={{fontSize: "35px", gridArea: "name", alignSelf: "center", color: "#20948b", fontWeight: "bold", fontFamily: "Timmana, sans-serif"}}>{this.toTitleCase(this.props.object.name)}</div>
                    <div style={{fontSize: "25px", gridArea: "city", alignSelf: "center", color:"#DE7a22", fontWeight: "800", fontFamily: "Noto Sans, sans-serif"}}>{this.toTitleCase(this.props.object.city)},</div>
                    <div style={{fontSize: "25px", gridArea: "country", alignSelf: "center", color:"#DE7a22", fontWeight: "800", fontFamily: "Noto Sans, sans-serif"}}>{this.toTitleCase(this.props.object.country)}</div>
                    <div style={{fontSize: "20px", gridArea: "time", alignSelf: "start", justifySelf: "start", color: "#2f9e96", fontWeight: "700", fontFamily: "Noto Sans, sans-serif"}}>{this.props.object.time}</div>
                    <div style={{fontSize: "20px", gridArea: "date", alignSelf: "start", justifySelf: "start", color: "#2f9e96", fontWeight: "700", fontFamily: "Noto Sans, sans-serif"}}>{this.props.object.date}</div>
                    <div style={{fontSize: "20px", gridArea: "desc", alignSelf: "start", fontStyle: "italic", color: "#6Ab187"}}>DESCRIPTION</div>
                    <div style={{ gridArea: "summary", color: "#032b28"}}>{this.props.object.description}</div>
                </div>
            </div>
        )
    }


}

