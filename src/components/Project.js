import '../style.css'
function Project({ project }) {
    return (
        <div class="projectCard">
            <h5>{project.tittle}</h5>
            <p>{project.description}</p>
        </div> //Maybe include some form of image.
        //It'd be nice if I could demonstrate what it did 
    );
}

export default Project
