import '../style.css'
function Fact({fact}){
    return(<div class="factCard">
        <h5>{fact.name}</h5>
        <body>{fact.body}</body></div>)
}

export default Fact
