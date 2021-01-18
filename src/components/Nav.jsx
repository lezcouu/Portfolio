import React from 'react'
import fenix from "../assets/fenix.jpeg"

const Nav = () => {
	const [state, setState] = React.useState(false)
	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar_container">
					<ul className="navbar_left">
						<div className="navbar_left-logo">
							<img src={fenix} alt="" />
						</div>
					</ul>
					{state ? (
					<ul className="navbar_right">
						<li>
							<a href="#Banner">Principal</a>
						</li>
						<li>
							<a href="#Services">Servicios</a>
						</li>
						<li>
							<a href="#About">Acerca de mi</a>
						</li>
						<li>
							<a href="#Skills">Habilidades</a>
						</li>
						<li>
							<a href="#Prices">Productos</a>
						</li>
						<li>
							<a href="#Contact">Redes</a>
						</li>
					</ul>):("")}
					<ul className="navbar_rightd">
						<li>
							<a href="#Banner">Principal</a>
						</li>
						<li>
							<a href="#Services">Servicios</a>
						</li>
						<li>
							<a href="#About">Acerca de mi</a>
						</li>
						<li>
							<a href="#Skills">Habilidades</a>
						</li>
						<li>
							<a href="#Prices">Productos</a>
						</li>
						<li>
							<a href="#Contact">Redes</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="toggle" onClick={() => setState(!state)}>
				P
			</div>
		</nav>
	)
}

export default Nav