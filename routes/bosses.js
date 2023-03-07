const express = require('express')
const bossesRouter = express.Router()
const path = require('path')

const bossData = require('../data/bosses')

bossesRouter.get('/data', (req, res) => {
    res.json(bossData)
})

bossesRouter.get('/:bossId', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/pages/boss.html'))
})

module.exports = bossesRouter