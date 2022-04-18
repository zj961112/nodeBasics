const fs = require('fs')
fs.readFile('./files/成绩.txt','utf8',function(err,dataStr){
    if(err){
        return console.log('读取文件失败'+err.message)
    }
    // console.log('读取文件成功'+dataStr)
    //先把成绩数据按照空格进行分割，循环分割后的数组，每一项数据进行字符串的操作
    //把新书组进行合并，得到一个新的字符串
    const arrOld = dataStr.split(' ')
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=',':'))
    })
    const newStr = arrNew.join('\r\n')
    //调用fs.writeFile把处理完毕的成绩写入到新的txt中
    fs.writeFile('./files/成绩-ok.txt',newStr,function(err){
        if(err){
            return console.log('写入文件失败'+err.message)
        }
        console.log('成绩写入成功')
    })
})