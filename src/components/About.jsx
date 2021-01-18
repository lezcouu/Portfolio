import React, { useState } from 'react';
import Emoticon from "../assets/emoticon.png"
import { Link } from "@material-ui/core"
import {
	FaGithubSquare
} from "react-icons/fa"

const About = () => {
	const [ header ] = useState(
		{
			subHeader: "Acerca de mi",
			text: "Soy de caballito y tengo 29 años, \
			estoy en la busqueda de nuevos desafios en\
			 el mundo It, soy una persona responsable que\
			  sabe trabajar bajo presion, en equipos y autodidacta con \
			  diversas experiencias y conocimiento de tecnologias."
		})
	const [ state ] = useState([
		{ id:1,  title:"Nombre", text:"Pablo Lezcano" },
		{ id:2,  title:"Linkedin", text:"https://www.linkedin.com/in/pablo-david-lezcano/" },
		{ id:2,  title:"Email", text:"lezcouu@gmail.com" },
		{ id:2,  title:"Instagram", text:"/hey_coder" }
		])
	return (
		<div className="about">
		  <div className="container">	
	    	<div className="common">
                <h3 className="mainHeader">
                    {header.subHeader}
                </h3>
                <p className="mainContent">
                    {header.text}
                </p>
                <div className="commonBorder"></div>
            </div>
            <div className="row h-650 alignCenter">
	           <div className="col-6">	
			   <div className="about_img">
				   <img 
					src={Emoticon} 
					alt=""
					/>
			   </div>
	           </div>
	           <div className="col-6">	
			   <div className="about_info">
				   <h1> Aqui estoy!</h1>
				   <div className="about_info-p1">
					   Hace ya un año me encuentro desarrollando Freelance.
				   </div>
				   <div className="about_info-p2">
					   Co-Founder Start-up TecnoByte
				   </div>
				   <div className="about_info-p2">
					   Podes contactarte conmigo visitando nuestra propia pagina web. click en 
					   <Link color="inherit" href="http://smartbyte.ml/">Smartbyte</Link>
				   </div>
				   <div className="about_info-p2">
					   <Link color="inherit" href="http://smartbyte.ml/">Smartbyte</Link>
				   </div>
				   <div className="info_contacts">
					   <div className="rowa">
						   {state.map((elem,i) => (
							   <div key={i} className="col-6">
							   <strong>{elem.title}</strong>
							   <p>{elem.text}</p>
						   </div>
						   ))}
					   </div>
					   <div className="about_info-p2"style={{marginTop:"3%"}}>
						   Me gustaria que puedas proyectos haz click en el gatito
						   <Link href="https://github.com/lezcouu?tab=repositories"><FaGithubSquare className="git" /></Link>
					   </div>
				   </div>
				   </div>	           
	           </div>	
            </div>
          </div>			
		</div>
	)
}

export default About