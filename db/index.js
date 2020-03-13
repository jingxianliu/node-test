// // 导入 mongoose 模块
// const mongoose = require('mongoose');

// // 设置默认 mongoose 连接
// //mongo "mongodb+srv://cluster0-grslr.mongodb.net/test"  --username xiaobai
// const mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB);
// // 让 mongoose 使用全局 Promise 库
// mongoose.Promise = global.Promise;
// // 取得默认连接
// const db = mongoose.connection;

// // 将连接与错误事件绑定（以获得连接错误的提示）
// db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));




const mysql = require('mysql')
//const { MYSQL_CONF } = require('./mysql')
const MYSQL_CONF= {host: '139.199.89.93',
user: 'root',
password: 'pwd@123',
database: 'xiaobai',
port: 3307};
const con = mysql.createConnection(MYSQL_CONF)

// 开始连接
con.connect()

// 统一执行sql的函数

function exec(sql,data ) {
    const promise = new Promise((resolve, reject) => {
     
        con.query(sql,data, (err, result) => {
            console.log(`sql:${sql}`)
            console.log(`sql-params:${JSON.stringify(data)}`)
            if (err)  return resolve({err:err.sqlMessage})
            return resolve(result) 
        })
    })
  
    return promise
}

module.exports = {
    exec
}
