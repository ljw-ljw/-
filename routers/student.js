
// 请求 做 学生的 增 删 改 查 的路由

// 创建一个路由
var express = require('express');
var router = express.Router();

// 导入操作数据库集合的构造函数 Student
var Student = require('../module/mongoose.js');

// 添加学生信息
router.post('/add',function(req,res){
	// 添加信息的时间
//	console.log(req.body);
	req.body.createTime = new Date();
	console.log(req.body);
	
	var student = new Student(req.body);
	student.save(function(err){
		if(!err){
			res.send('添加成功');
		}
	})
});
// 导出路由
module.exports = router;