import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './topmenu.css'

import MenuIco from './MenuIco/MenuIco'
import DropdownMenu from "./DropdownMenu/DropdownMenu";

import logoSvg from '../../assets/img/LogoIco1.svg'
import logoIrnitu from '../../assets/img/logo_irnitu.png'

import background1 from '../../assets/img/Top_menu_background.svg'
import background2 from '../../assets/img/Top_menu_background_2.svg'

function TopMenu(){
    const menu =
        {
            menu1: {
                btnName: 'Главная',
                uri: '/',
                menu1: ['Пункт меню','Пункт меню','Пункт меню'],
                background: background1
            },
            menu2: {
                btnName: 'Новости',
                uri: '/news',
                menu2: ['Пункт меню', 'Пункт меню', 'Пункт меню'],
                background: background2
            },
            menu3: {
                btnName: 'Галлерия проектов',
                uri: '/gallery',
                menu3: ['Пункт меню','Пункт меню'],
                background: background2
            },
            menu4: {
                btnName: 'О ярмарке',
                uri: '/about',
                menu4: ['Пункт меню', 'Пункт меню'],
                background: background1
            }
        }

    let location = useLocation();

    return(
        <div className="top__menu--wrapper">
            <div className="top__menu--logo-wrapper">
                <Link to = "/"><MenuIco logoSvg={logoSvg}/></Link>
                <div className="top__menu--logo-vert-line"></div>
                <MenuIco logoSvg={logoIrnitu}/>
            </div>
            <DropdownMenu uri={menu.menu1.uri} location={location.pathname} background={menu.menu1.background} btnName={menu.menu1.btnName} menuNames={menu.menu1.menu1}/>
            <DropdownMenu uri={menu.menu2.uri} location={location.pathname} background={menu.menu2.background} btnName={menu.menu2.btnName} menuNames={menu.menu2.menu2}/>
            <DropdownMenu uri={menu.menu3.uri} location={location.pathname} background={menu.menu3.background} btnName={menu.menu3.btnName} menuNames={menu.menu3.menu1}/>
            <DropdownMenu uri={menu.menu4.uri} location={location.pathname} background={menu.menu4.background} btnName={menu.menu4.btnName} menuNames={menu.menu4.menu2}/>
           
        </div>
    )
}

export default TopMenu;