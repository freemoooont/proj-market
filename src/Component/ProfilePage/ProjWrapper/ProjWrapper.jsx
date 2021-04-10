import React from 'react';
import './projwrapper.css';

import ProjEmpty from "./ProjEmpty/ProjEmpty";

function ProjWrapper( {projsId} ){
    console.log(projsId)
    return(
        <div className="profile__proj">
            { projsId.length === 0 ?
                <ProjEmpty/>
                : "У вас крутые проекты"
            }
        </div>
    )
}

export default ProjWrapper;