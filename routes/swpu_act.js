//活动流程
var act = require('../models/activity_real_dao');

module.exports = {
  queryBystatus: function (params, callback) {
    act.queryByStatus(params, callback);
  },
  add: function (params, callback) {
    act.add(params, callback);
  },
  query: function (params, callback) {
    act.query(params, callback);
  },
  delete: function (params, callback) {
    act.del(params, callback);
  },
  updata: function (params, callback) {
    act.update(params, callback);
  },
  updataStatus: function (params, callback) {
    act.updataSingle(params, callback);
  },
  updataScore: function (params, callback) {
    act.updataSingle(params, callback);
  }
};