import {createContext, useState} from "react";

export const SkinContext = createContext({})

// eslint-disable-next-line react/prop-types
export const SkinProvider = ({ children }) => {
    const [skinChangeCount, setSkinChangeCount] = useState(0)
    return (
        <SkinContext value={{ skinChangeCount, setSkinChangeCount }}>
            {children}
        </SkinContext>
    )
}