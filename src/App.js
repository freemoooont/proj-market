import React, { Fragment } from 'react'
import { Route, useLocation } from 'react-router-dom'

import { TopMenu, UserMiniMenu } from './Component'
import { Footer } from './Layouts'
import { Home, Project } from './pages'


import './App.css'

function App( ) {

    let location = useLocation()
    console.log(location)

    return (
        <Fragment>
            <UserMiniMenu />
            {location.pathname != "/project/1" ?
                <TopMenu/>
                :null
            }
            <Route path="/" component={Home} exact />
            <Route path="/project/:projId" component={Project} exact/>
            <Footer />
        </Fragment>
    )
}

export default App;
