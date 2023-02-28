const express = require('express')
const path = require('path')
const dataRouter = express.Router()

const {bosses} = require('../public/data/bosses')

dataRouter.get('/', (req, res) => {
  const bossesData = bosses.map((boss) => {
    const { id, name, health, image, location, description } = boss
    return { id, name, health, image, location, description }
  })

  res.json(bossesData)
})

module.exports = dataRouter