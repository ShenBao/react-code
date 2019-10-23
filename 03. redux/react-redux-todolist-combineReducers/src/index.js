import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';

import store from './store/index';

import TodoList from './pages/TodoList/index';
import Test from './pages/Test/index';

const App = () => {
    return <Provider store={store}>
        <div>
            <TodoList />
            <Test />
        </div>
    </Provider>
};

ReactDOM.render(<App />, document.getElementById('root'));
