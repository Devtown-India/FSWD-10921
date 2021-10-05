let response = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
    console.log(data)
})



