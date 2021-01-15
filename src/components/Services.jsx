import React, { useState } from 'react'
import {
    FaGithub,
    FaBrush,
    FaMedapps,
    FaCoins,
    FaReact,
    FaVideo
} from "react-icons/fa"

const Service = () => {
    
    const [header] = useState({
        mainHeader:"SERVICIOS",
        subHeading: "Mis Servicios",
        text: "Tuve la oportunidad de tener diversas experiencias ademas de ser desarrollador,\
         que me permiten ofrecer mas servicios."
    })
    const [state] = useState([
        {
            id: 1,
            icon:'FaGithub', 
            heading: 'Desarrollo web', 
            text: 'Tengo conocimientos y experiencia certificada en Html, Css, Javascript y Postgresql.'
        },
        {
            id: 2,
            icon:'FaBrush', 
            heading: 'UX', 
            text: 'Si no sabes como llegar al usuario, cuento con experiencia para hacer una app de impacto.'
        },
        {
            id: 3,
            icon:'FaMedapps', 
            heading: 'Soluciones', 
            text: 'Si tenes un problema, tengo un equipo apto para idear soluciones, Desarrollo de software, \
            Electricidad, Plomeria, Mecanica Ligera, Liderazgo'
        },
        {
            id: 4,
            icon:'FaCoins', 
            heading: 'Soluciones', 
            text: 'Desarrolle aplicaciones y tengo la experiencia que necesitas en bases de datos, especialmente \
            en Sql.'
        },        
        {
            id: 5,
            icon:'FaReact', 
            heading: 'React', 
            text: 'No solo Reactjs sino que tambien pude adquirir experiencia trabajando con React Native, por \
            el momento usando Expo.'
        },
        {
            id: 6,
            icon:'FaVideo', 
            heading: 'Ediciones', 
            text: 'Tambien cuento con un grupo especializado en edición de videos e imagenes, queres un modelo pero \
            no sabes como hacerlo, lo solucionamos.'
        }
    ])
    return (
        <div className="services">
            <div className="container">
                <div className="services_header">
                    <div className="common">
                        <h3 className="heading">
                            {header.mainHeader}
                        </h3>
                        <h1 className="mainHeader">
                            {header.subHeading}
                        </h1>
                        <p className="mainContent">
                            {header.text}
                        </p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="row bgMain">
                        {state.map((elem, i) =>{
                            return(
                            <div key={i} className="col-4 bgMain">
                            <div className="services_box">
                            <div className="commonIcons">
                            {elem.icon} 
                            </div>
                            <div className="services_box-header">
                                {elem.heading}
                            </div>
                            <div className="services_box-p">
                                {elem.text}
                            </div>
                            </div>
                        </div>)
                        })}                        
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default Service
