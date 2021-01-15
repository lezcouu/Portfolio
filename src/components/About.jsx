import React, { useState } from 'react';
import {fenix} from "../assets/fenix.jpeg"

const About = () => {
	const [ state ] = useState(
		{
			subHeader: "Acerca de mi",
			text: "Soy de caballito y tengo 29 años, \
			estoy en la busqueda de nuevos desafios en\
			 el mundo It, soy una persona responsable que\
			  sabe trabajar bajo presion y autodidacta con \
			  diversas experiencias y conocimiento de tecnologias."
		})
	return (
		<div className="about">
		  <div className="container">	
	    	<div className="common">
                <h3 className="mainHeader">
                    {state.subHeader}
                </h3>
                <p className="mainContent">
                    {state.text}
                </p>
                <div className="commonBorder"></div>
            </div>
            <div className="row">
	           <div className="col-6">	

	           </div>
	           <div className="col-6">	
	           
	           </div>	
            </div>
          </div>			
		</div>
	)
}

export default About