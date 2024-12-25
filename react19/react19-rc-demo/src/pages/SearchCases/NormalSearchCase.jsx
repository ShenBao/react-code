import {Suspense, useState} from 'react'
import {fetchUserWithCancel} from "@/utils/api.js";
import LoadingPanel from "@/components/Loading.jsx";
import UserPanel from "@/components/UserPanel.jsx";

const NormalSearchCase = () => {
    const [userPromise, setUserPromise] = useState(() => fetchUserWithCancel())
    const handleInputChange = (event) => {
        const value = event.target.value
        const len = value.length % 10
        userPromise.abort()
        setUserPromise(fetchUserWithCancel(len))
    }
    return (
        <div>
            <h2>Normal Search cases</h2>
            <input type="text" onChange={handleInputChange}/>
            <div style={{ marginTop: "20px" }}>
                <Suspense fallback={<LoadingPanel />}>
                    <UserPanel userPromise={userPromise} />
                </Suspense>
            </div>
        </div>
    )
}

export default NormalSearchCase