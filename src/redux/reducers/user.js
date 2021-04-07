const initialState = {
    items : [],
    isLoaded : false,
    isLogin : false
};

const user = (state = initialState, action) => {
    switch (action.type){
        case 'SET_USER' :
            console.log('YA TUT! user')
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
                isLogin: true
            }
        case 'SET_LOADED' :
            console.log('YA TUT! loaded')
            return {
                ...state,
                isLoaded: true
            };
        case 'SET_LOGIN' :
            console.log('YA TUT! login')
            return {
                ...state,
                isLogin: true
            }

        default:
            console.log('YA TUT! default')
            return state;
    }
};

export default user;