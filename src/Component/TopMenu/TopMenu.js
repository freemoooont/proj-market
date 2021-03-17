import React from 'react'
import './topmenu.css'

import MenuIco from './MenuIco/MenuIco'
import DropdownMenu from "./DropdownMenu/DropdownMenu";

import logoSvg from '../../assets/img/LogoIco1.svg'

import background1 from '../../assets/img/Top_menu_background.svg'
import background2 from '../../assets/img/Top_menu_background_2.svg'

function TopMenu(){
    const menu =
        {
            menu1: {
                btnName: 'Кнопка меню',
                menu1: ['Пункт меню','Пункт меню','Пункт меню'],
                background: background1
            },
            menu2: {
                btnName: 'Кнопка меню',
                menu2: ['Пункт меню', 'Пункт меню', 'Пункт меню'],
                background: background2
            },
            menu3: {
                btnName: 'Кнопка меню',
                menu3: ['Пункт меню','Пункт меню'],
                background: background2
            },
            menu4: {
                btnName: 'Кнопк меню',
                menu4: ['Пункт меню', 'Пункт меню'],
                background: background1
            }
        }
    return(
        <div className="top__menu--wrapper">
            <div className="top__menu--logo-wrapper">
                <MenuIco logoSvg={logoSvg}/>
                <div className="top__menu--logo-vert-line"></div>
                <MenuIco logoSvg={logoSvg}/>
            </div>
            <DropdownMenu background={menu.menu1.background} btnName={menu.menu1.btnName} menuNames={menu.menu1.menu1}/>
            <DropdownMenu background={menu.menu2.background} btnName={menu.menu2.btnName} menuNames={menu.menu2.menu2}/>
            <DropdownMenu background={menu.menu3.background} btnName={menu.menu3.btnName} menuNames={menu.menu3.menu3}/>
            <DropdownMenu background={menu.menu4.background} btnName={menu.menu1.btnName} menuNames={menu.menu4.menu4}/>
        </div>
    )
}

export default TopMenu;