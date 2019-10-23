import axios from 'axios';
import {CHANGE_LIST} from './constants';

const changeHomeList = list => ({
  type: CHANGE_LIST,
  list,
});

export const getHomeList = () => {
  return dispatch => {
    return axios.get ('http://localhost:3000/api/list.json').then (res => {
      const {data: list} = res.data;
      dispatch (changeHomeList (list));
    });
  };
};
