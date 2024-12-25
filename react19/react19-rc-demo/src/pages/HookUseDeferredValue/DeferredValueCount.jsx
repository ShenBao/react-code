import {memo, useDeferredValue, useState} from 'react'


// eslint-disable-next-line react/prop-types,react/display-name
const ExpensiveCountBlock = memo(({ count }) => {
    console.log("ExpensiveCountBlock render")
    const startTime = performance.now()
    while (performance.now() - startTime < 200) { /* empty */ }
    return (
        <p>bottom count(deferredValue count) is {count}</p>
    )
})

const DeferredValueCount = () => {
    const [count, setCount] = useState(0)
    const deferredValueCount = useDeferredValue(count)
    const handleIncreaseCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h2>deferredValue count</h2>
            <h3>the top count updates faster, while the bottom count updates slower，but the top count does not update smoothly</h3>
            <p>top count is {count}</p>
            <ExpensiveCountBlock count={deferredValueCount}/>
            <button onClick={handleIncreaseCount}>increase count</button>
        </div>
    )
}

export default DeferredValueCount