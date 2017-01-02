var express = require('express'),
    http = require('http'),
    redis = require('redis');

var app = express();

console.log(process.env.REDIS_PORT_6379_TCP_ADDR + ':' + process.env.REDIS_PORT_6379_TCP_PORT);

console.log(process.env.CB_ENV_NAME);
console.log(process.env.CB_SERVICE_NAME);
console.log(process.env.CB_SERVICE_PORT);

var client = redis.createClient('6379', 'redis.' + process.env.CB_ENV_NAME);

// var client = redis.createClient('6379', 'redis.memo-poc');

app.get('/', function(req, res, next) {
  client.incr('counter', function(err, counter) {
    if(err) return next(err);
    res.send(process.env.CB_ENV_NAME + ' : This page has been viewed ' + counter + ' times!');
  });
});

// http.createServer(app).listen(process.env.PORT || 8080, function() {
//   console.log('Listening on port ' + (process.env.PORT || 8080));
// });

http.createServer(app).listen(process.env.PORT || 8080, function() {
  console.log('Listening on port ' + (process.env.PORT || 8080));
});