import ReactDOM from 'react-dom/client';
import App from './App';

import 'antd/dist/antd.css';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
