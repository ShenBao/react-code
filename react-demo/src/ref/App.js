import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      inputValue: 'React',
      list: []
    }
  }

  onChangeHandle(e) {

    let val = e.target.value
    console.log(val);

    this.setState({
      inputValue: val
    });

  }

  onBtnClickHandle() {
    let val = this.input.value;
    console.log(this.input);
    console.log(val);

    this.setState({
      list: [...this.state.list, this.state.inputValue]
    }, ()=> {

      let _ul = this.ul.querySelectorAll('li');
      console.log(_ul.length);
      
    });

    

  }

  onEnterHandle(e) {

    if (e.which !== 13) {
      return;
    }

    this.onBtnClickHandle();
  }

  onItemDeleteHandle(index) {

    let list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list: list
    });

  }

  render() {
    return (
      <div>
        <input id="ToDoList" type="text" value={this.state.inputValue}
          onChange={this.onChangeHandle.bind(this)}
          onKeyPress={this.onEnterHandle.bind(this)}
          ref={(input) => { this.input = input }}
        />
        <button onClick={this.onBtnClickHandle.bind(this)}>提交</button>
        <ul ref={(ul) => { this.ul = ul }}>
          {
            this.state.list.map((item, index) => {
              return <li
                key={index}
                onClick={this.onItemDeleteHandle.bind(this, index)
                }>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
