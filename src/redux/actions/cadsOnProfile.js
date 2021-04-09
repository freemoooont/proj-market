import axios from "axios";

export const fetchSelProj = ( id ) => dispatch => {
    axios.get('http://localhost:3000/db.json').then(({data})=>{
        id.map((item)=> dispatch(setSelProj(data[item-1])))

    })
};

export const setSelProj = (items) => ({
    type: 'SET_SEL_PROJ',
    payload: items
});

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})