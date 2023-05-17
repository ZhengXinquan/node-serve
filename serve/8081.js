var express = require('express');
var path = require('path');
var app = express();
var isDev = process.env.NODE_ENV === 'dev';

app.use(express.json({ limit: 1024 * 1024 * 50 }));
app.use(
  express.urlencoded({
    limit: 1024 * 1024 * 50,
    extended: true,
    parameterLimit: 1024 * 1024 * 50,
  }),
);

/**
 * 接口转发
 */

const PROXY_FLAG = '/api';
const httpProxy = require('express-http-proxy');
const { env } = require('process');
const userServiceProxy = httpProxy(isDev ? 'http://127.0.0.1:9587' : 'http://api.nanshanqiao.com', {
  proxyReqPathResolver: function (req) {
    return req.url.replace(PROXY_FLAG, '/api'); //   请求路径解析，去掉标识串 /proxy
  },
});

app.all(PROXY_FLAG + '/*', (req, res, next) => {
  console.log(req.headers.host);
  userServiceProxy(req, res, next);
});
app.get('/img.php', function (req, res, next) {
  userServiceProxy(req, res, next);
});

const publicPath = path.join(__dirname, '../../nsq');
console.log(publicPath);

app.use('/', express.static(publicPath));

app.get('*', function (req, res) {
  res.send('404');
});

let file = __filename.split('\\');
let port = file[file.length - 1].replace('.js', '');

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('应用实例，访问地址为 http://%s:%s', '127.0.0.1', port);
});
