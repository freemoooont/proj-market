import React, { Fragment } from "react";
import { ProjectHeader, ButtonUI, Deadlines, People } from "../../Component";

import Loader from "react-loader-spinner";

import { useParams } from "react-router-dom";

import "./project.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { useDispatch, useSelector } from "react-redux"
import { fetchProject } from "../../redux/actions/project";
import { selectProj }  from "../../redux/actions/user";

function Project() {
    const { projId } = useParams();

    const dispatch = useDispatch();
    const state = useSelector(({ project }) => project.items);
    const isLoaded = useSelector(({ project }) => project.isLoaded)

    const author = isLoaded ? { ...state.author } : "LOH PIDOR";
    const desc = isLoaded ? state.desc : "hui, a ne desc";
    const deadlines = isLoaded ? state.deadlines : null;
    const people = isLoaded ? state.people : null;
    const idProj = isLoaded ? state.id : null

    React.useEffect(() => {
        dispatch(fetchProject(projId - 1));
    }, [])



    const onSelectPorjHandle = (id)=> {
        console.log('Я вызвался!')
        dispatch(selectProj(id))
    }


    return (
        <div>
            { isLoaded ?
                <Fragment>
                    <ProjectHeader
                        srcHeaderImg={state.img_header}
                        name={author.name}
                        brief={state.brief_desc}
                        title={state.title}
                        ico={author.ico} />
                    <h2 className="project__desc--label">Описание проекта</h2>
                    {
                        desc.map((obj, idx) =>
                            <p key={idx}>{obj.p}</p>
                        )
                    }
                    <button
                        onClick={()=>onSelectPorjHandle(idProj)}
                    >
                        Записаться на проект
                    </button>
                    <img className="project--image" src={`/${state.img_side}`} />
                    <Deadlines deadlines={deadlines} />
                    <People people={people} />
                </Fragment>
                : <div>
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={59}
                        width={59}
                        timeout={3000}
                    />
                </div>}

        </div>
    )
}

export default Project;