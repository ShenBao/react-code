import React, { Component } from 'react';

import 'antd/dist/antd.css';
import './style.css';

import store from './store/index'

import {
  getInputChangeAction,
} from './store/actionCreator'


class App extends Component {

  constructor(props) {

    super(props);
    this.state = store.getState();
    console.log(store.getState());

    this.storeOnChange = this.storeOnChange.bind(this);

    store.subscribe(this.storeOnChange);

  }

  componentDidMount() {

  }

  storeOnChange() {
    this.setState(store.getState());
  }

  onChange(e) {

    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);

  }

  handleValueChange (field, value, type = 'string') {

    const val = {
      field,
      value,
    }

    const action = getInputChangeAction(val);
    store.dispatch(action);
    
  }

  handleSubmit (e) {
    e.preventDefault();

    const {form: {name, age, gender}} = this.state;
    if (!name.valid || !age.valid || !gender.valid) {
      alert('请填写正确的信息后重试');
      return;
    }
    alert('提交成功');
  }

  render() {

    const {form: {name, age, gender}} = this.state;

    return (
      <div>
        <header>
          <h1>添加用户</h1>
        </header>

        <main>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>用户名：</label>
            <input
              type="text"
              value={name.value}
              onChange={(e) => this.handleValueChange('name', e.target.value)}
            />
            {!name.valid && <span>{name.error}</span>}
            <br/>
            <label>年龄：</label>
            <input
              type="number"
              value={age.value || ''}
              onChange={(e) => this.handleValueChange('age', e.target.value, 'number')}
            />
            {!age.valid && <span>{age.error}</span>}
            <br/>
            <label>性别：</label>
            <select
              value={gender.value}
              onChange={(e) => this.handleValueChange('gender', e.target.value)}
            >
              <option value="">请选择</option>
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
            {!gender.valid && <span>{gender.error}</span>}
            <br/>
            <br/>
            <input type="submit" value="提交"/>
          </form>
        </main>
      </div>
    )
  }
}

export default App;
