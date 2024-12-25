import {Suspense, use} from "react";
import {getMessage} from "@/utils/api.js";
import LoadingPanel from "@/components/Loading";


// eslint-disable-next-line react/prop-types
const Message = ({ msgPromise }) => {
    const msgValue = use(msgPromise)
    return (
        <div>接受到的消息为{msgValue.value}</div>
    )
}



const UseInAsyncRequest = () => {
    const msgPromise = getMessage()
    return (
        <div>
            <h1>Using in asynchronous requests</h1>
            <Suspense fallback={<LoadingPanel />}>
                <Message msgPromise={msgPromise}/>
            </Suspense>
        </div>
    )
}

const SuspenseWithOrdinaryComp = () => {
    return (
        <div>
            <h1>Suspense 中包裹普通组件</h1>
            <Suspense fallback={<div>你永远看不到我</div>}>
                <div>suspense 中包裹普通组件，会直接渲染出来</div>
            </Suspense>
        </div>
    )
}

const SuspensePage = () => {
    return (
        <>
            <UseInAsyncRequest />
            <SuspenseWithOrdinaryComp />
        </>
    )
}

export default SuspensePage