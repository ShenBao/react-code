
import {
    CHNAGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_TODO_ITEM
} from './actionTypes'

import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHNAGE_INPUT_VALUE,
    value
})

export const getAddToDoItemAction = () => ({
    type: ADD_TODO_ITEM,
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_TODO_ITEM,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('./list.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
        });
    }
}

