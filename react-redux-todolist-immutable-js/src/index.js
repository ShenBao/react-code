import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';

import store from './store/index';

import TodoList from './pages/TodoList/index';

const App = () => {
    return <Provider store={store}>
        <div>
            <TodoList />
        </div>
    </Provider>
};

ReactDOM.render(<App />, document.getElementById('root'));
