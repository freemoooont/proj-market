import React from "react"
import './userminimenu.css'

import userImg from '../../../assets/img/users/user_ico_dev.svg'

function UserMiniMenu ( { props } ){
    return(
        <div className="user__menu">
            <img src={userImg}/>
        </div>
    )
}

export default UserMiniMenu;