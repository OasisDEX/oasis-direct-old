import {combineReducers} from 'redux';
import config from "./config";

const initialSelection = {
	base: {},
	quote: {},
};


const tokens = (state = config.tokens.kovan, action) => state;
const selected = (state = initialSelection, action) => {
	switch (action.type) {
		case("SELECT_BASE"):
			return {...state, base: action.token};
		case("SELECT_QUOTE"):
			return {...state, quote: action.token};
		default:
			return state;
	}
};

export default combineReducers({
	tokens,
	selected,
});