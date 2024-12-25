import {useEffect, useState} from 'react'
import clsx from "clsx";

import "./index.css"

// eslint-disable-next-line react/prop-types
const SpinContainer = ({ loading = false, children }) => {
    const [open, setOpen] = useState(loading)
    const [elDisplay, setElDisplay] = useState(false)
    useEffect(() => {
        if(loading) {
            setOpen(true)
            setElDisplay(true)
            return
        }
        setOpen(false)
    }, [loading]);
    const spinBoxClsx = clsx("spin-box", {
        in: open,
        out: !open
    })
    const handleAnimationEnd = () => {
        if(open) return
        setElDisplay(false)
    }
    return (
        <div className='spin-container'>
            {children}
            {
                elDisplay ? (
                    <div onAnimationEnd={handleAnimationEnd} className={spinBoxClsx} />
                ) : null
            }
        </div>
    )
}

export default SpinContainer