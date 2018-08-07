
const express = require('express');
const app = express();

app.use(express.static('./api'));

const server = app.listen(8000, function () {
    const host = server.address().address;
    const port = server.address().port;
  
    console.log('mock app listening at http://%s:%s', host, port);
  });
