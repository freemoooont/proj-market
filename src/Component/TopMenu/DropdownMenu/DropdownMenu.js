import React, { useState, useEffect } from 'react'
import './dropdownmenu.css'
// import { useSpring, config } from "react-spring";
import {Link} from "react-router-dom"

function DropdownMenu(props){


    const menuRef = React.useRef();

    const [isOpen, setOpen] = useState(false);

    //анимация меню
    // const menuContent = useSpring({
    //     transform: isOpen ? "translate3D(0,0,0)" : "translate3D(0,-40px,0",
    //     opacity: isOpen ? 1 : 0,
    //     config: config.stiff
    // })

    const handleClickOutside = (event) =>{
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(menuRef.current)) {
            setOpen(false);
        }
    }

    useEffect(()=>{
        document.body.addEventListener('click', handleClickOutside);
    },[]);

    return(
        <div ref={menuRef} className="top__menu--dropdown-menu">
            <Link to={props.uri}>
                <button onClick={() => setOpen(!isOpen)} className={props.location === props.uri ? `dropdown-menu__btn-active`:`dropdown-menu__btn`}>
                    {props.btnName}
                </button>
            </Link>

        </div>
    )
}

export default DropdownMenu;

{/*<animated.div style={menuContent} className='dropdown-menu__content' >*/}
{/*{ isOpen ?*/}
{/*    menuNames.map((item, index) => {*/}
{/*        return (*/}
{/*            <a key={index} href='#'>{item}</a>*/}
{/*        )*/}
{/*    }) : null*/}
{/*}*/}
{/*</animated.div>*/}