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
				<div className="aboutSection">
					<div className="aboutSection-logo">
						<img src={fenix} alt={fenix}/>
						<div className="row">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum eveniet nulla consequatur, perspiciatis sunt vero aperiam laudantium quibusdam enim.
							<div className="aboutCircles">
								<ul>
									<FaFacebookSquare />
									<FaYoutube />
									<FaInstagram />
									<FaLinkedin />
									<FaGithub />
									<FaPlay />
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact