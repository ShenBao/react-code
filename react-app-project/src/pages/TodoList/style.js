import styled from 'styled-components';

export const TodoListBox = styled.div`
	width: 400px;
	margin: 100px auto;
	padding-top: 20px;
	padding-bottom: 40px;
	background: #fff;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Title = styled.h3`
	text-align: center;
`;

export const Input = styled.input`
	display: inline-block;
	width: 200px;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	margin: 10px auto;
	color: #777;
`;

export const Button = styled.div`
	display: inline-block;
	width: 50px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 15px;
	margin: 10px auto;
	text-align: center;
`;

export const Item = styled.li`
	width: 260px;
	height: 30px;
	line-height: 30px;
	margin: 0 auto;
`;
