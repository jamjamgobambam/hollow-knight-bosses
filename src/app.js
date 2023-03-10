const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

const indexRouter = require('../routes/index')
const bossesRouter = require('../routes/bosses')

app.use('/public', express.static('../public'))
app.use('/scripts', express.static('../scripts'))
app.use('/css', express.static('./app.css'))

app.use('/bosses', bossesRouter)
app.use('/', indexRouter)

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
})