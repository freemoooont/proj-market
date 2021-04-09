import React, {Fragment, useCallback } from 'react'
import { Route, Link } from 'react-router-dom'

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
    const isLoaded = useSelector ( ({ user }) => user.isLoaded);


    const onEnterHandler = useCallback  ( ()=> {
         dispatch(fetchUser(0))
    },[])

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
            <TopMenu />
            <Route path="/" component={Home} exact />
            <Route path="/project/:projId" component={Project} exact/>
            <Route path="/profile" component={Profile}/>
            <Footer />
        </Fragment>
    )
}

export default App;
