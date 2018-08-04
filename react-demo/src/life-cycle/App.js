import React, { Component } from 'react';
import TestComponent from './TestComponent'

class App extends Component {

  constructor() {
    super();

    this.state = {
      inputValue: 'React'
    }
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  // 组件被更新之前  shouldComponentUpdate 返回true时才去执行
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // props更新时才出发
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  onChangeHandle(e) {

    let val = e.target.value
    console.log(val);

    this.setState({
      inputValue: val
    });

  }

  render() {

    console.log('render');

    return (
      <div>
        <p>Hello, React !</p>
        <input type="text" onChange={this.onChangeHandle.bind(this)} />
        <TestComponent text={this.state.inputValue}></TestComponent>
      </div>
    );
  }
}

export default App;
