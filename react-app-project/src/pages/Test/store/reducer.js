import { fromJS } from 'immutable';

import {
    actionTypes,
} from './index'


const defaultState = fromJS({
    inputValue: 'React test',
});

export default (state = defaultState, action) => {

    if (action.type === actionTypes.CHNAGE_INPUT_VALUE) {
        return state.set('inputValue', action.value);
    }

    return state;
}
