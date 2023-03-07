const express = require('express')
const app = express()

const bathroomRouter = require('./routes/bathroom')
const userRouter = require('./routes/user')

app.use('/bathroom', bathroomRouter)
app.use('/user', userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app;
