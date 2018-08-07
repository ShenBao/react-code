import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginBox,LoginTitle, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		console.log(loginStatus);
		
		if (!loginStatus) {
			return (
				<LoginBox>
					<LoginTitle>欢迎登录</LoginTitle>
					<Input placeholder='账号' innerRef={(input) => {this.account = input}}/>
					<Input placeholder='密码' type='password' innerRef={(input) => {this.password = input}}/>
					<Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
				</LoginBox>
			)
		}else {
			return <Redirect to='/todolist'/>
		}
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem){
		dispatch(actionCreators.login(accountElem.value, passwordElem.value))
	}
})

export default connect(mapState, mapDispatch)(Login);