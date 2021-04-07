import { combineReducers } from 'redux';

import cards from './cards'
import user from './user'

const rootReducer = combineReducers({
    cards: cards,
    user: user,
});

export default rootReducer;