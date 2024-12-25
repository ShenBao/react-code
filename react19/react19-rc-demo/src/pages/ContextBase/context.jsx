import {createContext, useState} from "react";

const initialValue = {
    task: 'TASK-8878',
    content: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
    status: 'Progress',
    priority: 'Medium'
}
export const AppContext = createContext({})

export const AppProvider = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children } = props
    const [appValue, setAppValue] = useState(initialValue)
    return (
        <AppContext value={{ appValue, setAppValue }}>
            {children}
        </AppContext>
    )
}