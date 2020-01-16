const express = require('express')
const Result = require('./../modals/Result')
const {login} =require('./../services/user')
const { md5 } =require('../utils')
const { PWD_SALT, PRIVATE_KEY, JWT_EXPIRED } = require('../utils/constant')
const router = express.Router()

router.post('/login', function(req, res, next) {
  let {username ,password} = req.body
  password = md5(`${password}${PWD_SALT}`)
  login(username, password).then(user => {
    if (!user || user.length === 0) {
      new Result('登录失败').fail(res)
    } else {
      // const token = jwt.sign(
      //   { username },
      //   PRIVATE_KEY,
      //   { expiresIn: JWT_EXPIRED }
      // )
      // new Result({ token }, '登录成功').success(res)
    }
  })
  .catch(err=>{
    console.log(err+"ceshi")
  })
})

router.get('/info', function(req, res, next) {
  res.json('user info...')
})

module.exports = router