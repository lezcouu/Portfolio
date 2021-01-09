import React from 'react'
import {
	FaFacebookSquare,
	FaYoutube,
	FaInstagram,
	FaLinkedin,
	FaGithub,
	FaPlay
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
								Soy Pablo Lezcano
							</h1>
							<p>
								Un desarrollador web con experiencia en diversos lenguajes, autodidacta y en busqueda de nuevos desafios
							</p>
							<div className="header_button">
								<a href="" className="btn btn-outline">My Portfolio</a>
								&nbsp;&nbsp;&nbsp;
								<a href="" className="btn btn-smart"><FaPlay className="play" /></a>
							</div>
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