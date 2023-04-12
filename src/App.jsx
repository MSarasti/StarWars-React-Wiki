import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import routes from './config/routes'

function App() {

	return (
		<div className="App">
		<nav>
			<ul id="navigation">
				<li>
				<Link to="/">Home</Link>
				</li>
				<li>
				<Link to="/people">People</Link>
				</li>
				<li>
				<Link to="/ship">Starship</Link>
				</li>
				<li>
				<Link to="/planet">Planet</Link>
				</li>
				<li>
				<Link to="/login">Login</Link>
				</li>
				<li>
				<Link to="/register">Sign In</Link>
				</li>
			</ul>
		</nav>
		{routes}
		</div>
	)
}

export default App
