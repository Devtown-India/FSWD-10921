const database = require('../database/db')
const express = require('express')
const router = express.Router()

router.get('/all', (req, res) => {

    try {
        res.json({
            categories: database.categories,
            message: "Successfully fetched categories",
            status: "SUCCESS"
        })
    } catch (error) {
        res.json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }

})

