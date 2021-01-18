import React from 'react'
import "./Skills.css"

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <div className="max-width">
            
                <div className="common">
                    <h3 className="heading">habilidades</h3>
                    <h1 className="mainHeader">habilidades blandas, duras y experiencias</h1>
                <div className="commonBorder"></div>
                </div>
                <div className="skills-content">
                    <div className="column left">
                        <p>
                            Estoy acostumbrado al trabajo bajo presión, me
                             destaco por ser una persona muy autodidacta y 
                             absolutamente responsable por las tareas que 
                             realizó. Me gusta conocer a mis compañeros de 
                             trabajo como la persona que son, soy muy amable 
                             y colaborativo creo enormemente en la formación, desarrollo 
                             y potenciación de los grupos de trabajo, creo que todos
                              podemos aprender cada dia algo nuevo. Tambien reconozco 
                              que soy una persona muy entusiasta con mucha energia 
                              que siempre buscara la forma de alcanzar el objetivo
                               propuesto y me encanta estar continuamente en aprendizaje.
                                Mi mayor logro fue ir mejorando mis conocimientos gracias 
                                a los compañeros que me rodeaban los cuales sin lugar a dudas
                                poseian un gran conocimiento.
                        </p>
                    </div>
                    <div className="column right">
                        <div className="bars">
                        <div className="info">
                            <span>HTML </span>
                            <span>80%</span>
                        </div>
                        <div className="line html"></div>
                        </div>
                        <div className="bars">
                        <div className="info">
                            <span>CSS </span>
                            <span>70%</span>
                        </div>
                        <div className="line css"></div>
                        </div>
                        <div className="bars">
                        <div className="info">
                            <span>JavaScript </span>
                            <span>85%</span>
                        </div>
                        <div className="line javascript"></div>
                        </div>
                        <div className="bars">
                        <div className="info">
                            <span>SQL(Postgresql) </span>
                            <span>80%</span>
                        </div>                
                        <div className="line sql"></div>
                        </div>
                        <div className="bars">
                        <div className="info">
                            <span>MONGODB   </span>
                            <span>50%</span>
                        </div>                
                        <div className="line mongodb"></div>
                        </div>
                        <div className="bars">
                        <div className="info">
                            <span>FIREBASE </span>
                            <span>50%</span>
                        </div>                
                        <div className="line firebase"></div>
                        </div>
                        <div className="bars">
                        <div className="info">
                            <span>JAVA </span>
                            <span>10%</span>
                        </div>                
                        <div className="line java"></div>
                        </div>
                        <div className="bars">
                        <div className="info">
                            <span>Office </span>
                            <span>80%</span>
                        </div>                
                        <div className="line office"></div>
                        </div>
                        <div className="bars">
                        <div className="info">
                            <span>Autocad </span>
                            <span>70%</span>
                        </div>
                        <div className="line autocad"></div>
                        </div>
                    </div>
                </div>
            </div>
                        
        </div>
    )
}

export default Skills