import React from 'react'
import "./Home.css"
import Banner from "./Banner.jsx"
import Nav from "./Nav.jsx"
import Services from "./Services.jsx"
import About from "./About.jsx"
import Prices from "./Prices.jsx"
import Contact from "./Contact.jsx"
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Banner />
            <Nav />
            <Services />
            <About />
            <Skills />
            <Prices />
            <Contact />            
        </div>
    )
}

export default Home
