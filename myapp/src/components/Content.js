import { useState, useEffect } from "react";

const Content = () => {

    const [counter, setCounter] = useState(0)
    const [content, setContent] = useState([])

    const APICall = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await res.json()
        setContent(data)
    }

    useEffect(() => {
        APICall()
    }, [])
    useEffect(() => {
        console.log('counter changed')
    }, [counter])


    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => { setCounter(prev => prev + 1) }} >Click Me </button>
            <ul>
                {content.map(item => <li style={{ margin: "10px", border: "3px solid black" }} >{item.title}</li>)}
            </ul>
        </div>);
}

export default Content;