import React from "react";
import "./Button.css";

import { useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import { selectProj } from "../../../redux/actions/user";

function Button ({ txt, idProj}){
   const id = useSelector(({project})=>project.items.id)
    const dispatch = useDispatch;
   const [clicked, setClicked] = React.useState(false)
   React.useEffect(()=>dispatch(selectProj(id)),[clicked])


    console.log(id)
    return (
        <div>
            <button
                onClick={()=>setClicked(!clicked)}
                className="button">
                {
                    txt
                }
            </button>
        </div>
    )
}

export default Button;