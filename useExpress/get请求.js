// 编写一个get请求的接口
const express = require('express')
const app  = express()


const router = require('./router')
//中间件
// 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
app.use(express.json())
// 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended:false }))

app.use('/api',router)
// app.post('/user',(req,res)=>{
//   console.log(req.body)
//   res.send('ok')
// })

// app.get('/user',(req,res)=>{
//   console.log(req.query)
//   res.send(req.query)
// })

app.listen(8080,()=>{
  console.log('Express server running at http://127.0.0.1')
})