// 请求页面布局的路由

// 创建一个路由
var express = require('express');
var router = express.Router();

// 导入操作数据库集合的构造函数 Student
var Student = require('../module/mongoose.js');

// 获取首页数据
// 获取学生信息的页面
// 假设一页展示 5 条数据
var countOfPage = 5;
router.get('/', function(req, res) {
	// page : 表示要展示第几页数据，假设获取的是第一页
	var page;
	page = req.query.page;
	if(!page) {
		page = 1;
	}

	// 先来获取所有学生的个数
	Student.count(function(err, total) {
		if(!err) {
			// 获取总页数
			var allPages = Math.ceil(total / countOfPage);
			// 判断用户出阿迪过来的 page 是否为脏数据(无效数据,比如小于1 或者 大于总页数)
			if(page > allPages) {
				page = allPages;
			}
			if(page < 1) {
				page = 1;
			}
			// 查询数据
			Student.find(function(err, data) {
				if(!err) {
					var render = require('../views/index');
					var htmlStr = render({
						title: '首页',
						data: data
					})
					res.status(200).send(htmlStr);
				} else {
					res.status(200).send('查询失败');
				}
			})

		}
	})

})

// 根据当前页和总页数，来获取前几页和后几页
// 获取要显示的页数
function getShowPages(page, allPages){
	
	// showPage : 保存当前点击的这一页的前几页和后几页
	var showPage = [];
	// 如果小于等于 5 就有多少放多少
	if(allPages <= 5){
		for(var i = 0 ; i < allPages; i++){
			showPage.push(i+1);
		}
	}else{
		
	}
	
	
}





router.get('/add', function(req, res) {

	var render = require('../views/add');
	var htmlStr = render({
		title: '添加学生信息'
	});
	res.status(200).send(htmlStr);
})

// 导出路由对象
module.exports = router;