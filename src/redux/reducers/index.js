import { combineReducers } from 'redux';

import cards from './cards'
import project from './project'

import user from './user'

const rootReducer = combineReducers({
    cards: cards,
    user: user,
    project: project
});

export default rootReducer;