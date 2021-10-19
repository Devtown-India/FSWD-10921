const express = require('express')
const app = express()
const categoryRoutes = require('./routes/categoryRoutes')



app.use(express.json())
//  http://3001/mercedes/Route
app.use('/category', categoryRoutes)

app.get('/', (req, res) => {
    try {
        console.log(document)
    } catch (error) {
        res.status(203).send(error.message)
    }
})


app.listen(3001, () => {
    console.log("Listening at PORT 3001")
})


