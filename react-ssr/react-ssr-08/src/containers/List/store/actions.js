import axios from 'axios';
import {CHANGE_LIST} from './constants';

const changeList = list => ({
  type: CHANGE_LIST,
  list,
});

export const getList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get ('/api/list.json').then (res => {
      const {data: list = []} = res.data;
      dispatch (changeList (list));
    });
  };
};
