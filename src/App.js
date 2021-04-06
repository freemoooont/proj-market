import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import { TopMenu, UserMiniMenu } from './Component'
import { Footer } from './Layouts'
import { Home, Project } from './pages'


import './App.css'

function App( ) {

    return (
        <Fragment>
            <UserMiniMenu />
            <TopMenu />
            <Route path="/" component={Home} exact />
            <Route path="/project/:projId" component={Project} exact/>
            <Footer />
        </Fragment>
    )
}

export default App;
