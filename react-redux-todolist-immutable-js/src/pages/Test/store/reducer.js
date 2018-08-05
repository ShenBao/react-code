import {
    actionTypes,
} from './index'


const defaultState = {
    inputValue: 'test test',
}


export default (state = defaultState, action) => {

    if (action.type === actionTypes.CHNAGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    return state;
}
