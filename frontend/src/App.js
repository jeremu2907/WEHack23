import './App.css';
import Gmap from './components/Gmap.jsx'
import LandingQuote from './components/LandingQuote/LandingQuote';

function App() {
  const sectionStyle = {
    height: "100vh",
    width: "100vw"
  }

  return (
    <div className="App" id="App">
        <section style={sectionStyle}>
          {LandingQuote()}
        </section>
        <section style={sectionStyle}>
          {Gmap()}
        </section>
    </div>
  );
}

export default App;
