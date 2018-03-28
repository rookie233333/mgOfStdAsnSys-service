var express = require('express');
var router = express.Router();
var user_dao=require('../models/user_dao');


router.post("/add", function(req, res) {//添加用户
	var params=[req.body.name,req.body.password,req.body.sex,req.body.student_id,req.body.birthday,req.body.phone,req.body.mail,req.body.avatar,req.body.level,req.body.department_id];
	user_dao.add(params,function(err,result){
		var response ={
      result:err==null,
      msg:err==null?'添加用户成功':'添加用户失败'
    };
		res.json(response);
	});
});

router.get("/show/:id",function(req,res){
	// res.send('123');
	user_dao.show([req.params.id],function(err,result){
		var response = {
			result:err==null,
			msg:err==null?'查询用户成功':'查询用户失败',
			data:result
		};
		res.json(response);
	});
});


module.exports = router;