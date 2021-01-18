import React, { useState } from 'react';
import caminando from "../assets/caminando.png"

const About = () => {
	const [ header ] = useState(
		{
			subHeader: "Acerca de mi",
			text: "Soy de caballito y tengo 29 años, \
			estoy en la busqueda de nuevos desafios en\
			 el mundo It, soy una persona responsable que\
			  sabe trabajar bajo presion y autodidacta con \
			  diversas experiencias y conocimiento de tecnologias."
		})
	const [ state ] = useState([
		{ id:1,  title:"Nombre", text:"Pablo Lezcano" },
		{ id:2,  title:"Linkedin", text:"https://www.linkedin.com/in/pablo-david-lezcano/" },
		{ id:2,  title:"Email", text:"lezcouu@gmail.com" },
		{ id:2,  title:"Instagram", text:"https://www.instagram.com/hey_coder/" }
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
					src={caminando} 
					alt={caminando}
					/>
			   </div>
	           </div>
	           <div className="col-6">	
			   <div className="about_info">
				   <h1> Hola!</h1>
				   <div className="about_info-p1">
					   Soy de caballito Caba y tengo 29 me gustaria poder encontrar nuevos desafios.
				   </div>
				   <div className="about_info-p2">
					   Actualmente me encuentro en el desarrollo de una aplicacion para gestionar negocios.
				   </div>
				   <div className="info_contacts">
					   <div className="row">
						   {state.map((elem,i) => (
							   <div key={i} className="col-6">
							   <strong>{elem.title}</strong>
							   <p>{elem.text}</p>
						   </div>
						   ))}
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