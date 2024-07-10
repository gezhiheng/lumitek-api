import _ from 'module-alias/register'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import controller from './controller'

const app = express()
app.use(cors())
app.use(bodyParser.json()) // json请求
app.use(bodyParser.urlencoded({ extended: false })) // 表单请求
app.all('*', (req, res, next) => {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*')
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type')
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, POST, GET, OPTIONS')
  // 在请求的回调函数汇中遇见next()，就会继续执行后面的代码
  next()
})
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))
app.use('/', controller)

export default app
