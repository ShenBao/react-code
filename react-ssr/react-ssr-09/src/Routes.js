import App from './App';
import Home from './containers/Home/index';
import List from './containers/List/index';
import NotFind from './containers/NotFind/index';

export default [{
  key: 'app',
  path: '/',
  component: App,
  loadData: App.loadData,
  routes: [
    {
      key: 'home',
      path: '/',
      component: Home,
      exact: true,
      loadData: Home.loadData,
    },
    {
      key: '/list',
      path: '/list',
      component: List,
      exact: true,
      loadData: List.loadData,
    },
    {
      key: '/NotFind',
      component: NotFind,
    },
  ]
}];
