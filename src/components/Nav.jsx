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
							<a href="">Principal</a>
						</li>
						<li>
							<a href="">Servicios</a>
						</li>
						<li>
							<a href="">Acerca de mi</a>
						</li>
						<li>
							<a href="">Habilidades</a>
						</li>
						<li>
							<a href="">Portfolio</a>
						</li>
						<li>
							<a href="">Blog</a>
						</li>
						<li>
							<a href="">Contacto</a>
						</li>
					</ul>):(
					<ul className="navbar_right">
						<li>
							<a href="">Principal</a>
						</li>
						<li>
							<a href="">Servicios</a>
						</li>
						<li>
							<a href="">Acerca de mi</a>
						</li>
						<li>
							<a href="">Habilidades</a>
						</li>
						<li>
							<a href="">Portfolio</a>
						</li>
						<li>
							<a href="">Blog</a>
						</li>
						<li>
							<a href="">Contacto</a>
						</li>
					</ul>
					)}
				</div>
			</div>
			<div className="toggle" onClick={() => setState(!state)}>
				P
			</div>
		</nav>
	)
}

export default Nav