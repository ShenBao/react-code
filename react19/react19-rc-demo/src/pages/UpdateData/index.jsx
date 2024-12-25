import {Suspense, use, useState} from "react";
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

const UpdateData = () => {
    const [msgPromise, updateMsgPromise] = useState(null)
    const handleFetchData = () => {
        updateMsgPromise(getMessage())
    }
    return (
        <div>
            <h1>Update Data</h1>
            <Suspense fallback={<LoadingPanel />}>
                <Message msgPromise={msgPromise}/>
            </Suspense>
            <button onClick={handleFetchData}>获取数据</button>
        </div>
    )
}

export default UpdateData