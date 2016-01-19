var express = require('express');
var port = process.env.PORT || 3001;
var app = express();
var http = require('http').Server(app);



app.use(express.static(__dirname + "/app"));


app.get('/', function(request, response, next){
  response.sendFile('app');
});




http.listen(port);



console.log('WE ARE RUNNING ON:' + port);
