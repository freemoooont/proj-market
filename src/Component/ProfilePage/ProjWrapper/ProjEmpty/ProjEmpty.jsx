import React from 'react';
import './projempty.css';
import {Link} from "react-router-dom";

function ProjEmpty(){
    return(
        <div className="profile__proj">
            <div className="proj__empty--info">
                У вас пока нет проектов, вы можете выбрать 3 проекта и присвоить им разные приоритеты.
            </div>
            <div className="proj__empty--btn">
                <Link to="/">
                    <button>Перейти на страницу проектов</button>
                </Link>
            </div>
        </div>
    )
}

export default ProjEmpty;