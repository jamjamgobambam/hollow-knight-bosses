const express = require('express')
const app = express()
const port = process.env.PORT || 8080

const indexRouter = require('./routes/index')
const bossesRouter = require('./routes/bosses')

app.use(express.static('public'))

app.use('/bosses', bossesRouter)
app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})