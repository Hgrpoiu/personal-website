import Projects from "./pages/Projects";
import Construction from "./pages/Construction";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import './style.css'

function App() {
    //Unprotected data incoming!!
    const facts=[
                {name: "I love to bicycle!",
                 body: "I love bicycling, it's how I get around. Usually for school I end up biking 4 miles, but on days where I need to go back and forth I've done as much as 12 miles."},
                {name: 'I love learning',
                 body: 'Weirdly enough, because most of elementary school was spent learning to read without glasses. When I could see, the first taste of science had me hooked.'},
                {name: 'I still have my baby teeth',
                 body: 'For some reaosn, people don\'t like to see them'},
                {name: 'I\'m kind of a workaholic',
                 body: 'Or maybe a masochist, because althought I havne\'t bitten off more than I can check yet, I like to push it!'},
                {name: 'I believe in effort',
                 body: 'What\'s that mean? Well, I don\'t like the idea that someone can be considered dumb, due to my own background. I believe that anyone, with determination, can educate themself and become proficient in anything. That does not mean it will take the same effort for everyone, but rather that it is achievable by anyone. People can do dumb things, or not know things, but that is temporary. The capacity to learn is within everyone, people should be treated as such.'},
                {name: 'I believe in UBI',
                 body: 'Why? In short, despite the misinformation, poverty is not the result of poor character (thanks Margret Thatcher) but rather poor circumstance, bad systems, and generational inequality. Being poor, in short, is expensive for a number of reasons. There is no ability to think in the long term due how pressing the short term is. In addition to this, many welfare systems are poorly thought our systems that force people into poverty traps. Welfare in America shuts off at a certain threshold, which usually means that it makes more sense to stay unemployed than employed. UBI replaces the overhead from these systems and the poverty trap. How: UBI provides income unconditionally (eliminating a poverty trap) and universally (less overhead due to not considering who gets it). For those who need it, it should provide the basics and nothing more. This motivates the poorest to not rely on it. For the rice or middle class, this is extra money to spend on whatever they like, creating more jobs.'}]

    const projects=[{tittle:"Full stack Course",
                     description:"I took a course offered by the University of Helsinki to learn how to build a website at every level. I learned React, React-thunk, Jest, Nodejs, and a bunch of other libaries/frameworks/technologies. I'm only able to write this website because of it :) !"},
                    {tittle:"Moorse Code Kit",
                     description:"In a group of three I helped to design and code a low-level microcontroller to encode and decode moorse code messages."}]
	return (
		<div>
			<NavBar />
			<Routes>
				<Route
					path={"/projects"}
					element={<Projects projects={projects}/>}
				/>
				<Route
					path={"/construction"}
					element={<Construction />}
				/>
				<Route path={"/about"} element={<About facts={facts}/>} />
			</Routes>
		</div>
	);
}

export default App;
