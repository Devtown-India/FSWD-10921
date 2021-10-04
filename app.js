var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

var chores = []

var deleteItem = (value) => {
    const index = chores.indexOf(value)
    chores.splice(index, 1)
    console.log(chores)
}


const callbackfunc = (event) => {
    // console.log(input.value)
    const inputValue = input.value
    if (chores.includes(inputValue)) {
        console.log('already exists')
    }
    else {
        chores.push(inputValue)
        const element = document.createElement('li')
        const textNode = document.createTextNode(inputValue)
        element.appendChild(textNode)
        list.appendChild(element)
        element.addEventListener('click', (e) => { e.target.remove() })
    }
}


button.addEventListener('click', callbackfunc)