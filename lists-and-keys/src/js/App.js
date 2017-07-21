import React from 'react';

require('../css/App.css'); 

class App extends React.Component {
	constructor(props) {
		super(props);


	}

	render() {
		const numbers = [1, 2, 3, 4, 5];
		const doubled = numbers.map((number) => number * 2);
		console.log(doubled);
		return (
			<div>
				<p>{numbers}</p>
				<p>{doubled}</p>

				<ul>
					{
						numbers.map((number) =>
						<li key={number}>{number}</li>
						)
					}
					{
						numbers.map((number) =>
						<li key={number}>{number}</li>
						)
					}
				</ul>


			</div>
		);
	}
}


export default App;
