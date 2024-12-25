import {Suspense, use, useEffect, useState} from "react";
import LoadingPanel from "@/components/Loading.jsx";
import {getMessage} from "@/utils/api.js";

// eslint-disable-next-line react/prop-types
const Message = ({ msgPromise }) => {
    if(!msgPromise) {
        return (
            <div>no data</div>
        )
    }
    const msgData = use(msgPromise)
    return (
        <div>接受到的消息为{msgData.value}</div>
    )
}

const DataInitAndUpdate = () => {
    const [msgPromise, updateMsgPromise] = useState(getMessage)
    const handleReFetchData = () => {
        updateMsgPromise(getMessage())
    }
    useEffect(() => {
        console.log("msgPromise changed", msgPromise)
    }, [msgPromise]);
    return (
        <div>
            <h1>Data Init And Update</h1>
            <Suspense fallback={<LoadingPanel />}>
                <Message msgPromise={msgPromise}/>
            </Suspense>
            <button onClick={handleReFetchData}>重新获取数据</button>
        </div>
    )
}

export default DataInitAndUpdate