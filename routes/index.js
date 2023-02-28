const express = require('express')
const path = require('path')
const indexRouter = express.Router()

indexRouter.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

indexRouter.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/pages/pagenotfound.html'))
})

module.exports = indexRouter