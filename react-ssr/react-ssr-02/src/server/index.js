import express from 'express';
import React from 'react';
import Home from '../containers/Home';

import {renderToString} from 'react-dom/server';
const content = renderToString (<Home />);

const app = express ();
app.use (express.static ('public'));

app.get ('/', function (req, res) {
  res.send (
    `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React SSR</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src='/index.js'></script>
        </body>
        </html>
        `
  );
});

const server = app.listen (3000, function () {
  console.log ('page entry url: http://localhost:3000/');
});
