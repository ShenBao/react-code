
import { fromJS } from 'immutable';

import {
    actionTypes
} from './index'

const defaultState = fromJS({
    inputValue: 'React',
    list: [
        'Hello',
        'React!'
    ]
});


export default (state = defaultState, action) => {

    if (action.type === actionTypes.CHNAGE_INPUT_VALUE) {
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.inputValue = action.value;
        // return newState;
        return state.set('inputValue', action.value);
    }

    if (action.type === actionTypes.ADD_TODO_ITEM) {
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.list.push(state.inputValue);
        // newState.inputValue = ''
        // return newState;
        return state.merge({
            list: state.get('list').push(state.get('inputValue')),
            inputValue: ''
        });
    }

    if (action.type === actionTypes.DELETE_TODO_ITEM) {
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.list.splice(action.index, 1);
        // return newState;
        return state.merge({
            list: state.get('list').splice(action.index, 1)
        });
    }

    return state;
}
