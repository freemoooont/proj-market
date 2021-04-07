import React, {Fragment, useCallback} from 'react'
import { Route } from 'react-router-dom'

import { TopMenu, UserMiniMenu } from './Component'
import { Footer } from './Layouts'
import { Home } from './pages'

import './App.css'
import {useDispatch, useSelector} from "react-redux";

import { fetchUser } from './redux/actions/user'
import {useCookies} from "react-cookie";

function App( ) {
    const dispatch = useDispatch();
    const user = useSelector(( { user } ) => user.items);
    const isLogin = useSelector( ({ user }) => user.isLogin);

    const [usrCookies, setUsrCookie, removeCookie] = useCookies()

    React.useEffect(()=>{
        dispatch(fetchUser(0))
    },[])

    const onEnterHandler = useCallback(() =>{
        setUsrCookie()
    },[] )

    return (
        <Fragment>
            <UserMiniMenu />
            <TopMenu />
            <Route path="/" component={Home} exact />
            <Footer />
        </Fragment>
    )
}

export default App;
