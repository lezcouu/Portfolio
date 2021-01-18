import React, { useState } from 'react'
import {
	FaYoutube,
	FaInstagram,
	FaLinkedin,
	FaGithub
} from "react-icons/fa"
import image from "../assets/caminando.png"
import {Link, Button} from "@material-ui/core"

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
								<Link href="https://www.youtube.com/channel/UCA3eO0-y0BUde1OpKap61vA" color="inherit"><li><FaYoutube /></li></Link>
								<Link href="https://www.instagram.com/hey_coder/" color="inherit"><li><FaInstagram /></li></Link>
								<Link href="https://github.com/lezcouu?tab=repositories" color="inherit"><li><FaGithub /></li></Link>
								<Link href="https://www.linkedin.com/in/pablo-david-lezcano/" color="inherit"><li><FaLinkedin /></li></Link>
							</ul>
							<h1>
								{state.title}
							</h1>
							<p>
								{state.text}
							</p>
							<div className="header_button">
								<a href="./portfolio/pdf" target="_blank" className="btn btn-outline"><Button style={{color:"#fff"}}>My Curriculum</Button></a>
							</div>
							</div>							
						</div>
					</div>
					<div className="col-6">
						<div className="banner_img">
							<img src={image} alt=""/>
						</div>
					</div>
				</div>				
			</div>			
		</header>
	)
}

export default Banner