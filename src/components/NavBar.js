import Projects from "../pages/Projects"
import About from "../pages/About"
import {Route, Routes, Link} from "react-router-dom"


function NavBar(props){
	return(
		<div>
			<Link to="/about">About</Link>
			<Link to="/projects">Projects</Link>
			<Link to="/construction">Construction</Link>
		</div>
	)
}

export default NavBar;
