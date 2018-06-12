//新闻
var act_dao = require('../models/activity_dao');
var sapp_dao = require('../models/site_appli_dao');
var fapp_dao = require('../models/fin_appli_dao');

module.exports = {
    addActivity: function (params, callback) {
        params.status = 0; //状态：失败-1、未发0、已发1、删除2
        params.publish_url = ' ';
        act_dao.add(params, callback);
    },
    queryList: function (params, callback) {
        act_dao.queryList(params, callback);
    },
    publish: function (params, callback) {
        params.status = 1;
        act_dao.update(params, callback);
    },
    cancelPub: function (params, callback) {
        params.status = 2;
        act_dao.update(params, callback);
    },
    subsiteappli: function (params, callback) { //场地申请
        sapp_dao.add(params, callback);
    },
    subfinappli: function (params, callback) {//财务报账
        fapp_dao.add(params, callback);
    },
    query:function(params,callback){
        act_dao.query(params,callback);
    },
    delete:function(params,callback){
        act_dao.del(params,callback);
    }
};