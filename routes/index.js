var express = require('express');
var router = express.Router();
// var user_dao=require('../models/user_dao');

var swpuRequest = require('./swpu_main');

module.exports = router;

router.post("/", function (req, res) { //post请求
	var serviceid = req.query.serviceid;
	handleRequest(req.query, function (err, result) {
		var response = {
			ISSUCCESS: err == null,
			MSG: err == null ? '操作成功' : err,
			DATA: result
		};
		res.json(response);
	});
});

router.get("/", function (req, res) { //get请求
	var serviceid = req.query.serviceid;
	handleRequest(req.query, function (err, result) {
		var response = {
			ISSUCCESS: err == null,
			MSG: err == null ? '操作成功' : err,
			DATA: result
		};
		res.json(response);
	});
});

/**
 * 请求处理
 * 
 * @param {any} serviceid
 * @param {any} params 
 * @param {any} response 
 */
function handleRequest(params, callback) {
	var serviceid = params.serviceid,
		methodname = params.methodname;
	delete params.serviceid;
	delete params.methodname;
	swpuRequest[serviceid][methodname](params, callback);
}