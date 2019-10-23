import axios from 'axios';
import config from '../config/index';

const createInstance = (req) => {

	const instance = axios.create ({
	  baseURL: 'http://localhost:3500/t3rd',
	  headers: {
		cookie: req.get('cookie') || ''
	},
	  params: {
		secret: config.secret,
		requestSource: 'nodejs react ssr server',
	  },
	});
	
	instance.interceptors.request.use (config => {
	  config.params.__preventCache = Date.now ();
	  return config;
	});

	return instance;
}

export default createInstance;
