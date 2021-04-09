import React from "react";
import './People.css'

function People({ people }) {
    return (
        <div>
            <h2 className="people__label">Участники</h2>
            {people.map((people) => {
                return (
                    <div className="people_info" key={people.id}>
                        <div>
                            <img className="people_icon" src={`/${people.ico_url}`} />
                        </div>
                        <div>
                            <p>{people.name}</p>
                            <p>{people.position}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default People;