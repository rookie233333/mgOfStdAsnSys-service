var query = require('./database');
var tfmParam = require('./transformParam_fun');

module.exports = {
  add: function (params, callback) {
    params = tfmParam(params, 'name,content,status,society,site,people,time,score,society_id');
    query('insert into activity(name,content,status,society,site,people,time,score,society_id) value(?,?,?,?,?,?,?,?,?)', params, function (err, r) {
      callback(err, r);
    });
  },
  del: function (params, callback) {
    query('delete from activity where id = ' + params.id, function (err, r) {
      callback(err, r);
    });
  },
  query: function (params, callback) {
    var sql;
    if (params.society_id != undefined) { //按照社团查询
      sql = 'select * from activity where society_id = ' + params.society_id;
    } else if (params.id != undefined) {
      sql = 'select * from activity where id = ' + params.id;
    } else if (params.status != undefined) {
      sql = 'select * from activity where status = ' + params.status;
    } else {
      sql = 'select * form activity';
    }
    query(sql, function (err, r) {
      callback(err, r);
    });
  },
  queryByStatus: function (params, callback) {
    params = tfmParam(params, 'society_id,status');
    var sql = 'select a.*,s.`name` as society_name from activity a LEFT JOIN society s on a.society_id = s.id where society_id = ? and status = ?';
    query(sql, params, function (err, r) {
      callback(err, r);
    });
  },
  update: function (params, callback) {
    params = tfmParam(params, 'name,content,status,society,site,people,time,score,id');
    query('update activity set name=?,content=?,status=?,society=?,site=?,people=?,time=?,score=? where id = ?', params, function (err, r) {
      callback(err, r);
    });
  },
  updataSingle: function (params, callback) {
    var sql = '';
    if (params.status != undefined) {
      sql = 'update activity set status = ' + params.status + ' where id = ' + params.id;
    } else if (params.score != undefined) {
      sql = 'update activity set score = ' + params.score + ' where id = ' + params.id;
    } else {
      return;
    }
    query(sql,function(err,r){
      callback(err,r);
    });
  }
};