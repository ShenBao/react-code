import React from 'react';

require('../css/App.css'); 


class App extends React.Component {
	constructor(props) {
		super(props);
		
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
				<p>{html}</p> {/*需要进行 Unicode 的转码*/}
				<p dangerouslySetInnerHTML ={{__html : html}}></p>
			</div>
		);
	}
}


export default App;
