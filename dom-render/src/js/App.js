import React from 'react';

require('../css/App.css'); 

var iconImg = require('../img/xiaobaobao.png');

const element = (
	<div>
		<h1>Hello, world!</h1>
		<h2>It is {new Date().toLocaleTimeString()}.</h2>
	</div>
);

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>元素渲染</h1>
				{element}
			</div>
		);
	}
}


export default App;
