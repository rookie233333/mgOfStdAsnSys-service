var score = require('../models/departmentScore_dao');
var department = require('../models/department_dao');

module.exports = {
    addScore: function (params, callback) {
        var d_id = params.department_id, //部门id
            d_score = parseFloat(params.score); //分数
        department.query({
            id: d_id
        }, function (err, r) {
            if (err != null) {
                callback(err, r);
                return;
            }
            var d_aver = parseFloat(r[0].average_score);
            if (d_aver == 0) { //第一个评分的情况
                average_score = d_score;
            } else {
                average_score = (d_score + d_aver) / 2;
            }
            var _params = {
                average_score: parseFloat(average_score),
                id: d_id
            };
            department.updataScore(_params, function (err, r) { //更新部门分数
                if (err != null) {
                    callback(err, r);
                    return;
                }
                score.add(params, callback);
            });
        });
    },
    queryByDepartment: function (params, callback) {
        score.queryByDepartment(params, callback);
    }
};