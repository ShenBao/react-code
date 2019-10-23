import axios from 'axios';

import {
  CHNAGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_DATA,
} from './actionTypes';

export const getInputChangeAction = value => ({
  type: CHNAGE_INPUT_VALUE,
  value,
});

export const getAddToDoItemAction = () => ({
  type: ADD_TODO_ITEM,
});

export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index,
});

export const getInitListDataAction = list => ({
  type: INIT_LIST_DATA,
  list,
});

export const getTodoList = () => {
  return (dispatch) => {
    axios.get ('/api/todolist.json').then (res => {
      const { data } = res.data;
      const action = getInitListDataAction (data);
      dispatch (action);
    });
  };
};
