import './App.css';
import Gmap from './components/Gmap.jsx'
import LandingQuote from './components/LandingQuote/LandingQuote';
import SelectionPanel from './components/SelectionPanel/SelectionPanel';

function App() {
  const sectionStyle = {
    height: "100vh",
    width: "100vw"
  }

  const logoStyle = {
    fontSize: "100px",
    color: "white",
    marginLeft: "100px",
    textShadow: "10px 10px 50px rgba(0,0,0,0.3)"
  }

  const rowFlexBox = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  }

  // const linkButton = {
  //  fontSize: "50px",
  //   color: "white",
  //   marginLeft: "100px",
  //   borderBottom: "solid white 2px",
  //   transition: "color 0.3s ease-in-out, margin-bottom 0.3s ease-in-out" 
  // }

  const shadedRegion = {
    backgroundImage: "linear-Gradient(rgba(0,0,0,0), rgba(0,0,0,0.6))"
  }

  const tripSelect = () => {
    document.getElementById("selections").scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className="App" id="App">
        <section style={sectionStyle}>
          <h1 style={logoStyle}>Paddle</h1>
          {LandingQuote()}
          <h1 className="linkButton" onClick={tripSelect}>Browse Trips</h1>
        </section>

        <section id="selections" style={{...sectionStyle,...rowFlexBox,...shadedRegion}}>
          <div style={{width: "45%", padding: "20px"}}>{SelectionPanel()}</div>
          <div style={{width: "45%", padding: "20px"}}>{Gmap()}</div>
        </section>
    </div>
  );
}

export default App;
