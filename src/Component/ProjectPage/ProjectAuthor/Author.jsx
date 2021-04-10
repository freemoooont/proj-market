import React from "react";
import './Author.css'

function Author({author}){
    return(
      <div>
        <div className="author_info">
          <div>
              <img className="author_icon" src={`/${author.ico}`} />
          </div>
          <div className="author_name_and_position">
            <p>{author.name}</p>
            <p>{author.position}</p>
            <p>Связь</p>
            <p>{ author.malito }</p>
          </div>
          <div>
            <p>О себе</p>
            <p>{ author.desc }</p>
          </div>
        </div>
      </div>
    )
}

export default Author;