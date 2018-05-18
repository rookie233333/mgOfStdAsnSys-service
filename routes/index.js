var express = require('express');
var router = express.Router();
// var user_dao=require('../models/user_dao');

var swpuRequest = require('./swpu_main');

module.exports = router;

//活动
router.route('/swpu_activity').get(function (req, res) {
	handleRequest('swpu_activity', req.query, res);
}).post(function (req, res) {
	handleRequest('swpu_activity', req.body, res);
});
//部门
router.route('/swpu_department').get(function (req, res) {
	handleRequest('swpu_department', req.query, res);
}).post(function (req, res) {
	handleRequest('swpu_department', req.body, res);
});
//user
router.route('/swpu_user').get(function (req, res) {
	handleRequest('swpu_user', req.query, res);
}).post(function (req, res) {
	handleRequest('swpu_user', req.body, res);
});
//score
router.route('/swpu_score').get(function (req, res) {
	handleRequest('swpu_score', req.query, res);
}).post(function (req, res) {
	handleRequest('swpu_score', req.body, res);
});

// var routerArr = [
// 	'swpu_activity', 
// 	'swpu_user',
// 	'swpu_department',
// 	'swpu_score'
// ];
// for (var i = 0; i < routerArr.length; i++) {
// 	routeName = routerArr[i];
// 	router.route(routeName).get(function (req, res) {
// 		handleRequest(routeName, req.query, res);
// 	}).post(function (req, res) {
// 		handleRequest(routeName, req.body, res);
// 	});
// }



/**
 * 请求处理
 * 
 * @param {any} serviceid
 * @param {any} params 
 * @param {any} response 
 */
function handleRequest(serviceid, params, res) {
	var methodname = params.methodname;
	delete params.methodname;
	swpuRequest[serviceid][methodname](params, function (err, result) {
		var response = {
			ISSUCCESS: err == null,
			MSG: err == null ? '操作成功' : err,
			DATA: result
		};
		res.json(response);
	});
}