import {useImperativeHandle, useState} from 'react'
import clsx from "clsx";
import {createPortal} from "react-dom";

import "./index.css"

const Modal = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children, ref } = props
    // 控制动画的执行
    const [open, setOpen] = useState(false)
    // 控制节点的增加/删除
    const [elDisplay, setElDisplay] = useState(false)
    const cls = clsx("model-wrapper", {
        "in": open,
        "out": !open
    })
    useImperativeHandle(ref, () => ({
        show: () => {
            setOpen(true)
            setElDisplay(true)
        },
        hide: () => {
            setOpen(false)
        }
    }))
    if(!elDisplay) return null
    // 设置modal 透明度为0
    const handleModalClose = () => {
        setOpen(false)
    }
    const handleAnimationEnd = () => {
        // 如果弹窗是显示状态 就不删除元素
        if(open) return
        setElDisplay(false)
    }
    return (
        createPortal(
            <div
                onClick={handleModalClose}
                onAnimationEnd={handleAnimationEnd}
                className={cls}>
                {children}
            </div>,
            document.body
        )
    )
}
export default Modal