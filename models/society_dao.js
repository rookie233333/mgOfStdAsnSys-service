var query = require('./database');
var tfmParam = require('./transformParam_fun');

module.exports = {
  add: function (params, callback) {
    params = tfmParam(params, 'name,discribe,group_id,avatar,average_score,fees');
    query('insert into society(name,discribe,group_id,avatar,average_score,fees) value(?,?,?,?,?,?)', params, function (err, r) {
      callback(err, r);
    });
  },
  del: function (params, callback) {
    query('delete from society where id = ' + params.id, function (err, r) {
      callback(err, r);
    });
  },
  query: function (params, callback) {
    var sql;
    if (params.name != undefined) {
      sql = 'select * from society where id <> 0 and name = "' + params.name + '"';
    } else if (params.id != undefined) {
      sql = 'select * from society where id <> 0 and id = ' + params.id;
    } else {
      sql = 'select * from society where id <> 0';
    }
    query(sql, function (err, r) {
      callback(err, r);
    });
  },
  update: function (params, callback) {
    params = tfmParam(params, 'name,discribe,group_id,avatar,average_score,fees,id');
    query('update society set name=?,discribe=?,group_id=?,avatar=?,average_score=?,fees=? where id=?', params, function (err, r) {
      callback(err, r);
    });
  },
  updataAvg: function (params, callback) {
    params = tfmParam(params, 'average_score,id');
    query('update society set average_score = ? where id=?', params, function (err, r) {
      callback(err, r);
    });
  },
  updataFees: function (params, callback) {
    params = tfmParam(params, 'fees,id');
    query('update society set fees = ? where id=?', params, function (err, r) {
      callback(err, r);
    });
  }
};