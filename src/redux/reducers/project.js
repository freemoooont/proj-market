const initialState = {
    items: [],
    author: [],
    isLoaded: false
}

const project = (state = initialState, action) => {
    switch (action.type){
        case 'SET_PROJECT' :
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            };
        case 'SET_LOADED' :
            return {
                ...state,
                isLoaded: action.payload
            };
        case 'SET_AUTHOR' :
            return {
                ...state,
                author: action.payload
            }

        default:
                return state;
    }
};

export default project;