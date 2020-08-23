import {combineReducers} from 'redux';

import placesReducer from './reducer_v1';

export default combineReducers({places : placesReducer});
