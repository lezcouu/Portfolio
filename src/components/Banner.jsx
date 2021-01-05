import React from 'react'
import {
	FaFacebookSquare,
	FaYoutube,
	FaInstagram,
	FaLinkedin,
	FaGithub
} from "react-icons/fa"

const Banner = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col-6">
						<div className="header_content">
							<div className="header_section">
							<ul className="header_ul">
								<li><FaFacebookSquare /></li>
								<li><FaYoutube /></li>
								<li><FaInstagram /></li>
								<li><FaGithub /></li>
								<li><FaLinkedin /></li>
							</ul>
							<h1>
								Yo soy Pablo Lezcano
							</h1>
							<p>
								Soy un desarrollador web con experiencia en diversos lenguajes, autodidacta y estoy buscando nuevos desafios
							</p>
							</div>							
						</div>
					</div>
					<div className="col-6">

					</div>
				</div>				
			</div>			
		</header>
	)
}

export default Banner