import {combineReducers} from 'redux';
import config from "./config";


const tokens = (state = config.tokens.kovan, action) => state;

export default combineReducers({
	tokens
});