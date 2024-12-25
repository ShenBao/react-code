import {Suspense, use, useState} from "react";
import {fetchUserWithCancel} from "@/utils/api.js";
import UserPanel from "@/components/UserPanel";

// eslint-disable-next-line react/prop-types
const AccountUse = ({ accountPromise }) => {
    const {results} = use(accountPromise)
    console.log("===========AccountUse============")
    const [userPromise] = useState(() => fetchUserWithCancel(6))
    return (
        <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 220px)", columnGap: "20px" }}>
                {
                    results.map(item => {
                        return (
                            <div key={item.email} style={{ display: "grid", gridTemplateRows: "repeat(2, auto)", justifyItems: "center", rowGap: "10px"}}>
                                <img style={{width: "220px", height: "120px" }} src={item.picture.large}
                                     alt=''/>
                                <span>{item.name.last}</span>
                            </div>
                        )
                    })
                }
            </div>
            <Suspense fallback={<div style={{ fontWeight: "bold" }}>UserPanel loading......</div>}>
                <UserPanel userPromise={userPromise} />
            </Suspense>
        </div>
    )
}

const NestedSuspense = () => {
    const [accountPromise] = useState(() => fetchUserWithCancel(3))
    return (
        <div>
            <h1>Nested Suspense</h1>
            <h2>类似于瀑布流式加载，先加载AccountUse，然后再加载UserPanel</h2>
            <Suspense fallback={<div style={{ fontWeight: "bold" }}>AccountUse loading......</div>}>
                <AccountUse accountPromise={accountPromise} />
            </Suspense>
        </div>
    )
}

export default NestedSuspense