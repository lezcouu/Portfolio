import React, { useState } from 'react'
import fenix from "../assets/fenix.jpeg"
import {
	FaFacebookSquare,
	FaYoutube,
	FaInstagram,
	FaLinkedin,
	FaGithub,
	FaPlay
} from "react-icons/fa"

const Contact = () => {
	const [header] = useState({
        mainHeader:"PLANES",
        subHeading: "Precios",
        text: "Puedes encontrar el precio de diferentes productos ya elaborados a disposición o tareas personalizadas, tambien podes alquilar servicios elaborados para que te generen la mayor ganancia E-commerce y Smartbyte, consultame"
    })
	return (
		<div className="contact">
			<div className="container">
				<div className="contactSection">
					<div className="row justifyConter">
						<div className="col-6">
							<div className="contactSection-logo">
							<img src={fenix} alt={fenix}/>
							</div>
							<p>tambien podes contactar por mis redes sociales</p>
							<ul className="contactCircles">								
								<li><FaFacebookSquare /></li>
								<li><FaYoutube /></li>
								<li><FaInstagram /></li>
								<li><FaLinkedin /></li>
								<li><FaGithub /></li>
								<li><FaPlay /></li>								
							</ul>
						</div>
					</div>					
				</div>
			</div>
		</div>
	)
}

export default Contact