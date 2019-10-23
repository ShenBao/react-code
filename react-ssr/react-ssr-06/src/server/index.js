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
      return '/t3rd/api' + req.url;
    },
  })
);

app.use (express.static ('public'));

app.get ('*', function (req, res) {
  const store = getServerStore (req);
  const matchedRoutes = matchRoutes (routes, req.path);

  const promises = [];
  matchedRoutes.forEach (item => {
    if (item.route.loadData) {
      const promise = new Promise ((reslove, reject) => {
        item.route.loadData (store).then (reslove).catch (reslove);
      });
      promises.push (promise);
    }
  });

  Promise.all (promises).then (() => {
    const context = {};
    const html = renderPage (store, routes, req, context);
    if (context.action === 'REPLACE') {
      res.redirect (301, context.url);
    } else if (context.notFind) {
      res.status (404);
      res.send (html);
    } else {
      res.send (html);
    }
  });
});

const server = app.listen (3000, function () {
  console.log ('page entry url: http://localhost:3000/');
});
