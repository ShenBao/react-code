import Home from './containers/Home/index';
import Login from './containers/Login/index';

export default [
  {
    key: 'home',
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData,
    // routes: [
    //     {
    //         key: 'test',
    //         path: "/test",
    //         component: Login,
    //         exact: true,
    //     },
    // ]
  },
  {
    key: 'login',
    path: '/login',
    component: Login,
    exact: true,
  },
];
