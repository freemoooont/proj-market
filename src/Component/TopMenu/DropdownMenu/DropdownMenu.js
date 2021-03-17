import React, { useState, useEffect } from 'react'
import './dropdownmenu.css'

import Background from '../../../assets/img/Top_menu_background.svg'

function DropdownMenu(props){
    const backiStyle = {
        backgroundImage: `url(${props.background})`
    }

    const menuRef = React.useRef();

    const [open, setOpen] = useState(false);

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
            <button onClick={() => setOpen(!open)} className={!open ? `dropdown-menu__btn`:`dropdown-menu__btn-active`}>{props.btnName}</button>
            <div className={ open ? `dropdown-menu__content`:`dropdown-menu__content_close`} style = { backiStyle }>
                {
                    props.menuNames.map((item,index)=>{
                        return(
                            <a key={index} href='#'>{item}</a>
                        )
                    })
                }

            </div>
        </div>
    )
};

export default DropdownMenu;