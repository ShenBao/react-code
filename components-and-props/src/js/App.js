import React from 'react';

require('../css/App.css'); 


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Components() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

class App extends React.Component {
	render() {
		return (
			<div>
				<p>组件渲染</p>
				<Welcome name="Sara" />
				<p>组合组件</p>
				<Components/>
				<p>提取组件</p>
			</div>
		);
	}
}


export default App;
