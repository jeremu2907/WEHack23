import React, {Component} from 'react'
import "./EventListing.css"
//import Grid from './Grid'

export default class EventListing extends Component {
    eventItemStyle = {
        //style whatever 
       //  marginLeft: "0px",
       //  marginRight: "auto",
       margin: "10px",
       borderRadius: "10px",
       //  border: "5px",
       //  borderStyle: "none",
       background: "rgba(255, 255, 255, 1)", 
    }
   
    paddingStyle = {
        
    }

   gridStyle = {
       display: "grid",
       gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
       gridTemplateRows: "auto auto auto",
       gridGap: "1rem",
       gridTemplateAreas: 
       `'name name name name name name name name name name'
       'location location location location location location datetime datetime datetime datetime'
       'summary summary summary summary summary summary summary summary summary summary'
       `,
       padding: "20px"
   }

    toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
    // const eventListItems = events.map(event => <li>{event}</li>);
    render(){
        return( 
            <div>
                
            <div style={this.eventItemStyle}>
                <img alt="reference" src={this.props.object.image_url} style={{ width: "100%", height: "200px", borderRadius: "10px 10px 0px 0px", overflow: "hidden", objectFit: "cover"  }} />
                <div style={this.gridStyle}>
                    <div style={{fontSize: "35px", gridArea: "name", alignSelf: "center", color: "#20948b", fontWeight: "bold", fontFamily: "Timmana, sans-serif"}}>{this.toTitleCase(this.props.object.name)}</div>
                    <div style={{fontSize: "25px", gridArea: "location", alignSelf: "center", color:"#DE7a22", fontWeight: "800", fontFamily: "Noto Sans, sans-serif"}}>{this.toTitleCase(this.props.object.city)}, {this.toTitleCase(this.props.object.country)}</div>
                    <div style={{fontSize: "20px", gridArea: "datetime", alignSelf: "end", justifySelf: "end", color: "#2f9e96", fontWeight: "700", fontFamily: "Noto Sans, sans-serif"}}>{this.props.object.time} {this.props.object.date}</div>
 
                    <div style={{ gridArea: "summary", color: "#032b28"}}>{this.props.object.description}</div>
                </div>
            </div>
            </div>
        )
    }


}

