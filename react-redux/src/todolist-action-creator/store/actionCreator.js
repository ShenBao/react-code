
import {
    CHNAGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
} from './actionTypes'

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
