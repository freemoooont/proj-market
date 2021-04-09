import React from "react";

function Deadlines({deadlines}){
    return(
        <div>
            <h2 className="deadline__label">Сроки</h2>
            {
                deadlines?
                    console.log(deadlines)
                    : console.log(deadlines)

            }
        </div>
    )
}

export default Deadlines;