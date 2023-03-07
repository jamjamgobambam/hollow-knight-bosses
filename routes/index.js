const express = require('express')
const indexRouter = express.Router()
const path = require('path')

indexRouter.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
})

indexRouter.all('*', (req, res) => {
<<<<<<< HEAD
    res.status(404).sendFile(path.resolve(__dirname, '../public/pages/404.html'))
})
=======
    res.status(404).sendFile(path.resolve('./public/pages/404.html'))
  })
>>>>>>> 00f3bdd8a0e7eee02377e80b8150e70b9f5f49ed

module.exports = indexRouter