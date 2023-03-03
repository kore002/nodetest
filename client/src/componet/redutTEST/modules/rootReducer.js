import { combineReducers } from 'redux';
import uriReducer from './uriReducer';
import boardReducer from './boardReducer';
const rootReducer = combineReducers({
    boardReducer,
    uriReducer
});
 
export default rootReducer;