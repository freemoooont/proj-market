import axios from "axios";

export const fetchUser = (id) => dispatch => {
    axios
        .get('http://localhost:3000/db.json')
        .then(( {data} ) => {
            dispatch(setUser(data.users[id]))
            dispatch(setLogin(true))
        })
}

export const setUser = (items) => ({
    type: 'SET_USER',
    payload: items
});

export const setLogin = (payload) => ({
    type: 'SET_LOGIN',
    payload
})

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})

export const selectProj = (id) => ({
    type: 'SELECT_PROJ',
    payload: id
})