import {CHANGE_LIST} from './constants'

const defaultState = {
  list: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST: 
        const newState = {
            ...state,
            list: action.list
        };
        return newState;
    default:
      return state;
  }
};
