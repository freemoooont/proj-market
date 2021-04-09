import React from "react";

import "./projectheader.css"

function ProjectHeader({srcHeaderImg, name, brief, title, ico }) {

    return(
        <section className="project__header">
            <div className="project__header--wrapper">
                <img className="proj__head--back" src={`http://localhost:3000/${srcHeaderImg}`}/>
                <div className="project__header--info">
                    <div className="project__title"><h1>{title}</h1></div>
                    <div className="project__brief">{brief}</div>
                    <img className="project__header_-author--ico" src={`/${ico}`}/>
                    <div className="project__author">{name}</div>
                </div>
            </div>

        </section>
    )
}

export default ProjectHeader;