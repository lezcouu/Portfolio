import React from 'react'
import "./Pdf.css"
import Archivo from "../Pdf/David_Lezcano_CV.pdf"


const Pdf = () => {
    return (
        <div className="pdf">
            <object
                data={Archivo}
                type="application/pdf"
                width="100%"
                height="100%"
                >

            </object>
            
        </div>
    )
}

export default Pdf
