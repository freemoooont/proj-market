import React from "react"
import './userminimenu.css'

import userImg from '../../../assets/img/users/user_ico_dev.svg'

const UserMiniMenu = React.memo(function UserMiniMenu ( { ico, onClickHandle, isLogin } ){
    console.log(isLogin)
    return(
        <div className="user__menu">
            {
                !isLogin ?
                    <button onClick={onClickHandle}> Войти </button>
                    : <img src={`/${ico}`}/>
            }
        </div>
    )
})

export default UserMiniMenu;