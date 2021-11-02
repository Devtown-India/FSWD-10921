import { useState } from 'react'

const Content = () => {

    const [items, setItems] = useState([])
    const [value, setValue] = useState('')

    const handleSubmit = () => {
        setItems(prev => [...prev, value])
    }

    const handleInput = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            <h2>Todo</h2>
            <input onChange={handleInput} type="text" />
            <button onClick={handleSubmit} type="submit">Add</button>
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
        </>
    );
}

export default Content;