import {useContext, useState} from 'react'
import {SkinContext} from "./context";
import clsx from "clsx";

import "./index.css"

const Card = () => {
    console.log("card render")
    const { skinChangeCount, setSkinChangeCount } = useContext(SkinContext)
    const [curCardCount, setCurCount] = useState(0)
    const [theme, setTheme] = useState("theme-light")
    const handleChangeSkin = () => {
        setTheme(theme === "theme-light" ? "theme-dark" : "theme-light")
        setCurCount(curCardCount + 1)
        setSkinChangeCount(skinChangeCount + 1)
    }
    return (
        <div className={clsx("card-container", theme)}>
            <div className="context-card">
                <h3>Card Title</h3>
                The useActionState Hook is currently only available in React’s Canary and experimental channels. Learn more about release channels here.
            </div>
            <div className="card-desc">
                <span>当前组件修改主题次数为 <span style={{ fontWeight: "bold", fontSize: "22px" }}>{curCardCount}</span></span><br/>
                <button onClick={handleChangeSkin}>click me to change the skin</button>
            </div>
        </div>
    )
}

export default Card