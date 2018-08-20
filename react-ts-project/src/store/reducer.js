import { combineReducers } from 'redux';

import { homeReducers } from '../reducers'

const reducer = combineReducers({
	home: homeReducers
});

export default reducer;
