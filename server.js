const express = require('express')
const database = require('./database/db')
const app = express()
app.use(express.json())



app.listen(3001, () => {
    console.log("Listening at PORT 3001")
})
