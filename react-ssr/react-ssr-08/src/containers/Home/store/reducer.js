import {CHANGE_LIST} from './constants'

const defaultState = {
  name: 'Shen Bao',
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
