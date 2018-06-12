var manager_st_dao = require('../models/manager_st_dao');

module.exports = {
  queryList: function (params, callback) { //查询全部
    manager_st_dao.query({}, callback);
  },
  addMg: function (params, callback) { //用户注册
    manager_st_dao.add(params, callback);
  },
  loginMg: function (params, callback) { //用户登录
    var password = params.password;
    delete params.password;
    manager_st_dao.query(params, function (err, result) {
      if (err) {
        callback(err, result);
      } else {
        if (result.length!==0 && password == result[0].password) {
          callback(err, result);//成功返回用户信息
        } else {
          callback('密码错误', '登录失败');
        }
      }
    });
  },
  query: function (params, callback) { //一般查询
    manager_st_dao.query(params, callback);
  },
  delete: function (params, callback) { //删除用户
    manager_st_dao.del(params, callback);
  }
};