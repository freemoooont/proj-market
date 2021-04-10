import React from "react";

function Deadlines({deadlines}){
    return(
        <div>
            <h2 className="deadline__label">Сроки</h2>
            <table>
            {deadlines.map((item,idx) => {
                return (
                        <tr key={idx}>
                            <td>{ item.title }</td>
                            <td>{ item.date }</td>
                        </tr>
                )
            })}
            </table>
        </div>
    )
}

export default Deadlines;