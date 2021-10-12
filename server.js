// const http = require('http')
// const fs = require('fs')
// const path = require('path')

// const server = http.createServer((request, response) => {
//     // request.url
//     const { url } = request
//     if (url == '/login') {
//         response.write('<h1>LOGIN</h1>')
//         response.end()
//     }
//     if (url == '/signup') {
//         response.write('<h1>SINGUP</h1>')
//         response.end()
//     }
// })


// server.listen(3000, () => {
//     console.log(`Server listening at PORT: ${3000}`)
// })

const data = [{ name: "Anisha" }, { name: "Suman" }, { name: "Varun" }]

const express = require('express')
const app = express()

app.get('/getNames', (req, res) => {
    res.send(data)
})


app.listen(3000, () => {
    console.log("server listening at port 3000")
})