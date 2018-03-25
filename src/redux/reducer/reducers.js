import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Home from '../actions/home/index'

export const reducers = {
    Home
}

export default combineReducers({
    ...reducers,
    routing: routerReducer
})