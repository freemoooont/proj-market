import axios from "axios";

export const fetchUser = (id) => dispatch => {
    // dispatch(({
    //     type: 'SET_LOADED',
    //     payload: false
    // }))

    axios
        .get('http://localhost:3000/db.json')
        .then(( {data} ) => {
            dispatch(setUser(data.users[id]))
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