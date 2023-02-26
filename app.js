var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const port = process.env.PORT || 8080

var indexRouter = require('./routes/index')
var bossRouter = require('./routes/boss')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/boss', bossRouter)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

module.exports = app