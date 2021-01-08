const express = require('express')
const app = express()
 
app.get('/user', function (req, res) {
  res.send('Estos son los users')
})

app.post('/user', function (req, res) {
  res.send('He creado un user XOXO')
})

app.put('/user', function (req, res) {
  res.send('Estos son los users put')
})

app.delete('/user', function (req, res) {
  res.send('He creado un user delete XOXO')
})
 
app.listen(3000)
