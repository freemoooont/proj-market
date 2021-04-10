import React from "react";

function Deadlines({deadlines}){
    return(
        <div>
            <h2 className="deadline__label">Сроки</h2>
            <table>
            {deadlines.map((dedline) => {
                return (
                        <tr key={dedline.id}>
                            <td>{ dedline.title }</td>
                            <td>{ dedline.date }</td>
                        </tr>
                )
            })}
            </table>
        </div>
    )
}

export default Deadlines;