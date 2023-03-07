const express = require('express')
const bossesRouter = express.Router()
const path = require('path')

const bossData = require('../data/bosses')

bossesRouter.get('/data', (req, res) => {
    res.json(bossData)
})

bossesRouter.get('/:bossId', (req, res) => {
<<<<<<< HEAD
    res.sendFile(path.resolve(__dirname, '../public/pages/boss.html'))
=======
    res.sendFile(path.resolve('../public/pages/boss.html'))
>>>>>>> 00f3bdd8a0e7eee02377e80b8150e70b9f5f49ed
})

module.exports = bossesRouter