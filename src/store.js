import { combineReducers, createStore } from 'redux';
import lastLetterGameApp from './reducers/';

const reducers = combineReducers({
    lastLetterGameApp,
});

export default createStore(reducers);