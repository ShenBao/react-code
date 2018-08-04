import React from 'react';

require('../css/App.css'); 


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				date: new Date()
			};
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, ShenBao!</h1>
				<h2>LocaleTime: {this.state.date.toLocaleTimeString()}</h2>
			</div>
		);
	}
}


export default App;
