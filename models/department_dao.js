var query = require('./database');
var tfmParam = require('./transformParam_fun');

module.exports = {
    add: function (params, callback) {
        params = tfmParam(params, 'name,discribe,group_id,avatar');
        query('insert into department(name,discribe,group_id,avatar) values(?,?,?,?)', params, function (err, result) {
            callback(err, result);
        });
    },
    query: function (params, callback) {
        if (params.id == undefined) {
            query('select * from department', function (err, result) {
                callback(err, result);
            });
        } else {
            query('select * from department where id =' + params.id, function (err, result) {
                callback(err, result);
            });
        }
    },
    del: function (params, callback) {
        query('delete from department where id = ' + params.id, function (err, result) {
            callback(err, result);
        });
    },
    queryList: function (params, callback) { //全部查询包括分组名称
        var sqlCode;
        if (params.id == undefined) { //不传为查询全部
            sqlCode = 'SELECT d.id as id,d.name as name,d.discribe as discribe,g.name as group_name,d.avatar as avatar FROM d_group g JOIN department d on g.id=d.group_id';
        } else {
            sqlCode = 'SELECT d.id as id,d.name as name,d.discribe as discribe,g.name as group_name,d.avatar as avatar FROM d_group g JOIN department d on g.id=d.group_id WHERE d.id=' + params.id;
        }
        query(sqlCode, function (err, res) {
            callback(err, res);
        });
    },
    updataScore: function (params, callback) { //更新平均分
        query('UPDATE department SET average_score = ' + params.average_score + ' WHERE id = ' + params.id, function (err, result) {
            callback(err, result);
        });
    },
    queryAsGroup:function(params,callback){//根据分组查部门
        query('select * from department where group_id ='+params.group_id,function(err,r){
            callback(err,r);
        });
    }
};