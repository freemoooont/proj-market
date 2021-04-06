import { combineReducers } from 'redux';

import cards from './cards'
import project from './project'

const rootReducer = combineReducers({
    cards: cards,
    project: project
});

export default rootReducer;