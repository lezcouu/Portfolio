import React from 'react'

const Nav = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar_container">
				<ul className="navbar_left">
					<div className="navbar_left-logo">
						<img src="https://images.alphacoders.com/569/thumb-1920-569097.jpg" alt="" />
					</div>
				</ul>
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
				</div>
			</div>
		</nav>
	)
}

export default Nav