import {use, useState} from "react";
import {randomStr} from "@/utils/api.js";

const msgPromise = new Promise((resolve, reject) => {
    const index = Math.floor(Math.random() * randomStr.length)
    resolve({ value: randomStr[index]} )
    // reject("========")
})


// eslint-disable-next-line react/prop-types
const Message = ({ msg }) => {
    return (
        <div>接受到的消息为{msg}</div>
    )
}

const LoadingPanel = () => <div>loading......</div>


const BasicUsage = () => {
    const msgValue = use(msgPromise)
    console.log(msgValue, "BasicUsage")
    return (
        <div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1>basic usage of "use"</h1>
            <Message msg={msgValue.value}/>
        </div>
    )
}

const UseInCondition = () => {
    const [loading, setLoading] = useState(false)
    let msgValue = { value: "" }
    if(!loading) {
        msgValue = use(msgPromise)
    }
    return (
        <div>
            <h1>Using in condition</h1>
            {
                loading ? <LoadingPanel /> : (<Message msg={msgValue.value}/>)
            }
            <button onClick={() => setLoading(!loading)}>点击切换状态</button>
        </div>
    )
}

/**
 * 目前这种用法会报错
 * Error: async/await is not yet supported in Client Components, only Server Components.
 * This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.
 */
// eslint-disable-next-line no-unused-vars
const UseInAsyncRequest = () => {
    const [loading, setLoading] = useState(true)
    const promise = getMessage().then(res => {
        setLoading(false)
        return res
    })
    let msgValue = { value: "" }
    if(!loading) {
        msgValue = use(promise)
    }
    return (
        <div>
            <h1>Using in asynchronous requests</h1>
            {
               loading ? <LoadingPanel /> : (<Message msg={msgValue.value}/>)
            }
        </div>
    )
}

const UsePage = () => {
    return (
        <>
            <BasicUsage />
            <UseInCondition />
            {/*<UseInAsyncRequest />*/}
        </>
    )
}

export default UsePage