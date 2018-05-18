var dpart_dao = require('../models/department_dao'),
    user_dao = require('../models/user_dao');

module.exports = {
    queryDepartmentList: function (params, callback) { //查询
        dpart_dao.queryAll(params, callback);
    },
    addDepartment: function (params, callback) { //添加
        dpart_dao.add(params, callback);
    },
    delDepartment: function (params, callback) { //删除
        dpart_dao.del(params, callback);
    },
    queryDepartName: function (params, callback) {
        dpart_dao.query(params, callback);
    },
    queryAsGroup: function (params, callback) {//分组id查询
        dpart_dao.queryAsGroup(params, callback);
    }
};