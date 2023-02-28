const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080

const {bosses} = require('./public/data/bosses')

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

app.get('/data/bosses', (req, res) => {
  const bossesData = bosses.map((boss) => {
    const { id, name, health, image, location, description } = boss
    return { id, name, health, image, location, description }
  })

  res.json(bossesData)
})

app.get('/boss/:bossID', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/pages/boss.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/pages/pagenotfound.html'))
})

app.listen(port, () => {
  console.log(`listening at ${port}/`)
})