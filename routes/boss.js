const express = require('express')
const path = require('path')
const bossRouter = express.Router()

bossRouter.get('/:bossID', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/pages/boss.html'))
})

module.exports = bossRouter