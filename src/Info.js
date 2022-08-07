import profilePicture from "./img/Profile Picture Julio Morales.jpg"

export default function Info(){
    return(
        <div className="info">
            <img 
                className="profilePicture"
                src={profilePicture}
                alt="Julio Morales" 
            />
            <h1 className="name">Julio Morales</h1>
            <h3>Software QA Engineer</h3>
            <h3>Frontend Developer</h3>
            <h4>Founder of <a href="https://apollox10.com" rel="noreferrer" target="_blank">Apollox10</a></h4>
        </div>
    )
}
