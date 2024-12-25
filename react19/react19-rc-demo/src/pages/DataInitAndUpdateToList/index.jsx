import {Suspense, use, useEffect, useState} from "react";
import LoadingPanel from "@/components/Loading.jsx";
import {getMessage} from "@/utils/api.js";


// eslint-disable-next-line react/prop-types
const ListBlock = ({ list }) => {
    if(!list?.length) return null
    return (
        <div>
            {
                list.map((item, index) => {
                    if(item.type === "loading") {
                        return (<LoadingPanel key={index}/>)
                    }
                    return (
                        <div key={index}>接受到的消息为{item.value}</div>
                    )
                })
            }
        </div>
    )
}

const OldImplementation = () => {
    const [dataList, setDataList] = useState([])
    useEffect(() => {
        handleUpdateList()
    }, []);
    const handleUpdateList = () => {
        setDataList([...dataList, { type: "loading"}])
        getMessage().then(res => {
            setDataList([...dataList, res])
        })
    }
    const handleAddData = () => {
        handleUpdateList()
    }
    return (
        <div>
            <h1>老版本(18.x)实现</h1>
            <h2>setState中没有传函数参数的话，会出现下面的问题</h2>
            <button onClick={handleAddData}>获取更多数据</button>
            <ListBlock list={dataList} />
        </div>
    )
}

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

const NewImplementation = () => {
    const [msgPromises, updateMsgPromises] = useState([getMessage()])
    const handleReFetchData = () => {
        updateMsgPromises([...msgPromises, getMessage()])
    }
   return (
       <div>
           <h1>新版本(19.x)实现</h1>
           <button onClick={handleReFetchData}>获取更多数据</button>
           {
               msgPromises.map((promise, index) => {
                   return (
                       <Suspense fallback={<LoadingPanel />} key={`__h__${index}`}>
                           <Message key={index} msgPromise={promise}/>
                       </Suspense>
                   )
               })
           }
       </div>
   )
}

const DataInitAndAddToList = () => {
    return (
        <div>
            <h1>Data Init And Update To List</h1>
            <OldImplementation />
            <NewImplementation />
        </div>
    )
}

export default DataInitAndAddToList