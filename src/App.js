import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import { Route } from 'react-router-dom'


import Slider from './Component/Slider/Slider'
import TopMenu from './Component/TopMenu/TopMenu'
import UserMiniMenu from './Component/UI/UserMiniMenu/UserMiniMenu'
import MainCard from './Component/ProjectCards/MainCard/MainCard'

import { Home } from './pages'

import './App.css'

function App( ) {

    return (
        <div className="wrapper">
            <UserMiniMenu />
            <TopMenu />
            <Route path="/" component={Home} exact />
        </div>
    )
}

export default App;
