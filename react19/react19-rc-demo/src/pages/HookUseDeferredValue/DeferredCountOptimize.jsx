import {memo, useDeferredValue, useState} from 'react'


// eslint-disable-next-line react/prop-types,react/display-name
const ExpensiveItem = ({ count }) => {
    const startTime = performance.now()
    while (performance.now() - startTime < 1) { /* empty */ }
    return (
        <p>ExpensiveItem: bottom count(deferredValue count) is {count}</p>
    )
}

// eslint-disable-next-line react/prop-types,react/display-name
const ExpensiveCountBlock = memo(({ count }) => {
    console.log("ExpensiveCountBlock render")
    const items = []
    for(let i = 0; i < 200; i++) {
        items.push(<ExpensiveItem count={count} key={i}/>)
    }
    return (
        <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, auto)"}}>
                {items}
            </div>
            <p>ExpensiveCountBlock: bottom count(deferredValue count) is {count} </p>
        </div>
    )
})

const DeferredCountOptimize = () => {
    const [count, setCount] = useState(0)
    const deferredValueCount = useDeferredValue(count)
    const handleIncreaseCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h2>deferredValue count</h2>
            <h3>the top count updates faster and smoothly, while the bottom count updates slower</h3>
            <ExpensiveCountBlock count={deferredValueCount}/>
            <p>top count is {count}</p>
            <button onClick={handleIncreaseCount}>increase count</button>
        </div>
    )
}

export default DeferredCountOptimize