import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routers from '../Routers';

const App = () => {
  return (
    <BrowserRouter>
      {Routers}
    </BrowserRouter>
  );
};

ReactDom.hydrate (<App />, document.getElementById ('root'));
