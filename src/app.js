const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json()) // Parses incoming json to an object
app.use(userRouter)
app.use(taskRouter)

module.exports = app