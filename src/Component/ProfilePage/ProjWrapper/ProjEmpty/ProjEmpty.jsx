import React from 'react';
import './projempty.css';
import {Link} from "react-router-dom";

function ProjEmpty(){
    return(
       <div className="proj__empty--wrap">
            <div className="proj__empty--info">
                У вас пока нет проектов, вы можете выбрать 3 проекта и присвоить им разные приоритеты.
            </div>
            <Link to="/" className="proj__empty--btn">
                Перейти на страницу проектов
            </Link>
       </div>
    )
}

export default ProjEmpty;