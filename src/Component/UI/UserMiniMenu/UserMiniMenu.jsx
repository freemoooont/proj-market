import React, {useState} from "react"
import Loader from "react-loader-spinner";

import './userminimenu.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const UserMiniMenu = React.memo(function UserMiniMenu ( { ico, onClickHandle, isLogin } ){
    console.log(isLogin)

    const [loading, setLoading] = useState(false);

    return(
        <div className="user__menu">
            {
                loading ?
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={59}
                        width={59}
                        timeout={3000}
                    />
                    :
                !isLogin ?
                    <button onClick={()=>{
                        setLoading(true)
                        setTimeout(
                            onClickHandle
                        ,3000)
                    }}>
                        Войти
                    </button>
                    : <img src={`/${ico}`}/>
            }
        </div>
    )
})

export default UserMiniMenu;