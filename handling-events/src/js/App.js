import React from 'react';

require('../css/App.css'); 

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('初始化 bind');
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	handleClickme = () => {
		console.log('属性初始化器语法');		
		console.log('this is:', this);
	}

	handleClicke() {
		console.log('箭头函数');
		console.log('this is:', this);
	}

	render() {
		return (
			
			<div>
				<button onClick={this.handleClick}>
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>
				
				<button onClick={this.handleClickme}>
					Click me
				</button>

				<button onClick={(e) => this.handleClicke(e)}>
					Click me
				</button>
			</div>
		);
	}
}


export default App;
