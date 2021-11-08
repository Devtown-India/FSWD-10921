import { useEffect, useState } from "react";

const Tap = () => {


    useEffect(() => {
        const alert = () => window.alert("HEY !! you just double clicked")
        document.addEventListener('dblclick', alert)
        return () => document.removeEventListener('dblclick', alert)
    }, [])

    const [count, setcount] = useState(0)

    return (
        <div className="container">
            <div className="tap">
                <h3>{count}</h3>
                <button onClick={() => { setcount(prev => prev += 1) }}>CLick</button>
                <h2>Tap</h2>
            </div>
        </div>
    );
}

export default Tap;