import * as React from 'react';
import './App.scss';


import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './common/header'
import Error from './pages/error';
import Home from './pages/home';
import Login from './pages/login';
import Main from './pages/main';
import Register from './pages/register';

import store from './store';

class App extends React.Component {
  public render() {

    console.log('React TypeScript Project');

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <h1 className="title">React Redux TypeScript Project</h1>
            <Header />
            <Switch>
              <Route path='/' exact={true} component={Home} />
              <Route path='/login' exact={true} component={Login} />
              <Route path='/register' exact={true} component={Register} />
              <Route path='/main' exact={true} component={Main} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
