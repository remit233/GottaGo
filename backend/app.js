const express = require('express')
const app = express()

const bathroomRouter = require('./routes/bathroom')
const userRouter = require('./routes/user')

app.use(express.json())

app.use('/bathroom', bathroomRouter)
app.use('/user', userRouter)

app.get('/', async (req, res) => {
  res.send('ur not supposed to be here...')
})

module.exports = app;
