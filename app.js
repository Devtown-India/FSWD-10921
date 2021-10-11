const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

const arr = [1, 2, 3, 4, 5]



localStorage.setItem('val', JSON.stringify(arr))

console.log(JSON.parse(localStorage.getItem('val')))