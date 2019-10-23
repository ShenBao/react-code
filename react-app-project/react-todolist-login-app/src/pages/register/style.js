import styled from 'styled-components';

export const LoginBox = styled.div`
	width: 400px;
	height: 180px;
	margin: 100px auto;
	padding-top: 20px;
	background: #fff;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
`;


export const RegisterTitle = styled.div`
	text-align: center;
	padding-bottom: 20px;
`;


export const Input = styled.input`
	display: block;
	width: 200px;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	margin: 10px auto;
	color: #777;
`;

export const Button = styled.input.attrs({
	type: "submit"
})`
	display: block;
	width: 220px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 15px;
	margin: 10px auto;
	text-align: center;
`;