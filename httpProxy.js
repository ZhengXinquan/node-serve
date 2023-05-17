const httpProxy = require('express-http-proxy');

const userServiceProxy = httpProxy('https://api.nanshanqiao.com', {
  //过滤器，指定类型的转发（可选）
  //   filter: function (req, res) {
  //     return req.method == 'GET';
  //   },
  //   请求路径解析，转换一下路径（可选）
  proxyReqPathResolver: function (req) {
    console.log(req.url.replace('/api', ''))
    return req.url.replace('/api', '');
  },
  //处理响应（可选）
  userResDecorator: function (proxyRes, proxyResData, userReq, userRes) {
    try {
      console.log(proxyResData);
      data = JSON.parse(proxyResData.toString('utf8'));
      data.newProperty = 'exciting data';
      return JSON.stringify(data);
    } catch (error) {
      console.log('---- JSON.parse(res) fail');
      return proxyResData.toString('utf8');
    }
  },
  //处理请求（可选）
  proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
    // you can update headers
    // proxyReqOpts.headers['Content-Type'] = 'text/html';
    // you can change the method
    // proxyReqOpts.method = 'GET';
    return proxyReqOpts;
  },
  //处理请求body（可选）
  proxyReqBodyDecorator: function (bodyContent, srcReq) {
    console.log(bodyContent);
    return bodyContent;
  },
  //处理请求头（可选）
  userResHeaderDecorator(headers, userReq, userRes, proxyReq, proxyRes) {
    // recieves an Object of headers, returns an Object of headers.
    return headers;
  },
  //自定义错误（可选）
  proxyErrorHandler: function (err, res, next) {
    next(err);
  },
});
module.exports = userServiceProxy;
