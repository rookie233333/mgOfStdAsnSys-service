var query = require('./database');
var tfmParam = require('./transformParam_fun');

module.exports = {
  add: function (params, callback) {
    params = tfmParam(params, 'price,list,society_id,activity_id');
    query('insert into finance_application(price,list,society_id,activity_id) value(?,?,?,?)', params, function (err, r) {
      callback(err, r);
    });
  },
  del: function (params, callback) {
    query('delete from finance_application where id = ' + params.id, function (err, r) {
      callback(err, r);
    });
  },
  query: function (params, callback) {
    var sql;
    if (params.society_id != undefined) {
      sql = 'select * from finance_application where society_id = "' + params.name + '"';
    } else if (params.id != undefined) {
      sql = 'select * from finance_application where id = ' + params.id;
    } else if (params.activity_id != undefined) {
      sql = 'select * from finance_application where activity_id = ' + params.id;
    } else {
      sql = 'select * form finance_application';
    }
    query(sql, function (err, r) {
      callback(err, r);
    });
  },
  update: function (params, callback) {
    params = tfmParam(params, 'price,list,society_id,activity_id,id');
    query('update finance_application set price=?,list=?,society_id=?,activity_id=? where id = ?', params, function (err, r) {
      callback(err, r);
    });
  }
};