import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginBox, RegisterTitle, Input, Button } from './style';
import { actionCreators } from './store';
import {
	getInputChangeAction,
} from './store/actionCreators'

class Register extends Component {

	render() {
		const { loginStatus, form, handleValueChange, handleSubmit } = this.props;

		const name = form.name;
		const age = form.age;
		const gender = form.gender;
		const submit = form.submit;

		return (
			<LoginBox>
				<RegisterTitle>注册</RegisterTitle>
				<main>
					<form onSubmit={(e) => { handleSubmit(e) }}>
						<label>用户名：</label>
						<input
							type="text"
							value={name.value}
							onChange={(e) => handleValueChange('name', e.target.value)}
						/>
						{!name.valid && <span>{name.error}</span>}
						<br />
						<label>年龄：</label>
						<input
							type="number"
							value={age.value || ''}
							onChange={(e) => handleValueChange('age', e.target.value, 'number')}
						/>
						{!age.valid && <span>{age.error}</span>}
						<br />
						<label>性别：</label>
						<select
							value={gender.value}
							onChange={(e) => handleValueChange('gender', e.target.value)}
						>
							<option value="">请选择</option>
							<option value="male">男</option>
							<option value="female">女</option>
						</select>
						{!gender.valid && <span>{gender.error}</span>}
						<br />
						<p>{submit.error}</p>
						<br />
						<Button type="submit" value="注册" />
					</form>
				</main>
			</LoginBox>
		)

	}
}

const mapState = (state) => ({
	loginStatus: state.login.login,
	form: state.register.form
})

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem) {
		dispatch(actionCreators.login(accountElem.value, passwordElem.value))
	},

	handleValueChange(field, value, type = 'string') {

		const val = {
			field,
			value,
		}

		console.log(val);

		const action = getInputChangeAction(val);
		dispatch(action);

	},

	handleSubmit(e) {
		e.preventDefault();

		const { form: { name, age, gender } } = this.props;
		if (!name.valid || !age.valid || !gender.valid) {
			alert('请填写正确的信息后重试');
			return;
		}
		alert('提交成功');
	}
})

export default connect(mapState, mapDispatch)(Register);