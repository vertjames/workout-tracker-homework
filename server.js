const express = require('express')
const { join } = require('path')
const mongoose = require('mongoose')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
})

app.listen(3000, () => {
  console.log(`App running on http://localhost:3000`);
})
