import {use, useRef} from "react";
import {AppContext, AppProvider} from "./context";
import Modal from "@/components/Modal";

const ModalBlock = () => {
    const modelRef = useRef(null)
    const { appValue } = use(AppContext)
    const handleShowModal = () => {
        modelRef.current.show()
    }
    const handleCloseModal = () => {
        modelRef.current.hide()
    }
    const handleModalBodyClick = event => event.stopPropagation()
    return (
        <>
            <button onClick={handleShowModal}>click me to open modal</button>
            <Modal ref={modelRef}>
                <div onClick={handleModalBodyClick} style={{ width: "50%", padding: "20px", background: "#FFFFFF ", margin: "50px auto"}}>
                    <div>
                        {appValue.status}
                    </div>
                    <div>
                        {appValue.status}：<input type="text" defaultValue={appValue.content}/>
                    </div>
                    <button onClick={handleCloseModal}>close modal</button>
                </div>
            </Modal>
        </>
    )
}

const ContextBase = () => {
    const { appValue } = use(AppContext)
    return (
        <div>
            <h1>Context basic usage </h1>
            <div>{appValue.task}</div>
            <ModalBlock />
        </div>
    )
}

const ContextBaseContainer = () => {
    return (
        <AppProvider>
            <ContextBase />
        </AppProvider>
    )
}

export default ContextBaseContainer