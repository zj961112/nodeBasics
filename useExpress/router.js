const express = require('express')

const router = express.Router()

//向路由对象上挂载具体的路由

router.get('/user/get',(req,res)=>{
    console.log(req.query)
    res.send('GET success')
})

router.post('/user/post',(req,res)=>{
    console.log(req.body)
    res.send('POST success')
})

module.exports = router