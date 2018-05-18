var query = require('./database');
var tfmParam = require('./transformParam_fun');

module.exports = {
    add: function (params, callback) {
        params = tfmParam(params, 'department_id,operate_id,score,evaluate');
        query('insert into department_score(department_id,operate_id,score,evaluate) values(?,?,?,?)', params, function (err, result) {
            callback(err, result);
        });
    },
    query: function (params, callback) {
        query('SELECT * FROM department_score WHERE id = ', params.id, function (err, r) {
            callback(err, r);
        });
    },
    queryByDepartment: function (params, callback) {
        query('SELECT d.department_id as department_id,u.name as operate_name, d.score as score, d.evaluate as evaluate FROM department_score d JOIN user u on d.operate_id=u.id WHERE d.department_id = ' + params.department_id, function (err, r) {
            callback(err, r);
        });
    }
};