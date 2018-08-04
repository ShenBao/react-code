import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css'

class App extends Component {

  constructor() {
    super();

    this.state = {
      show: true
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let show = this.state.show ? false : true;

    this.setState({
      show
    })

  }

  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.show}
          timeout={1300}
          classNames="fade"
          unmountOnExit
          onEntered={(el) => {
            el.style.color = 'red';
          }}
          appear={true}
        >
          <div>Hello, React !!!</div>
        </CSSTransition>
        <button onClick={this.onClick}>切换</button>
      </div>
    );
  }
}

export default App;
