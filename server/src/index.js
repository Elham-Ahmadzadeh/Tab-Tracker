const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(express.urlencoded({
  extended: true
}))
app.use(cors())
app.use(express.json())

app.get('/status', (req,res) => {
  res.send({
    message: "hello world"
  })
})
console.log('hello')

app.listen(process.env.PORT || 8082)