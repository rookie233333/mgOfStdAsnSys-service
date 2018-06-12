//活动流程
var fin_appli = require('../models/fin_appli_dao');

module.exports = {
  add: function (params, callback) {
    fin_appli.add(params, callback);
  },
  query: function (params, callback) {
    fin_appli.query(params, callback);
  },
  delete: function (params, callback) {
    fin_appli.del(params, callback);
  },
  updata: function (params, callback) {
    fin_appli.update(params, callback);
  },
};