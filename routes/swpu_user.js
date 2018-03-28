var user_dao=require('../models/user_dao');

module.exports={
    queryUserList:function(params,callback){
        user_dao.queryAll(callback);
    },
    registerUser:function(params,callback){
        user_dao.add(params,callback);
    }
};