
import { combineReducers } from 'redux';

import { reducer as TodoListReducer } from '../pages/TodoList/store'


const reducer = combineReducers({
    todoList: TodoListReducer,
})

export default reducer;
