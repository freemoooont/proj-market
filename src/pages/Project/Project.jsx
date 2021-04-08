import React from "react";
import { ProjectHeader, ButtonUI, Deadlines} from "../../Component";

import { useParams } from "react-router-dom";

import "./project.css"
import { useDispatch, useSelector } from "react-redux"
import { fetchProject } from "../../redux/actions/project";

function Project(){
    const {projId} = useParams();

    const dispatch = useDispatch();
    const state = useSelector( ( {project} ) => project.items);
    const isLoaded = useSelector(({project})=> project.isLoaded)

    const author = isLoaded ? {...state.author} : "LOH PIDOR";
    const desc = isLoaded ? state.desc : "hui, a ne desc";
    const deadlines = isLoaded ? state.deadlines : null;

    console.log(desc)
    React.useEffect(()=>{
        dispatch(fetchProject(projId-1));
    },[])

    React.useEffect(()=>{
        console.log(isLoaded ? author.name : "yA pidORAS")
    },[state])

    console.log(state);
    return(
        <div>
            <ProjectHeader srcHeaderImg={state.img_header} name={author.name} brief={state.brief_desc} title={state.title} ico={author.ico}/>
            <h2 className="project__desc--label">Описание проекта</h2>
            {
                isLoaded ?
                desc.map((obj, idx)=>
                    <p key={idx}>{obj.p}</p>
                )
                    : "PIDORAS EBANIY"
            }
            <ButtonUI txt={"Записаться на проект"} />
            <img className="project--image" src={`/${state.img_side}`} />
            <Deadlines deadlines={deadlines}/>
        </div>
)
}

export default Project;