var query = require('./database');
var tfmParam = require('./transformParam_fun');

module.exports = {
  add: function (params, callback) {
    params = tfmParam(params, 'site,time,society_id,activity_id');
    query('insert into site_application(site,time,society_id,activity_id) value(?,?,?,?)', params, function (err, r) {
      callback(err, r);
    });
  },
  del: function (params, callback) {
    query('delete from site_application where id = ' + params.id, function (err, r) {
      callback(err, r);
    });
  },
  query: function (params, callback) {
    var sql;
    if (params.society_id != undefined) {
      sql = 'select * from site_application where society_id = "' + params.name + '"';
    } else if (params.id != undefined) {
      sql = 'select * from site_application where id = ' + params.id;
    } else if (params.activity_id != undefined) {
      sql = 'select * from site_application where activity_id = ' + params.id;
    } else {
      sql = 'select * from site_application';
    }
    query(sql, function (err, r) {
      callback(err, r);
    });
  },
  update: function (params, callback) {
    params = tfmParam(params, 'site,time,society_id,activity_id,id');
    query('update site_application set site=?,time=?,society_id=?,activity_id=? where id = ?', params, function (err, r) {
      callback(err, r);
    });
  }
};