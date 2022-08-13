require('dotenv').config()
const express = require('express')
const app = express()

// entered this after creating views folder
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })
// above was to display hello world upon start, below is to run a home page
app.get('/', (req, res) => {
  res.render('home')
})


app.get('*', (req, res) => {
  res.render('error404')
})

app.listen(process.env.PORT)