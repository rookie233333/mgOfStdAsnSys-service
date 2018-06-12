//场地申请
var site_appli = require('../models/site_appli_dao');

module.exports = {
  add: function (params, callback) {
    site_appli.add(params, callback);
  },
  query: function (params, callback) {
    site_appli.query(params, callback);
  },
  delete: function (params, callback) {
    site_appli.del(params, callback);
  },
  updata: function (params, callback) {
    site_appli.update(params, callback);
  },
};