const { querySql } = require('../db')

function list() {
  console.log( Object.prototype.toString.call(querySql) === '[object Function]')
  return querySql(`select * from book limit 10`)
  //   where username='${username}' and password = '${password}'
}

module.exports = {
  list
}
