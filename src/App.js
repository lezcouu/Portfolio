import './App.css';
import Banner from "./components/Banner.jsx"
import Nav from "./components/Nav.jsx"
import Services from "./components/Services.jsx"
import About from "./components/About.jsx"
import Prices from "./components/Prices.jsx"
import Contact from "./components/Contact.jsx"

function App() {
  return (
    <div>
    <Banner />
    <Nav />
    <Services />
    <About />
    <Prices />
    <Contact />
    </div>
  );
}

export default App;
