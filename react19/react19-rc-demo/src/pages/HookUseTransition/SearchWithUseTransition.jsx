import {Suspense, useDeferredValue, useState, useTransition} from 'react'
import {fetchUserWithCancel} from "@/utils/api.js";
import LoadingPanel from "@/components/Loading.jsx";
import Spin from "@/components/Spin/index.jsx";
import UserPanel from "@/components/UserPanel.jsx";

const SearchWithUseTransition = () => {
    const [userPromise, setUserPromise] = useState(() => fetchUserWithCancel())
    const [isPending, setTransition] = useTransition()
    const deferredPromise = useDeferredValue(userPromise)
    const handleInputChange = (event) => {
        const value = event.target.value
        const len = value.length % 10
        userPromise.abort()
        setTransition(() => {
            setUserPromise(fetchUserWithCancel(len))
        })
    }
    return (
        <div>
            <h2>Optimized Search cases by useTransition hook</h2>
            <h3>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                setTransition can mark one or more state's `set` methods as `transition`，while means lowering their update priority
            </h3>
            <input type="text" onChange={handleInputChange}/>
            <div style={{ marginTop: "20px" }}>
                <Suspense fallback={<LoadingPanel />}>
                    <Spin loading={isPending}>
                        <UserPanel userPromise={deferredPromise} />
                    </Spin>
                </Suspense>
            </div>
        </div>
    )
}

export default SearchWithUseTransition