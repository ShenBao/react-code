import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import axios from 'axios';

import { INIT_LIST_ACTION } from './actionTypes'

import {
    getInitListAction
} from './actionCreator'


function* getInitList() {

    try {
        const res = yield axios.get('./list.json');
        const action = getInitListAction(res.data);
        yield put(action)
    } catch (error) {
        console.log(error);
        
    }

}

function* mySaga() {
    yield takeLatest(INIT_LIST_ACTION, getInitList);
}

export default mySaga;
 