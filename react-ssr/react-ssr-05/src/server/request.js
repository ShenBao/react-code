import axios from 'axios';
const instance = axios.create({
	baseURL: 'http://localhost:3500/3rd',
});

export default instance;