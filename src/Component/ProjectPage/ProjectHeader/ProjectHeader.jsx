import React from "react";

import "./projectheader.css"

function ProjectHeader({srcHeaderImg, author, brief, title }) {
    console.log(srcHeaderImg)

    React.useEffect(()=>{
        console.log(author)
    },[])

    return(
        <section className="project__header">
            <div className="project__header--wrapper">
                <img className="proj__head--back" src={`http://localhost:3000/${srcHeaderImg}`}/>
                <div className="project__title"><h1>{title}</h1></div>
            </div>

        </section>
    )
}

export default ProjectHeader;