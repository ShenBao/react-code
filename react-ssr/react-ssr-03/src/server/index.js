import express from 'express';

import { renderPage } from './utils';

const app = express ();
app.use (express.static ('public'));

app.get ('*', function (req, res) {
  res.send (renderPage(req));
});

const server = app.listen (3000, function () {
  console.log ('page entry url: http://localhost:3000/');
});
