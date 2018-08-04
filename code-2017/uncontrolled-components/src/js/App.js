import React from 'react';

require('../css/App.css'); 


class App extends React.Component {
	 constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		console.log('A name was submitted: ' + this.input.value);
		event.preventDefault();
	}

	render() {
		return (
		<form onSubmit={this.handleSubmit}>
			<label>
				Name:
				<input 
					type="text"
					defaultValue="Bao"
					ref={(input) => this.input = input} />
			</label>
			<input type="submit" value="Submit" />
		</form>
		);
	}
}


export default App;
