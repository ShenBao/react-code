import axios from 'axios';
import {CHANGE_LIST} from './constants';

const changeHomeList = list => ({
  type: CHANGE_LIST,
  list,
});

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get ('/api/list.json').then (res => {
      const {data: list} = res.data;
      dispatch (changeHomeList (list));
    });
  };
};
