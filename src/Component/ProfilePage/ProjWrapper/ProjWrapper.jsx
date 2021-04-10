import React from 'react';
import './projwrapper.css';

import ProjEmpty from "./ProjEmpty/ProjEmpty";
import {ExtCard} from "../../../Component"

function ProjWrapper( {projsId} ){
    console.log(projsId)
    return(
        <div className="profile__proj">
            { projsId.length === 0 ?
                <ProjEmpty/>
                : <ExtCard/>
            }
        </div>
    )
}

export default ProjWrapper;