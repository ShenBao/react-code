import {Suspense, useState} from "react";
import {fetchUserList} from "@/utils/api.js";
import LoadingPanel from "@/components/Loading";
import UserPanel from "@/components/UserPanel";




const LoadMoreData = () => {
    const [userPromises, setUserPromises] = useState(() => [fetchUserList(3)])
    const handleLoadMore = () => {
        setUserPromises([...userPromises, fetchUserList(3)])
    }
    return (
        <div>
            <h1>Load More Data</h1>
            {
                userPromises.map((item, index) => {
                    return (
                        <Suspense fallback={<LoadingPanel />} key={`__user_key__${index}`}>
                            <UserPanel userPromise={item} key={index}/>
                        </Suspense>
                    )
                })
            }
            <button onClick={handleLoadMore}>加载更多</button>
        </div>
    )
}

export default LoadMoreData