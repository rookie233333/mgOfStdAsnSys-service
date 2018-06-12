var query = require('./database');
var tfmParam = require('./transformParam_fun');

module.exports = {
    add: function (params, callback) {
        params = tfmParam(params, 'name,discribe,group_id,avatar');
        query('insert into society(name,discribe,group_id,avatar) values(?,?,?,?)', params, function (err, result) {
            callback(err, result);
        });
    },
    query: function (params, callback) {
        if (params.id == undefined) {//评分倒叙
            query('SELECT * FROM `society` where id <> 0 ORDER BY average_score DESC', function (err, result) {
                callback(err, result);
            });
        } else {
            query('select * from society where id <> 0 and id =' + params.id, function (err, result) {
                callback(err, result);
            });
        }
    },
    del: function (params, callback) {
        query('delete from society where id = ' + params.id, function (err, result) {
            callback(err, result);
        });
    },
    queryList: function (params, callback) { //全部查询包括分组名称
        var sqlCode;
        if (params.id == undefined) { //不传为查询全部
            sqlCode = 'SELECT d.id as id,d.name as name,d.discribe as discribe,g.name as group_name,d.avatar as avatar FROM d_group g JOIN society d on g.id=d.group_id where d.id <> 0';
        } else {
            sqlCode = 'SELECT d.id as id,d.name as name,d.discribe as discribe,g.name as group_name,d.avatar as avatar FROM d_group g JOIN society d on g.id=d.group_id WHERE d.id <> 0 and d.id=' + params.id;
        }
        query(sqlCode, function (err, res) {
            callback(err, res);
        });
    },
    updataScore: function (params, callback) { //更新平均分
        query('UPDATE society SET average_score = ' + params.average_score + ' WHERE id = ' + params.id, function (err, result) {
            callback(err, result);
        });
    },
    queryAsGroup:function(params,callback){//根据分组查部门
        query('select * from society where id <> 0 and group_id ='+params.group_id,function(err,r){
            callback(err,r);
        });
    }
};