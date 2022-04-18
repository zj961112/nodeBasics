//导入fs模块，来操作文件
const fs = require('fs')
//读取文件
//参数1，文件的路径，参数2，读取文件采用的编码格式，默认指定utf8，参数3，回调函数拿到读取失败和成功的结果，err和dataStr
fs.readFile('./files/1.txt','utf8',function(err,dataStr){
    if(err){
        // return console.log('文件读取失败'+err.message)
    }
    // return console.log('读取文件成功'+dataStr)
})

//写入文件
//参数1，文件的路径，参数2，要写入的内容，参数3，读取文件采用的编码格式，默认指定utf8，参数4，回调函数拿到读取失败和成功的结果，err和dataStr
fs.writeFile('./files/2.txt','hello,node!!!!','utf8',function(err,dataStr){
    //如果文件写入成功，err=null,dataStr=undefined
    //文件写入失败，err=错误对象,dataStr=undefined
    if(err){
        return console.log('文件写入失败'+err.message)
    }
    return console.log('文件写入成功')
})