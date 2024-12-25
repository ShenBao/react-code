import {useState} from 'react'

const NormalCount = () => {
    const [count, setCount] = useState(0)
    const handleIncreaseCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h2>normal count</h2>
            <h3>the top count and bottom count are updated synchronously</h3>
            <p>top count is {count}</p>
            <p>bottom count is {count}</p>
            <button onClick={handleIncreaseCount}>increase count</button>
        </div>
    )
}

export default NormalCount