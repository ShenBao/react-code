import React, {Component} from 'react';

import ToDoListUI from './TodoListUI';

import store from './store/index';

import {
  getInputChangeAction,
  getAddToDoItemAction,
  getDeleteItemAction
} from './store/actionCreator'

class WithToDoList extends Component {
  constructor (props) {
    super (props);
    this.state = store.getState ();

    this.storeOnChange = this.storeOnChange.bind (this);
    this.onBtnClickHandle = this.onBtnClickHandle.bind (this);
    this.onDeleteItemClick = this.onDeleteItemClick.bind (this);
    store.subscribe (this.storeOnChange);
  }

  storeOnChange () {
    this.setState (store.getState ());
  }

  onChange (e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch (action);
  }

  onBtnClickHandle () {
    if (!this.state.inputValue) {
      return;
    }
    const action = getAddToDoItemAction()
    store.dispatch (action);
  }

  onDeleteItemClick (index) {
    const action = getDeleteItemAction(index)
    store.dispatch (action);
  }

  render () {
    return (
      <ToDoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        onChange={this.onChange}
        onBtnClickHandle={this.onBtnClickHandle}
        onDeleteItemClick={this.onDeleteItemClick}
      />
    );
  }
}

export default WithToDoList;
