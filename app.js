const bodyParser = require('body-parser')
const express = require('express')
const router = require('./router/index')
// 创建 express 应用
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use('/',router)

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(8080, function() {
  const { address, port } = server.address()
  console.log('Http Server is running on http://%s:%s', address, port)
})