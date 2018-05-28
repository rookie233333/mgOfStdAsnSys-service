var act_dao = require('../models/activity_dao');

module.exports = {
    addActivity: function (params, callback) {
        params.status = 0;//状态：失败-1、未发0、已发1、删除2
        params.publish_url = ' ';
        act_dao.add(params, callback);
    },
    queryList:function(params,callback){
        act_dao.queryList(params,callback);
    },
    publish:function(params,callback){
        params.status = 1;
        act_dao.updata(params,callback);
    },
    cancelPub:function(params,callback){
        params.status = 2;
        act_dao.updata(params,callback);
    }
};