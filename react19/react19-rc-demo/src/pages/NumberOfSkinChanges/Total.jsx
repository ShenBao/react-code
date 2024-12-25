import {useContext} from "react"
import {SkinContext} from "./context"

const Total = () => {
    console.log("total render")
    const { skinChangeCount } = useContext(SkinContext)
    return (
        <div style={{ padding: "10px "}}>
            所有组件切换主题的次数为 <span style={{ fontSize: "28px", fontWeight: "bold" }}>{skinChangeCount}</span>
        </div>
    )
}

export default Total