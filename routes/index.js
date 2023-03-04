const express = require('express')
const indexRouter = express.Router()
const path = require('path')

indexRouter.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
})

indexRouter.all('*', (req, res) => {
    res.status(404).send('page not found')
})

module.exports = indexRouter