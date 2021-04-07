const mongoose = require('mongoose')
require('dotenv').config()

const url = (process.env.NODE_ENV === 'test'? process.env.MONGODB_URL_TEST : process.env.MONGODB_URL)

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
