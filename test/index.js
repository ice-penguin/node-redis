//初始化连接客户端,ip,端口,连接密码
var client = require("../index").init(ip,port,password);

console.log(client);

var a = {
    name:"xxx",
    value:"222",
    obj:{
        onbj:"xx",
        obj2:{
            aa:"xxx"
        }
    }
};

// //stirng
// 命令 行为 返回值 使用示例(略去回调函数)
// set 设置存储在给定键中的值 OK set('key', 'value')
// get 获取存储在给定键中的值 value/null get('key')
// del 删除存储在给定键中的值(任意类型) 1/0 del('key')
client.set('hello',a)
.then(function(result){
    console.log("set",result);
})

client.get('hello')
.then(function(result){
    console.log("get",result);
})

client.del('list')
.then(function(result){
    console.log("del",result);
})

// //list
// 命令 行为 返回值 使用示例
// lpush 将给定值推入列表的左端 当前列表长度 rpush('key', 'value1' [,'value2']) (支持数组赋值)
// rpush 将给定值推入列表的右端 当前列表长度 rpush('key', 'value1' [,'value2']) (支持数组赋值)
// lrange 获取列表在给定范围上的所有值 array lrange('key', 0, -1) (返回所有值)
// lindex 获取列表在给定位置上的单个元素 lindex('key', 1)
// lpop 从列表左端弹出一个值，并返回被弹出的值 lpop('key')
// rpop 从列表右端弹出一个值，并返回被弹出的值 rpop('key')
// llen 获取列表长度 llen('key')
// ltrim 将列表按指定的index范围裁减 ltrim('key', 'start', 'end')
client.lpush('list','left')
.then(function(result){
    console.log("lpush",result);
})

client.rpush('list','right')
.then(function(result){
    console.log("rpush",result);
})

client.lpush('list','left2')
.then(function(result){
    console.log("lpush",result);
})

client.lpop('list')
.then(function(result){
    console.log("lpop",result);
})

client.llen('list')
.then(function(result){
    console.log("llen",result);
})

client.lrange('list',0,4)
.then(function(result){
    console.log("llen",result);
})

client.lindex('list',5)
.then(function(result){
    console.log("llen",result);
})

client.ltrim('list',0,4)
.then(function(result){
    console.log("llen",result);
})
