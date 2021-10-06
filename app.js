// let response = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
const list = document.querySelector('ul')



let arr = ['One', 'Two', 'Three', 'Four']

arr.forEach(chore => {
    const element = document.createElement('li')
    const textNode = document.createTextNode(chore)
    element.appendChild(textNode)

    element.addEventListener('click', (e) => {
        const userInput = window.prompt(`Are you sure that you want to delete "${chore}"`)
        if (userInput === 'YES') e.target.remove()
    })

    list.appendChild(element)
})