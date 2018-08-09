import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	login: false
});

export default (state = defaultState, action) => {
	const newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case constants.CHANGE_LOGIN:
			newState.login = action.value;
			return newState;
		case constants.LOGOUT:
			newState.login = action.value;
			return newState;
		default:
			return state;
	}
}