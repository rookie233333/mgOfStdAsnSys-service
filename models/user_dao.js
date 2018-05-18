var query = require('./database');
var tfmParam = require('./transformParam_fun');

module.exports = {
    add: function (params, callback) {
        params = tfmParam(params, 'name,password,sex,student_id,birthday,phone,mail,avatar,level,department_id');
        query('insert into user(name,password,sex,student_id,birthday,phone,mail,avatar,level,department_id) values(?,?,?,?,?,?,?,?,?,?)', params, function (err, result) {
            callback(err, result);
        });
    },
    del: function (params, callback) {
        query('delete from user where id = ' + params.id, function (err, result) {
            callback(err, result);
        });
    },
    updata: function (params, callback) {
        params = tfmParam(params, 'name,sex,student_id,birthday,phone,mail,avatar,level,department_id');
        query('updata user set name=?,sex=?,student_id=?,birthday=?,phone=?,mail=?,avatar=?,level=?,department_id=?', params, function (err, result) {
            callback(err, result);
        });
    },
    query: function (params, callback) {
        var sql;
        if(params.level != undefined){
            sql = 'select * from user where level = '+params.level;
        }else if(params.name != undefined){
            sql = 'select * from user where name = '+params.name;
        }else if(params.id != undefined){
            sql = 'select * from user where id = '+params.id;
        }
        query(sql, function (err, result) {
            callback(err, result);
        });
    },
    queryAll:function(callback){
        query('select * from user',function(err,result){
            callback(err,result);
        });
    }
};