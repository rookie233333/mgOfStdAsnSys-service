var query = require('./database');
var tfmParam = require('./transformParam_fun');

module.exports = {
  add: function (params, callback) {
    params = tfmParam(params, 'name,society_id,password');
    query('insert into society_manager(name,society_id,password) value(?,?,?)', params, function (err, r) {
      callback(err, r);
    });
  },
  del: function (params, callback) {
    query('delete from society_manager where id = ' + params.id, function (err, r) {
      callback(err, r);
    });
  },
  query: function (params, callback) {
    var sql;
    if (params.name != undefined) {
      sql = 'select m.*,s.`name` as society_name from society_manager m LEFT JOIN society s on m.society_id = s.id where m.name = "' + params.name + '"';
    } else if (params.id != undefined) {
      sql = 'select m.*,s.`name` as society_name from society_manager m LEFT JOIN society s on m.society_id = s.id where m.id = ' + params.id;
    }else{
      sql = 'select m.*,s.`name` as society_name from society_manager m LEFT JOIN society s on m.society_id = s.id';
    }
    query(sql, function (err, r) {
      callback(err, r);
    });
  },
  update: function (params, callback) {
    params = tfmParam(params, 'name,society_id,password,id');
    query('update society_manager set name=?,society_id=?,password=? where id = ?', params, function (err, r) {
      callback(err, r);
    });
  }
};