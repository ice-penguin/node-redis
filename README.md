## 安装

> use npm install
>
> 使用 npm 安装

```
npm install node-redis-h
```

> [download](https://github.com/ice-penguin/node_floatobj) form GitHub
>
> 从 github[下载](https://github.com/ice-penguin/node_floatobj)

## Introduce 模块说明

> 对 node 的 redis 模块常规方法进行封装，支持 promise 风格的写法

## Sample example 使用说明

```
//初始化连接客户端,ip,端口,连接密码
var client = require("node-redis-h").init(ip,port,password);

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
// mset 获取存储在给定键中的值 value/null mset(['key1',value1,'key2',value2])
// mget 获取存储在给定键中的值 value/null mget(['key1','key2'])
// del 删除存储在给定键中的值(任意类型) 1/0 del('key')
client.set('hello',a)
.then(function(result){
    console.log("set",result);
})

client.get('hello')
.then(function(result){
    console.log("get",result);
})

client.mset(['hello',a,'hello1',a])
.then(function(result){
    console.log("set",result);
})

client.mget(['hello','hello1'])
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

// hmset 在一个key中存入一系列键值对
// hgetall 通过key获取存储着的一系列键值对

client.hmset('testhash',["key4","hhh"])
.then(function(result){
    console.log("hmset",result);
})

client.hmset('testhash',{1:1,2:2})
.then(function(result){
    console.log("hmset",result);
})

client.h,get('testhash',["1","2"])
.then(function(result){
    console.log("h,get",result);
})

client.hgetall('testhash')
.then(function(result){
    console.log("hgetall",result);
})

// hset 在散列里面关联起给定的键值对 1(新增)/0(更新) hset('hash-key', 'sub-key', 'value') (不支持数组、字符串)
client.hset('testhash')
.then(function(result){
    console.log("hset",result);
})

// hget 获取指定散列键的值 hget('hash-key', 'sub-key')
client.hget('testhash')
.then(function(result){
    console.log("hget",result);
})

// hexists 检查给定键是否在散列中 1/0 hexists('hash-key', 'sub-key')
client.hexists('testhash')
.then(function(result){
    console.log("hexists",result);
})

```
