import axios from "axios";

export const fetchProject = (id) => dispatch => {
    axios
        .get(
            'http://localhost:3000/db.json'
        )
        .then(
            ({data}) =>{
            dispatch(setProject(data.projects[id]));
            dispatch(setAuthor(data.projects[id]["author"]))
        } )
}

export const setProject = (items) => ({
    type: 'SET_PROJECT',
    payload: items
});

export const setAuthor = (items) => ({
    type: 'SET_AUTHOR',
    payload: items
})
export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})