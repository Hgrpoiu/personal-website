import Projects from "./pages/Projects";
import Construction from "./pages/Construction";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route
					path={"/projects"}
					element={<Projects />}
				/>
				<Route
					path={"/construction"}
					element={<Construction />}
				/>
				<Route path={"/about"} element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
