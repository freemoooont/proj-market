import React from "react";
import "./Button.css";

function Button ({txt}){
    return (
        <div>
            <button className="button">{txt}</button>
        </div>
    )
}

export default Button;