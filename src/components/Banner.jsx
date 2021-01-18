import React, { useState } from 'react'
import {
	FaYoutube,
	FaInstagram,
	FaLinkedin,
	FaGithub,
	FaPlay
} from "react-icons/fa"
import image from "../assets/caminando.png"

const Banner = () => {
	const [state] = useState({
		title: "Soy Pablo Lezcano",
		text: "Un desarrollador web con experiencia en diversos lenguajes, autodidacta y en busqueda de nuevos desafios",
		imagen: image 
	})
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col-6">
						<div className="header_content">
							<div className="header_section">
							<ul className="header_ul">
								<li><FaYoutube /></li>
								<li><FaInstagram /></li>
								<li><FaGithub /></li>
								<li><FaLinkedin /></li>
							</ul>
							<h1>
								{state.title}
							</h1>
							<p>
								{state.text}
							</p>
							<div className="header_button">
								<a href="" className="btn btn-outline">My Portfolio</a>
							</div>
							</div>							
						</div>
					</div>
					<div className="col-6">
						<div className="banner_img">
							<img src={state.imagen} alt=""/>
						</div>
					</div>
				</div>				
			</div>			
		</header>
	)
}

export default Banner