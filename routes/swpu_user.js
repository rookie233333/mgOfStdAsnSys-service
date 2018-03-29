var user_dao = require('../models/user_dao');

module.exports = {
    queryUserList: function (params, callback) {//查询全部
        user_dao.queryAll(callback);
    },
    registerUser: function (params, callback) {//用户注册
        user_dao.add(params, callback);
    },
    loginUser: function (params, callback) {//用户登录
        var password = params.password;
        delete params.password;
        user_dao.query(params, function (err, result) {
            if (err) {
                callback(err, result);
            } else {
                if (password == result.password) {
                    callback(err, '登录成功');
                } else {
                    callback('密码错误', '登录失败');
                }
            }
        });
    }
};