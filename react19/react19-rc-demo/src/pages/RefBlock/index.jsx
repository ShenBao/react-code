import {useImperativeHandle, useRef, useState} from 'react'

// eslint-disable-next-line react/prop-types
const ListBlock = ({ ref }) => {
    const listBlockRef = useRef(null)
    const [list] = useState(() => {
        return Array.from({ length: 100 }).map((_, index) => {
            return { id: index, label: `list#${index}` }
        })
    })
    useImperativeHandle(ref, () => ({
        scrollToBottom: () => {
            listBlockRef.current.scrollTop = listBlockRef.current.scrollHeight
        }
    }))
    return (
        <div ref={listBlockRef} style={{ height: "300px", overflowY: "auto", border: "1px solid #EC4035", margin: "10px 0", padding: "10px" }}>
            {
                list.map(item => (
                    <div key={item.id}>{item.label}</div>
                ))
            }
        </div>
    )
}

// eslint-disable-next-line react/prop-types
const InputBox = ({ ref }) => {
    return (
        <input type="text" ref={ref}/>
    )
}

// eslint-disable-next-line react/prop-types
const RefContainer = ({ ref }) => {
    const inputRef = useRef(null)
    const listRef = useRef(null)
    useImperativeHandle(ref, () => {
        return {
            inputFocusAndListScrollToBottom: () => {
                inputRef.current.focus()
                listRef.current.scrollToBottom()
            }
        }
    })
    return (
        <>
            <InputBox ref={inputRef}/>
            <ListBlock ref={listRef}/>
        </>
    )
}
const RefBlock = () => {
    const containerRef = useRef(null)
    const handleBtnClick = () => {
        containerRef.current.inputFocusAndListScrollToBottom();
    }
    return (
        <div>
            <h1>Ref usage</h1>
            <RefContainer ref={containerRef}/>
            <button onClick={handleBtnClick}>click me to focus the input and move the list to the bottom</button>
        </div>
    )
}

export default RefBlock