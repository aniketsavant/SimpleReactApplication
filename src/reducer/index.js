import isLoggedInReducer from './isLoggedIn';
import counterReducer from './counter';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    counter : counterReducer,
    isLoggedIn : isLoggedInReducer
});

export default allReducer;