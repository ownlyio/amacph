import { Modal } from 'react-bootstrap'
import $ from 'jquery'
import './Modals.css'

import amac17Vid from '../../videos/amac-2017.mp4'

export default function AMAC17Vid({ vidModal, closeVid }) {
    return (
        <Modal show={vidModal} onHide={closeVid} backdrop="static" keyboard={false} size="lg" centered>
            <Modal.Body className="p-0">
                <div className="past-amac-video">
                    <video id="amac17-vid" controls controlsList="nodownload">
                        <source src={amac17Vid} type="video/mp4" />
                    </video>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={closeVid} className="btn px-5 ticket-cancel-btn">CLOSE</button>
            </Modal.Footer>
        </Modal>
    )
}