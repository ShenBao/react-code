import React from 'react';

require('../css/App.css'); 

var iconImg = require('../img/xiaobaobao.png');


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, React.</h1>;
}


const user = {
  firstName: 'Shen',
  lastName: 'Bao',
  avatarUrl: iconImg
};

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>JSX的使用</h1>
				<p>Hello, {formatName(user)}!</p>

				<p>{getGreeting(user)}</p>
				
				<p>{getGreeting()}</p>

				<div tabIndex="0">tabIndex="0"</div>

				<img src={user.avatarUrl}></img>

				<div>
					<h1>Hello!</h1>
					<h2>Good to see you here.</h2>
				</div>

			</div>
		);
	}
}


export default App;
