const express = require('express');

const app = express ();

app.use (express.static ('3rdserver'));

const server = app.listen (3500, function () {
  console.log ('mock third server url: http://localhost:3500/');
});
