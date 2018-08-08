import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginBox, LoginTitle, Input, Button } from './style';
import { actionCreators } from './store';
import {
	getInputChangeAction,
  } from './store/actionCreators'

class Register extends Component {

	render() {
		const { loginStatus, form } = this.props;

		const name = form.get('name');
		const age = form.get('age');
		const gender = form.get('gender');

		return (
			<LoginBox>
				<header>
					<h1>注册</h1>
				</header>
				<main>
					<form onSubmit={(e) => this.props.handleSubmit(e)}>
						<label>用户名：</label>
						<input
							type="text"
							value={name.get('value')}
							onChange={(e) => this.props.handleValueChange('name', e.target.value)}
						/>
						{!name.get('valid') && <span>{name.get('error')}</span>}
						<br />
						<label>年龄：</label>
						<input
							type="number"
							value={age.get('value') || ''}
							onChange={(e) => this.props.handleValueChange('age', e.target.value, 'number')}
						/>
						{!age.get('valid') && <span>{age.get('error')}</span>}
						<br />
						<label>性别：</label>
						<select
							value={gender.get('value')}
							onChange={(e) => this.props.handleValueChange('gender', e.target.value)}
						>
							<option value="">请选择</option>
							<option value="male">男</option>
							<option value="female">女</option>
						</select>
						{!gender.get('valid') && <span>{gender.get('error')}</span>}
						<br />
						<br />
						<input type="submit" value="提交" />
					</form>
				</main>
			</LoginBox>
		)
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login']),
	form: state.getIn(['register', 'form'])
})

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem) {
		dispatch(actionCreators.login(accountElem.value, passwordElem.value))
	},

	handleValueChange (field, value, type = 'string') {

		const val = {
		  field,
		  value,
		}
		
		console.log(val);
		
		const action = getInputChangeAction(val);
		dispatch(action);
		
	  },
	
	  handleSubmit (e) {
		e.preventDefault();
	
		const {form: {name, age, gender}} = this.state;
		if (!name.valid || !age.valid || !gender.valid) {
		  alert('请填写正确的信息后重试');
		  return;
		}
		alert('提交成功');
	  }
})

export default connect(mapState, mapDispatch)(Register);