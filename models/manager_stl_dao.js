var query = require('./database');
var tfmParam = require('./transformParam_fun');

module.exports = {
  add: function (params, callback) {
    params = tfmParam(params, 'name,password,role_auth');
    query('insert into association_manager(name,password,role_auth) value(?,?,?)', params, function (err, r) {
      callback(err, r);
    });
  },
  del: function (params, callback) {
    query('delete from association_manager where id = ' + params.id, function (err, r) {
      callback(err, r);
    });
  },
  query: function (params, callback) {
    var sql;
    if (params.name != undefined) {
      sql = 'select * from association_manager where name = "' + params.name + '"';
    } else if (params.id != undefined) {
      sql = 'select * from association_manager where id = ' + params.id;
    }else{
      sql = 'select * from association_manager';
    }
    query(sql, function (err, r) {
      callback(err, r);
    });
  },
  update: function (params, callback) {
    params = tfmParam(params, 'name,password,role_auth,id');
    query('update association_manager set name=?,password=?,role_auth=? where id =?', params, function (err, r) {
      callback(err, r);
    });
  }
};