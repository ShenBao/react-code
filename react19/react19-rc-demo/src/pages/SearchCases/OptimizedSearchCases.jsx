import {Suspense, useDeferredValue, useState} from 'react'
import {fetchUserWithCancel} from "@/utils/api.js";
import LoadingPanel from "@/components/Loading.jsx";
import UserPanel from "@/components/UserPanel.jsx";
import Spin from "@/components/Spin";

const OptimizedSearchCases = () => {
    const [userPromise, setUserPromise] = useState(() => fetchUserWithCancel())
    const deferredPromise = useDeferredValue(userPromise)
    const handleInputChange = (event) => {
        const value = event.target.value
        const len = value.length % 10
        userPromise.abort()
        setUserPromise(fetchUserWithCancel(len))
    }
    return (
        <div>
            <h2>Optimized Search cases by useDeferredValue hook</h2>
            <input type="text" onChange={handleInputChange}/>
            <div style={{ marginTop: "20px" }}>
                <Suspense fallback={<LoadingPanel />}>
                    <Spin loading={deferredPromise !== userPromise}>
                        <UserPanel userPromise={deferredPromise} />
                    </Spin>
                </Suspense>
            </div>
        </div>
    )
}

export default OptimizedSearchCases