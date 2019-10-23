import axios from 'axios';
import config from '../config/index';

const instance = axios.create ({
  baseURL: '/',
  params: {
    secret: config.secret,
  },
});

instance.interceptors.request.use (config => {
  config.params.__preventCache = Date.now ();
  return config;
});

export default instance;
