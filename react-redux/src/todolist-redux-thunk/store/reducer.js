
import {
    CHNAGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
} from './actionTypes'

const defaultState = {
    inputValue: 'React',
    list: [1, 2]
}

export default (state = defaultState, action) => {

    if (action.type === CHNAGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = ''
        return newState;
    }

    if (action.type === DELETE_TODO_ITEM) {
        console.log(action.index)
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }

    return state;
}