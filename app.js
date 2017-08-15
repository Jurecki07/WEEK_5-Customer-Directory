const express = require('express');
const path = require('path');
const port = process.env.port || 3000;
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache');

app.get("/data.js", function (request, response){
   var data = []

});


















app.listen(port, function () {
    console.log('server is running ${port} ');


});
