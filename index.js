var express = require('express');

var app = express();
app.use(express.json());


var httpProxy = require('./httpProxy');
// 代理请求
app.all('/api/*', (req, res, next) => {
  console.log(req)
  httpProxy(req, res, next);
});

app.use('/', express.static('public'));
app.use('/test', express.static('test'));

// REST-FULL
app
  .route('/book')
  .get(function (req, res) {
    res.send('Get a random book');
  })
  .post(function (req, res) {
    res.send('Add a book');
  })
  .put(function (req, res) {
    res.send('Update the book');
  });

app.get('*', function (req, res) {
  res.send('404');
});

var server = app.listen(9999, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('应用实例，访问地址为 http://%s:%s', '127.0.0.1', port);
});
