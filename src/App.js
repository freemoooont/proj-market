import React from 'react'
import { Route } from 'react-router-dom'


import TopMenu from './Component/TopMenu/TopMenu'
import UserMiniMenu from './Component/UI/UserMiniMenu/UserMiniMenu'


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
