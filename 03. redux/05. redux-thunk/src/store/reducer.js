import {
  CHNAGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_DATA,
} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: [],
};

export default (state = defaultState, action) => {
  console.log (state, action);

  if (action.type === INIT_LIST_DATA) {
    const newState = JSON.parse (JSON.stringify (state));
    newState.list = [...action.list];
    return newState;
  }

  if (action.type === CHNAGE_INPUT_VALUE) {
    const newState = JSON.parse (JSON.stringify (state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse (JSON.stringify (state));
    newState.list.push (state.inputValue);
    newState.inputValue = '';
    return newState;
  }

  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse (JSON.stringify (state));
    newState.list.splice (action.index, 1);
    return newState;
  }

  return state;
};
