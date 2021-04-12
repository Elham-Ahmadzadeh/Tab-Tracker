require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const pool = require('./dbConfig')
const app = express()
app.use(morgan('combined'))
app.use(express.urlencoded({
  extended: false   // send
}))
app.use(cors())
app.use(express.json())

app.get('/register', (req,res) => {
  res.render('login')
})
app.post('/register', (req,res) => {
  let { name, email, password, password2 } = req.body

  console.log({
    name,
    email,
    password,
    password2
  })
})


console.log('hello')

app.listen(process.env.PORT || 8082)