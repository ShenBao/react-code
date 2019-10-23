import React from 'react';
import './App.css';

import ToDolist from './containers/ToDoList'

function App() {
  return (
    <div className="app-container" title="React App" data-test="app-container">
      <ToDolist />
    </div>
  );
}

export default App;
