import {useRef} from 'react'
import Modal from "@/components/Modal";


const RefControlModal = () => {
    const modalRef = useRef()
    const handleModalOpen = () => {
        modalRef.current.show()
    }
    return (
        <div className=''>
            <h1>use ref to control modal</h1>
            <Modal ref={modalRef}>
                <div style={{ textAlign: "center", fontSize: "28px", color: "#FFFFFF" }}>
                    model children
                    <p>click me to close modal</p>
                </div>
            </Modal>
            <button onClick={handleModalOpen}>click me to show modal</button>
        </div>
    )
}

export default RefControlModal