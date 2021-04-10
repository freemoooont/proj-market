import React, {Fragment, useCallback } from 'react'
import { Route, Link, useLocation } from 'react-router-dom'


import { TopMenu, UserMiniMenu } from './Component'
import { Footer } from './Layouts'
import { Home, Project, Profile } from './pages'


import './App.css'
import {useDispatch, useSelector} from "react-redux";

import { fetchUser } from './redux/actions/user'


function App( ) {
    const dispatch = useDispatch();
    const isLogin = useSelector( ({ user }) => user.isLogin);
    const user = useSelector(( { user } ) => user.items);
    const isLoadedProj = useSelector ( ({ project }) => project.isLoaded);


    const onEnterHandler = useCallback  ( ()=> {
         dispatch(fetchUser(0))
    },[])

    let location = useLocation()
    console.log(isLogin)

    return (
        <Fragment>
            {
                    isLogin ?
                        <Link to="/profile">
                            <UserMiniMenu isLogin = {isLogin} ico={user.userImg}/>
                        </Link>
                        : <UserMiniMenu
                            isLogin = {isLogin}
                            onClickHandle={onEnterHandler}
                        />
            }
            {
                location.pathname != "/project/1" ?
                <TopMenu/>
                :null
            }

            <Route path="/" component={Home} exact />
            <Route path="/project/:projId" component={Project} exact/>
            <Route path="/profile" component={Profile} exact/>
            <Footer />
        </Fragment>
    )
}

export default App;
