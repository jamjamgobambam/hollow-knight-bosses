const express = require('express')
const indexRouter = express.Router()
const path = require('path')

indexRouter.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'))
})

indexRouter.all('*', (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, '../pages/404.html'))
})

module.exports = indexRouter