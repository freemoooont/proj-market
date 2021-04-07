import React from "react";
import { ProjectHeader } from "../../Component";

import { useParams } from "react-router-dom";

import "./project.css"
import { useDispatch, useSelector } from "react-redux"
import { fetchProject } from "../../redux/actions/project";

function Project(){
    const {projId} = useParams();

    const dispatch = useDispatch();
    const state = useSelector( ( {project} ) => project.items);

    const author = useSelector( ( {project} ) => project.author)
    console.log(author.name)

    React.useEffect(()=>{
        dispatch(fetchProject(projId-1));
        console.log(state);
    },[])

    React.useEffect(()=>{
        console.log(state.author)
    },[state])

    return(
        <div>
            <ProjectHeader/>
            <div>{state.title}</div>
        </div>
)
}
export default Project;