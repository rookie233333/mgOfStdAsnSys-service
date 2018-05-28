var query = require('./database');
var tfmParam = require('./transformParam_fun');

module.exports = {
    add: function (params, callback) {
        params = tfmParam(params, 'name,site,time,description,department_id,status,type,publish_url,Pubuser_id,content');
        query('insert into activity(name,site,time,description,department_id,status,type,publish_url,Pubuser_id,content) values(?,?,?,?,?,?,?,?,?,?)', params, function (err, result) {
            callback(err, result);
        });
    },
    query: function (params, callback) {
        query('select * form activity where id =', params, function (err, result) {
            callback(err, result);
        });
    },
    del: function (params, callback) {
        query('delete from activity where id = ' + params.id, function (err, result) {
            callback(err, result);
        });
    },
    queryList: function (params, callback) { //查询详细列表
        var sql = 'SELECT a.id,a.name,a.site,a.time,a.description,d.name as department_name,u.id as user_id,u.name as user_name,a.`status`,a.type,a.publish_url,a.content FROM activity a LEFT JOIN department d on a.department_id=d.id LEFT JOIN user u on a.Pubuser_id=u.id';
        if (params.id != undefined) sql += ' WHERE a.id=' + params.id;
        query(sql, function (err, r) {
            callback(err, r);
        });
    },
    updata: function (params, callback) { //更新状态
        query('UPDATE activity SET `status` = ? WHERE id = ?', [params.status, params.id], function (err, r) {
            callback(err, r);
        });
    }
};