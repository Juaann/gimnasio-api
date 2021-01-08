const express = require('express')
const app = express()
 
app.get('/user', function (req, res) {
  res.send('Estos son los users')
})

app.post('/user', function (req, res) {
  res.send('He creado un user XOXO')
})
 
app.listen(3000)
