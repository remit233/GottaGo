const express = require('express')
const app = express()
const port = 3000

const bathroomRouter = require('./routes/bathroom')
const userRouter = require('./routes/user')

app.use('/bathroom', bathroomRouter)
app.use('/user', userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

