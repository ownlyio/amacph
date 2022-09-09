import { Modal } from 'react-bootstrap'
import './Modals.css'

import amac17Vid from '../../videos/amac-2017.mp4'

export default function AMAC17Vid({ vidModal, closeVid }) {
    return (
        <Modal show={vidModal} onHide={closeVid} backdrop="static" keyboard={false} size="lg" centered>
            <Modal.Body className="p-0 position-relative">
                <button className="video-close-btn text-white font-size-80 font-size-sm-100 btn" onClick={closeVid}>X</button>
                <div className="past-amac-video h-100">
                    <video id="amac17-vid" className="h-100" controls controlsList="nodownload">
                        <source src={amac17Vid} type="video/mp4" />
                    </video>
                </div>
            </Modal.Body>
        </Modal>
    )
}