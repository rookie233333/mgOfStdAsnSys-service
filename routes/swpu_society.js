var society_dao = require('../models/society_dao');

module.exports = {
  queryList: function (params, callback) { //查询全部
    society_dao.query({}, callback);
  },
  add: function (params, callback) { //创建社团
    society_dao.add(params, callback);
  },
  query: function (params, callback) { //一般查询
    society_dao.query(params, callback);
  },
  delete: function (params, callback) { //删除社团
    society_dao.del(params, callback);
  },
  update: function (params, callback) { //更新
    society_dao.update(params, callback);
  },
  updataAvg: function (params, callback) { //更新平均分
    society_dao.updataAvg(params, callback);
  },
  updataFees: function (params, callback) { //更新会费
    society_dao.updataFees(params, callback);
  }
};