import Fact from "../components/Fact"
function About({facts}) {
	return (
		<div>
			<h2>Hi there!</h2>
			<div>
				I'm Joey (Joseph), I'm a computer science /
				computer engineering at UMN-TC. This is my
				homepage -- use it to learn about me!
			</div>
            <h3 class="facts">Joey Facts</h3>
            <div>
                {facts.map((fact)=>{
                    return (<Fact fact={fact}/>)})}
            </div>
		</div>
	);
}

export default About;
