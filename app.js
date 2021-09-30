// function greet(name = 'John', age = 99) {
//     // console.log('Hello')
//     console.log(name, age)
//     // console.log('Hey ' + name + " Your age is " + age)/
// }

// greet()



// function add(a = 0, b = 0) {
//     var sum = a + b
//     return sum
// }

var add = (a = 0, b = 0) => {
    var sum = a + b
    return sum
}



console.log(add(10, 20))
