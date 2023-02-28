const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080

const dataRouter = require('./routes/data')
const bossesRouter = require('./routes/boss')

app.use(express.static('public'))

app.use('/data/bosses', dataRouter)
app.use('/boss', bossesRouter)

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/pages/pagenotfound.html'))
})

app.listen(port, () => {
  console.log(`listening at ${port}/`)
})