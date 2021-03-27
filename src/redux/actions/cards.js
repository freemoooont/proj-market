import axios from "axios";

export const fetchCards = () => dispatch => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
        dispatch(setCards(data.cards))
    })
};

export const setCards = (items) => ({
    type: 'SET_CARDS',
    payload: items
});

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});