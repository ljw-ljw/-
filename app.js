
// 加载模块
var express = require('express');
var app = express();
app.use(express.static('wwwroot'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

var template = require('art-template');

// 导入处理视图的路由
app.use(require('./routers/view.js'));
// 导入路由
app.use('/student',require('./routers/student.js'))

app.listen(3000,function(){
	console.log('服务器开启成功...');
});
