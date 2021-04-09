const initialState = {
    items : [],
    selectProj: [],
    isLoaded : false,
    isLogin : false
};

const user = (state = initialState, action) => {
    switch (action.type){
        case 'SET_USER' :
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            }
        case 'SET_LOADED' :
            return {
                ...state,
                isLoaded: true
            };
        case 'SET_LOGIN' :
            return {
                ...state,
                isLogin: true
            }
        case 'SELECT_PROJ':
            return {
                ...state,
                selectProj: [...state.selectProj, action.payload]
            }

        default:
            return state;
    }
};

export default user;