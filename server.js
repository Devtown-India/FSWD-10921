const express = require('express')
const app = express()
const category_Routes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoutes')
app.use(express.json())


app.use('/category', category_Routes)
app.use('/products', productRoutes)


app.listen(3001, () => {
    console.log("Listening at PORT 3001")
})
