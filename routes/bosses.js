const express = require('express')
const bossesRouter = express.Router()
const path = require('path')

const bossData = require('../data/bosses')

bossesRouter.get('/data', (req, res) => {
    res.status(200).json(bossData)
})

bossesRouter.get('/:bossId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../pages/boss.html'))
})

module.exports = bossesRouter