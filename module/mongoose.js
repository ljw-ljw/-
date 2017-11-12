
// 加载 mongoose 模块
var mongoose = require('mongoose');
// mongodb:// 请求协议   http://   file://  ftp://
mongoose.connect('mongodb://localhost:27017/h5-10');
// 连接数据库
var db = mongoose.connection;
// 监听数据库连接状态
db.on('open',function(){
	console.log('数据库连接成功');
})
db.on('error',function(err){
	console.log('数据库连接失败');
})
// 创建 Schema 构造函数
var Schema = mongoose.Schema;

var studentSchema = new Schema({
	name: String,
	age: Number,
	gender: Boolean,
	phone: String,
	email: String,
	detail: String,
	createTime: Date
},{collection: 'fzH5-10'})

var Student = mongoose.model('h5-10',studentSchema);
// 导出 Student 构造函数
module.exports = Student;
