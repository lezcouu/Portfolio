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
            <section id="Banner">
            <Banner />
            </section >
            <section >
            <Nav />
            </section>
            <section id="Services">
            <Services />
            </section>
            <section id="About">
            <About />
            </section>
            <section id="Skills">
            <Skills />
            </section>
            <section id="Prices">
            <Prices />
            </section>
            <section id="Contact">
            <Contact />            
            </section>
        </div>
    )
}

export default Home
