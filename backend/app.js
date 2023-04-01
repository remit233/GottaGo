const express = require('express')
const cors = require('cors')


const bathroomRouter = require('./routes/bathroom')
const userRouter = require('./routes/user')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/bathroom', bathroomRouter)
app.use('/user', userRouter)

app.get('/', async (req, res) => {
  res.send('ur not supposed to be here...')
})

module.exports = app;
