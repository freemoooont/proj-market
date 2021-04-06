import axios from "axios";

export const fetchProject = (id) => dispatch => {
    axios
        .get(
            'http://localhost:3000/db.json'
        )
        .then(
            ({data}) =>{
            dispatch(setProject(data.projects[id]))
        } )
}

export const setProject = (items) => ({
    type: 'SET_PROJECT',
    payload: items
});

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})