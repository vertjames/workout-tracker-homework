const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require("./seeders/seed.js")
  .then(() => app.listen(process.env.PORT || 3000, () =>
    console.log("http://localhost:3000")))
  .catch((err) => console.error(err))
