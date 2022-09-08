import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'react-bootstrap'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Modals.css'

export default function RegisterModal({ registerModal, closeRegister, isSubmitting, submitForm}) {
    return (
        <Modal show={registerModal} onHide={closeRegister} backdrop="static" keyboard={false} size="xl" centered>
            <Modal.Body className="p-0">
                <div className="modal-wrapper">
                    <div className="row align-items-start p-4">
                        <div className="col-12 col-lg-6 mt-5 mt-lg-0 order-2 order-lg-1">
                            <p className="text-center font-size-130 font-size-md-160 font-size-lg-200 text-color-3 arvo-bold ticket-title mb-4">REGISTRATION</p>
                            <div className="register-wrap">
                                <form onSubmit={submitForm} encType="multipart/form-data" id="ticket-form">
                                    <input id="fname" type="text" name="fname" className="form-control px-3 py-2 font-size-90 mb-3" placeholder="First Name" required />
                                    <input id="lname" type="text" name="lname" className="form-control px-3 py-2 font-size-90 mb-3" placeholder="Last Name" required />
                                    <input id="contact_no" type="text" name="contact_no" className="form-control px-3 py-2 font-size-90 mb-3" placeholder="Mobile Number" maxLength="11" required />
                                    <input id="email" type="email" name="email" className="form-control px-3 py-2 font-size-90 mb-3" placeholder="Email Address" required />
                                    <textarea id="address" className="form-control px-3 py-2 font-size-90 mb-3 resize-none" placeholder="Address" required cols={3}></textarea>
                                    <textarea id="organization" className="form-control px-3 py-2 font-size-90 mb-3 resize-none" placeholder="Company/School/Organization" required cols={3}></textarea>
                                    <select id="shirt" className="form-select px-3 py-2 font-size-90 mb-3" required>
                                        <option value="" selected disabled>Select Shirt Size</option>
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </select>
                                    <label htmlFor="payment" className="form-label font-size-90">Upload screenshot of Proof of Payment</label>
                                    <input className="form-control font-size-90 mb-3" type="file" id="payment" required />
                                    <div className="form-check d-flex align-items-start mb-4">
                                        <div>
                                            <input className="form-check-input" type="checkbox" id="agreement" required />
                                        </div>
                                        <div className="ps-1">
                                            <label className="form-check-label font-size-80 text-color-6" htmlFor="agreement">
                                                By checking this box, you are agreeing to our terms and conditions and you understand that the tickets are non-refundable (you can check our FAQ section for more details).
                                            </label>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center ticket-reg-btns">
                                        <button onClick={closeRegister} className="btn px-5 ticket-cancel-btn mx-3 order-2 order-lg-1" disabled={isSubmitting}>CANCEL</button>
                                        { isSubmitting ? (
                                            <button type="button" className="def btn btn-custom-4 px-5 ticket-proceed-btn mx-3 order-1 order-lg-2" disabled={true}>
                                                <FontAwesomeIcon icon={faSpinner} className="text-white" spin />
                                            </button>
                                        ) : (
                                            <button type="submit" className="def btn btn-custom-4 px-5 ticket-proceed-btn mx-3 order-1 order-lg-2">REGISTER</button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 order-1 order-lg-2">
                            <p className="text-center font-size-130 font-size-md-160 font-size-lg-200 text-color-3 arvo-bold ticket-title mb-4">PAYMENT</p>
                            <div className="register-instructions mb-4">
                                <p className="font-size-90 font-size-sm-100 font-size-lg-120 text-color-6 ticket-instructions-text mb-3"><b>Ticket Price:</b> ₱ 500 inclusive of AMAC Shirt  </p>
                                <p className="font-size-90 font-size-sm-100 font-size-lg-120 text-color-6 ticket-instructions-text mb-3 arvo-bold">Payment Options:</p>

                                <p className="font-size-90 font-size-sm-100 font-size-lg-120 text-color-6 ticket-instructions-text mb-1 arvo-italic">GCash</p>
                                <p className="font-size-90 font-size-sm-100 font-size-lg-120 text-color-6 ticket-instructions-text mb-1">Ismael Jerusalem</p>
                                <p className="font-size-90 font-size-sm-100 font-size-lg-120 text-color-6 ticket-instructions-text mb-3">09561525513</p>

                                <p className="font-size-90 font-size-sm-100 font-size-lg-120 text-color-6 ticket-instructions-text mb-1 arvo-italic">Bank Transfer</p>
                                <p className="font-size-90 font-size-sm-100 font-size-lg-120 text-color-6 ticket-instructions-text mb-1">Bank: UnionBank</p>
                                <p className="font-size-90 font-size-sm-100 font-size-lg-120 text-color-6 ticket-instructions-text mb-1">Account Name: Ismael Jerusalem</p>
                                <p className="font-size-90 font-size-sm-100 font-size-lg-120 text-color-6 ticket-instructions-text mb-1">Account No.: 1094-2579-7520</p>
                            </div>
                            <p className="font-size-90 font-size-sm-100 font-size-lg-120 text-color-6 ticket-instructions-text mb-3">Kindly attach the Proof of Payment file on the registration form.</p>
                            <p className="font-size-90 font-size-sm-100 font-size-lg-120 text-color-6 ticket-instructions-text mb-1">Once verified, email confirmation will be sent together with the ticket number to be presented on the event registration.</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}