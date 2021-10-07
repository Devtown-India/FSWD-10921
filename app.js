const ul = document.querySelector('ul')
const but = document.querySelector('button')
const getText = document.querySelector('input')
const getData = async (item) => {
    console.log(item)
    const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.hits)
}

//  add event listener to the button
but.addEventListener('click', (e) => {
    getData(getText.value)
})