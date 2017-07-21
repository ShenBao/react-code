import React from 'react';

import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';

import main from '../css/App.css';

class App extends React.Component {
	render() {
		return (
			<div className='body'>
				<ComponentHeader/>
        <div className="main">
				  <h2>页面的主体内容</h2>
        </div>
        <ComponentFooter/>
			</div>
		);
	}
}


export default App;
