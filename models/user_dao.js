var query = require('./database');
var tfmParam = require('./transformParam_fun');

module.exports = {
    add: function (params, callback) {
        params = tfmParam(params, 'name,password,sex,student_id,birthday,phone,mail,avatar,level,society_id');
        query('insert into user(name,password,sex,student_id,birthday,phone,mail,avatar,level,society_id) values(?,?,?,?,?,?,?,?,?,?)', params, function (err, result) {
            callback(err, result);
        });
    },
    del: function (params, callback) {
        query('delete from user where id = ' + params.id, function (err, result) {
            callback(err, result);
        });
    },
    update: function (params, callback) {
        params = tfmParam(params, 'name,sex,student_id,birthday,phone,mail,avatar,level,society_id');
        query('update user set name=?,sex=?,student_id=?,birthday=?,phone=?,mail=?,avatar=?,level=?,society_id=?', params, function (err, result) {
            callback(err, result);
        });
    },
    query: function (params, callback) {
        var sql;
        if (params.society_id != undefined) {
            sql = 'SELECT * from user WHERE society_id = ' + params.society_id;
        } else if (params.name != undefined) {
            sql = 'select * from user where name = "' + params.name + '"';
        } else if (params.id != undefined) {
            sql = 'select * from user where id = ' + params.id;
        }
        query(sql, function (err, result) {
            callback(err, result);
        });
    },
    queryAll: function (callback) {
        query('select * from user', function (err, result) {
            callback(err, result);
        });
    },
    updatadp: function (params, callback) {
        query('update user set society_id = ' + params.society_id + ' where id = ' + params.id, function (err, r) {
            callback(err, r);
        });
    },
    querynotid: function (params, callback) {
        query('select * from user where society_id <> ' + params.society_id, function (err, result) {
            callback(err, result);
        });
    }
};