
import {
    actionTypes
} from './index'

export const getInputChangeAction = (value) => ({
    type: actionTypes.CHNAGE_INPUT_VALUE,
    value
});

export const getAddToDoItemAction = () => ({
    type: actionTypes.ADD_TODO_ITEM,
});

export const getDeleteItemAction = (index) => ({
    type: actionTypes.DELETE_TODO_ITEM,
    index
});
