import React from 'react';

import Button from './components/Button.js';
import Icon from './components/Icon.js';
import Layout from './components/Layout.js';

require('../css/App.css'); 

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div>
				
				<Button/>
				<Icon/>
				<Layout></Layout>

				
			</div>
		);
	}
}


export default App;
