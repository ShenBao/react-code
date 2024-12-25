import {use} from "react";

const UserPanel = props => {
    // eslint-disable-next-line react/prop-types
    const {userPromise} = props
    if (!userPromise) return null
    const {results} = use(userPromise)
    return (
        <div>
            {
                results.map(item => {
                    return (
                        <div key={item.email} style={{
                            display: "grid",
                            gridTemplateColumns: "60px auto",
                            gridTemplateRows: "repeat(2, 1fr)",
                            columnGap: "20px",
                            alignItems: "center",
                            paddingBottom: "10px"
                        }}>
                            <img style={{width: "60px", height: "60px", gridRow: "1/3"}} src={item.picture.large}
                                 alt=''/>
                            <span>{item.name.last}</span>
                            <span>{item.email}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserPanel