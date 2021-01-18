import React, { useState } from 'react'

const Prices = () => {
    const [header] = useState({
        mainHeader:"Proyectos",
        subHeading: "Productos",
        text: "Puedes encontrar el precio de diferentes productos ya elaborados a disposición o tareas personalizadas, tambien podes alquilar servicios elaborados para que te generen la mayor ganancia E-commerce y Smartbyte, consultame"
    })
    const [ state ] = useState([
        {
            id:1, 
            heading: "Pagina web basica", 
            price: "20 mil", 
            msg1:"Pagina web para tu negocio", 
            msg2: "1er Año hosting cubierto", 
            msg3: "100 fotos"
        },
        {
            id:2, 
            heading: "E-commerce", 
            price: "40 mil", 
            msg1:"Tu negocio-tu e-commerce", 
            msg2: "1er Año hosting cubierto", 
            msg3: "100 productos cargados"
        },
        {
            id:3, 
            heading: "Mercado Pago", 
            price: "8 mil", 
            msg1:"Si tenes tu tienda online", 
            msg2: "Agrega metodo de pago", 
            msg3: "MERCADO PAGO"
        },
        {
            id:4, 
            heading: "Smartbyte E", 
            price: "4 mil", 
            msg1:"Queres tener tu tienda online", 
            msg2: "Maxima gestion de negocio", 
            msg3: "Contratas ambos servicios"
        }
    ])
    return (
        <div className="prices">
            <div className="container">
                <div className="common">
                    <h3 className="heading">{header.mainHeader}</h3>
                    <h1 className="mainHeader">{header.subHeading}</h1>
                    <p className="mainContent">{header.text}</p>
                <div className="commonBorder"></div>
                </div>
                    <div className="row">
                        {state.map(price => (
                            <div className="col-4" key={price.id}>
                            <div className="price">
                                <div className="price_section">
                                    <div className="priceHeading">{price.heading}</div>
                                    <div className="price_rs">
                                        <span>$</span> {price.price}
                                    </div>
                                    <ul>
                                        <li>{price.msg1}</li>
                                        <li>{price.msg2}</li>
                                        <li>{price.msg3}</li>
                                    </ul>
                                    <div className="price_btn">
                                        <a href="http://smartbyte.ml/" className="btn btn-outline">Consultar</a>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

export default Prices
