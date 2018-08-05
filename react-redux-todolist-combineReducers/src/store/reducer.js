
import { combineReducers } from 'redux';

import { reducer as TodoListReducer } from '../pages/TodoList/store'
import { reducer as TestReducer } from '../pages/Test/store'


const reducer = combineReducers({
    todoList: TodoListReducer,
    test: TestReducer
})

export default reducer;
