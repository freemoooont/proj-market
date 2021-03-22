import React, { useState, useEffect } from 'react'
import './dropdownmenu.css'
import { animated, useSpring, config } from "react-spring";

function DropdownMenu(props){

    const {menuNames} = props;

    const menuRef = React.useRef();

    const [isOpen, setOpen] = useState(false);

    //анимация меню
    const menuContent = useSpring({
        transform: isOpen ? "translate3D(0,0,0)" : "translate3D(0,-40px,0",
        opacity: isOpen ? 1 : 0,
        config: config.wobbly
    })

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
            <button onClick={() => setOpen(!isOpen)} className={!isOpen ? `dropdown-menu__btn`:`dropdown-menu__btn-active`}>{props.btnName}</button>
                <animated.div style={menuContent} className='dropdown-menu__content' >
                { isOpen ?
                    menuNames.map((item, index) => {
                        return (
                            <a key={index} href='#'>{item}</a>
                        )
                    }) : null
                }
                </animated.div>
        </div>
    )
}

export default DropdownMenu;