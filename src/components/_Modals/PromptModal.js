import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'react-bootstrap'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import './Modals.css'

export default function PromptModal({ resultModal, closeResult, result, resultMsg }) {
    return (
        <Modal show={resultModal} onHide={closeResult} backdrop="static" keyboard={false} size="md" centered>
            <Modal.Body className="p-3">
                <div className="text-center mb-3">
                    { result ? (
                        <FontAwesomeIcon color="green" size="3x" icon={faCheckCircle} />
                    ) : (
                        <FontAwesomeIcon color="red" size="3x" icon={faExclamationCircle} />
                    )}
                </div>
                <p className="text-center font-size-100 font-size-lg-120 text-color-6 ticket-result mb-0">{resultMsg}</p>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={closeResult} className="btn px-5 ticket-cancel-btn">CLOSE</button>
            </Modal.Footer>
        </Modal>
    )
}