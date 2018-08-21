import { combineReducers } from 'redux';

import { homeReducers,loginReducers } from '../reducers'

const reducer = combineReducers({
	home: homeReducers,
	login: loginReducers
});

export default reducer;
