import React, { useState } from 'react'
import fenix from "../assets/fenix.jpeg"
import {
	FaYoutube,
	FaInstagram,
	FaLinkedin,
	FaGithub
} from "react-icons/fa"
import { Link } from "@material-ui/core"

const Contact = () => {
	const [header] = useState({
        mainHeader:"PLANES",
        subHeading: "Precios",
        text: "Puedes encontrar el precio de diferentes productos ya elaborados a disposición o tareas personalizadas, tambien podes alquilar servicios elaborados para que te generen la mayor ganancia E-commerce y Smartbyte, consultame."
    })
	return (
		<div className="contact">
			<div className="container">
				<div className="contactSection">
					<div className="row justifyConter">
						<div className="col-6">
							<div className="contactSection-logo">
							<img style={{borderRadius:"100%"}} src={fenix} alt={fenix}/>
							</div>
							<p>Siempre podemos conectarnos por las redes sociales</p>
							<p>Click en cualquier icono</p>
							<ul className="contactCircles">								
							<Link href="https://www.youtube.com/channel/UCA3eO0-y0BUde1OpKap61vA" color="inherit"><li><FaYoutube /></li></Link>
								<Link href="https://www.instagram.com/hey_coder/" color="inherit"><li><FaInstagram /></li></Link>
								<Link href="https://github.com/lezcouu?tab=repositories" color="inherit"><li><FaGithub /></li></Link>
								<Link href="https://www.linkedin.com/in/pablo-david-lezcano/" color="inherit"><li><FaLinkedin /></li></Link>							
							</ul>
						</div>
					</div>					
				</div>
			</div>
		</div>
	)
}

export default Contact