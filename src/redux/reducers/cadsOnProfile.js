const initialState = {
    items: [],
    priority: [],
    isLoaded: false
}

const cardsOnProfile = (state = initialState, action) =>{
    switch (action.type){
        case 'SET_SEL_PROJ' :
            return{
                ...state,
                items: action.payload,
                isLoaded: true
            }
    }
}