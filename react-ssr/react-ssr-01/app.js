var express = require('express');

var app = express();

app.get('/', function(req, res) {

    res.send(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            Hello Word
        </body>
        </html>
        `
    )

});

var server = app.listen(3000, function(){
    console.log('http://localhost:3000/');
    
});
