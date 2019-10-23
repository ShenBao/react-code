import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginBox,LoginTitle, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		console.log(loginStatus);
		
		return (
			<div>
				Header
			</div>
		)
	}
}

const mapState = (state) => ({
	loginStatus: state.login.login
})

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem){
		dispatch(actionCreators.login(accountElem.value, passwordElem.value))
	}
})

export default connect(mapState, mapDispatch)(Login);