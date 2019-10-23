import express from 'express';
import proxy from 'express-http-proxy';

import {matchRoutes} from 'react-router-config';
import {getServerStore} from '../store';
import routes from '../Routes';

import {renderPage} from './utils';

const app = express ();

app.use (
  '/api',
  proxy ('http://localhost:3500', {
    proxyReqPathResolver: function (req) {
      return '/3rd/api' + req.url;
    },
  })
);

app.use (express.static ('public'));

app.get ('*', function (req, res) {
  const store = getServerStore ();
  const matchedRoutes = matchRoutes (routes, req.path);

  const promises = [];
  matchedRoutes.forEach (item => {
    if (item.route.loadData) {
      promises.push (item.route.loadData (store));
    }
  });

  Promise.all (promises).then (() => {
    res.send (renderPage (store, routes, req));
  });
});

const server = app.listen (3000, function () {
  console.log ('page entry url: http://localhost:3000/');
});
