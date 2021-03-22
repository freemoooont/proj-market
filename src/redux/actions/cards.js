export const setCards = (items) => ({
    type: 'SET_CARDS',
    payload: items
});

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});