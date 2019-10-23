import {put, takeLatest} from 'redux-saga/effects';

import axios from 'axios';

import {GET_INIT_LIST} from './actionTypes';

import {getInitListDataAction} from './actionCreator';

function* getInitList () {
  try {
    const res = yield axios.get ('/api/todolist.json');
    const {data} = res.data;
    const action = getInitListDataAction (data);
    yield put (action); // 这里的 put 等价于 store.dispatch;
  } catch (error) {
    console.log (error);
  }
}

// generator 函数
function* mySaga () {
  yield takeLatest (GET_INIT_LIST, getInitList);
}

export default mySaga;
