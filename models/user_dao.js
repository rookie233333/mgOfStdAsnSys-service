var db = require('./database');

module.exports = {
    add: function (params, callback) {
        db.query('insert into user(name,password,sex,student_id,birthday,phone,mail,avatar,level,department_id) values(?,?,?,?,?,?,?,?,?,?)', params, function (err, result) {
            callback(err, result);
        });
    },
    del: function (params, callback) {
        db.query('delete from user where id = ?', params, function (err, result) {
            callback(err, result);
        });
    },
    updata:function(params,callback){
        db.query('updata user set name=?,sex=?,student_id=?,birthday=?,phone=?,mail=?,avatar=?,level=?,department_id=?',params,function(err,result){
            callback(err,result);
        });
    },
    show:function(params,callback){
        db.query('select * from user where id = ?',params,function(err,result){
            callback(err,result);
        });
    }
};