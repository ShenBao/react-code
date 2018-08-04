import React from 'react';


import BodyIndex from './components/bodyindex';

require('../css/App.css'); 


class App extends React.Component {
	constructor() {
		super();//调用基类的所有的初始化方法
		
	}

	componentWillMount(){
		//定义你的逻辑即可
		console.log("APP - componentWillMount");
	}

	componentDidMount(){
		console.log("App - componentDidMount");
	}

	render() {
		var html = "Shen&nbsp;Bao";
		return (
			<div>
				<BodyIndex userid={123456} username={"SHenBao"}/>
			</div>
		);
	}
}


export default App;
