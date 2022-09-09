import { Modal } from 'react-bootstrap'
import './Modals.css'

export default function ViewPhoto({ picModal, closePic, picture, altText }) {
    return (
        <Modal show={picModal} onHide={closePic} backdrop="static" keyboard={false} size="lg" centered>
            <Modal.Body className="p-0 position-relative">
                {/* <button className="video-close-btn text-white font-size-80 font-size-sm-100 btn" onClick={closePic}>X</button> */}
                
                <img src={picture} alt={altText} className="w-100" />
            </Modal.Body>
            <Modal.Footer>
                <button onClick={closePic} className="btn px-5 ticket-cancel-btn">CLOSE</button>
            </Modal.Footer> 
        </Modal>
    )
}