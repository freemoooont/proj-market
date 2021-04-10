import { combineReducers } from 'redux';

import cards from './cards'
import project from './project'
import user from './user'
import cardsOnProfile from './cadsOnProfile'

const rootReducer = combineReducers({
    cards: cards,
    user: user,
    project: project,
    cardsOnProfile: cardsOnProfile
});

export default rootReducer;