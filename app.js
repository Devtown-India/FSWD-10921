const path = require('path')

console.log(path.resolve('./app.js'))

console.log(path.relative('/', "./temp/utils.js"))

console.log(path.extname('./app.js'))

console.log(path.dirname('./temp/utils.js'))



console.log(path.join(__dirname, 'app.js'))
