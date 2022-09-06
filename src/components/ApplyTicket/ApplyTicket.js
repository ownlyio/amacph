import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts, faUsers, faTicketAlt, faCertificate, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react'
import './ApplyTicket.css'

import ticket from '../../img/ticket.png'

export default function ApplyTicket() {
    const [state, setState] = useState({
        maxTickets: 200,
        availableTickets: 180,
        isSoldOut: false
    })

    const [showRegister, setShowRegister] = useState(true)
    const handleCloseRegister = () => setShowRegister(false)
    const handleShowRegister = () => setShowRegister(true)

    // state updater
    const _setState = (name, value) => {
        setState(prevState => ({...prevState, [name]: value}))
    }

    const computeAvailableTicketsPercent = () => {
        return (state.availableTickets / state.maxTickets) * 100
    }

    const submitForm = async (e) => {
        e.preventDefault()
    }

    return (
        <section id="tickets">
            <div className="container">
                <p className="text-center font-size-lg-280 text-white arvo-bold ticket-title">BUY TICKETS</p>

                <div className="ticket-img mx-auto">
                    <img src={ticket} alt="AMAC ticket" className="w-100" />
                </div>

                <div className="ticket-wrap">
                    <p className="text-center font-size-lg-400 text-white arvo-bold ticket-price mb-2">₱ 500</p>
                    <p className="text-center font-size-lg-140 text-white arvo-italic ticket-sub mb-5">With AMAC Shirt</p>

                    <p className="text-center font-size-lg-120 text-white ticket-available mb-3">Available Tickets</p>
                    {/* Range */}
                    <div className="ticket-range-wrap">
                        <div className="ticket-range-outer">
                            <div className="ticket-range-inner" style={{"width": `${computeAvailableTicketsPercent()}%`}}></div>
                        </div>
                    </div>
                    <p className="text-center font-size-lg-120 text-white ticket-available-qty">{state.availableTickets}/{state.maxTickets}</p>
                </div>

                {/* INCLUSIONS */}
                <p className="text-center font-size-lg-230 text-white arvo-bold ticket-sub mb-5">INCLUSIONS</p>

                <div className="row justify-content-evenly align-items-start flex-wrap mb-5">
                    <div className="ticket-inclusion-item p-3 mb-4">
                        <div className="text-center mb-4">
                            <FontAwesomeIcon className="inclusion-icon" icon={faTicketAlt} color="white" size="4x" />
                        </div>
                        <p className="text-center font-size-lg-140 text-white inclusion-desc mb-2">Event Admission</p>
                        <p className="text-center font-size-lg-110 text-white arvo-italic inclusion-desc-sub mb-0">4 speakers sharing their art journey filled-with inspiration and learnings</p>
                    </div>
                    <div className="ticket-inclusion-item p-3 mb-4">
                        <div className="text-center mb-4">
                            <FontAwesomeIcon className="inclusion-icon" icon={faGifts} color="white" size="4x" />
                        </div>  
                        <p className="text-center font-size-lg-140 text-white inclusion-desc mb-2">AMAC2022 freebies</p>
                        <p className="text-center font-size-lg-110 text-white arvo-italic inclusion-desc-sub mb-0">Event shirt designed by Lei Melendres and more!</p>
                    </div>
                    <div className="ticket-inclusion-item p-3 mb-4">
                        <div className="text-center mb-4">
                            <FontAwesomeIcon className="inclusion-icon" icon={faUsers} color="white" size="4x" />
                        </div>  
                        <p className="text-center font-size-lg-140 text-white inclusion-desc mb-2">Networking</p>
                        <p className="text-center font-size-lg-110 text-white arvo-italic inclusion-desc-sub mb-0">Connect and meet fellow creative minds in the event</p>
                    </div>
                    <div className="ticket-inclusion-item p-3 mb-4">
                        <div className="text-center mb-4">
                            <FontAwesomeIcon className="inclusion-icon" icon={faCertificate} color="white" size="4x" />
                        </div>  
                        <p className="text-center font-size-lg-140 text-white inclusion-desc mb-2">NFT Certificate</p>
                        <p className="text-center font-size-lg-110 text-white arvo-italic inclusion-desc-sub mb-0">Irrefutable POAP</p>
                    </div>
                    <div className="ticket-inclusion-item p-3 mb-4">
                        <div className="text-center mb-4">
                            <FontAwesomeIcon className="inclusion-icon" icon={faHeart} color="white" size="4x" />
                        </div>  
                        <p className="text-center font-size-lg-140 text-white inclusion-desc mb-2">Free Mint Rascals</p>
                        <p className="text-center font-size-lg-110 text-white arvo-italic inclusion-desc-sub mb-0">Get to mint Ownly's Mustachio Rascals for FREE!</p>
                    </div>
                </div>


                {/* BUY NOW */}
                <div className="text-center">
                    <button onClick={handleShowRegister} className="def btn btn-custom-4 px-5 ticket-btn" disabled={state.isSoldOut}>{state.isSoldOut ? "SOLD OUT" : "BUY NOW!"}</button>
                </div>
            </div>

            {/* Register */}
            <Modal show={showRegister} onHide={handleCloseRegister} backdrop="static" keyboard={false} size="xl" centered>
                <Modal.Body className="p-0">
                    <div className="modal-wrapper">
                        <div className="row align-items-start p-4">
                            <div className="col-12 col-md-6">
                                <p className="text-center font-size-lg-200 text-color-3 arvo-bold ticket-title mb-4">REGISTRATION</p>
                                <div className="register-wrap">
                                    <form onSubmit={submitForm} encType="multipart/form-data">
                                        <input id="fname" type="text" name="fname" className="form-control px-3 py-2 font-size-90 mb-3" placeholder="First Name" required />
                                        <input id="lname" type="text" name="lname" className="form-control px-3 py-2 font-size-90 mb-3" placeholder="Last Name" required />
                                        <input id="contact_no" type="text" name="contact_no" className="form-control px-3 py-2 font-size-90 mb-3" placeholder="Mobile Number" required />
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
                                        <label for="payment" className="form-label font-size-90">Upload screenshot of Proof of Payment</label>
                                        <input className="form-control font-size-90 mb-3" type="file" id="payment" required />
                                        <div className="form-check d-flex align-items-start mb-4">
                                            <div>
                                                <input className="form-check-input" type="checkbox" id="agreement" required />
                                            </div>
                                            <div className="ps-1">
                                                <label className="form-check-label font-size-80 text-color-6" for="agreement">
                                                By checking this box, you are agreeing to our <a href="#" className="link-color-3 arvo-bold">terms and conditions</a> and you understand that the tickets are non-refundable (you can check our FAQ section <a href="/#faq" className="link-color-3 arvo-bold">here</a>).
                                                </label>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button onClick={handleCloseRegister} className="btn px-5 ticket-cancel-btn mx-3">CANCEL</button>
                                            <input type="submit" className="def btn btn-custom-4 px-5 ticket-proceed-btn mx-3" value="REGISTER" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="text-center font-size-lg-200 text-color-3 arvo-bold ticket-title mb-4">PAYMENT</p>
                                <div className="register-instructions mb-4">
                                    <p className="font-size-lg-120 text-color-6 ticket-instructions-text mb-3"><b>Ticket Price:</b> ₱ 500 inclusive of AMAC Shirt  </p>
                                    <p className="font-size-lg-120 text-color-6 ticket-instructions-text mb-3 arvo-bold">Payment Options:</p>

                                    <p className="font-size-lg-120 text-color-6 ticket-instructions-text mb-1 arvo-italic">GCash</p>
                                    <p className="font-size-lg-120 text-color-6 ticket-instructions-text mb-1">Ismael Jerusalem</p>
                                    <p className="font-size-lg-120 text-color-6 ticket-instructions-text mb-3">09561525513</p>

                                    <p className="font-size-lg-120 text-color-6 ticket-instructions-text mb-1 arvo-italic">Bank Transfer</p>
                                    <p className="font-size-lg-120 text-color-6 ticket-instructions-text mb-1">Bank: UnionBank</p>
                                    <p className="font-size-lg-120 text-color-6 ticket-instructions-text mb-1">Account Name: Ismael Jerusalem</p>
                                    <p className="font-size-lg-120 text-color-6 ticket-instructions-text mb-1">Account No.: 1094-2579-7520</p>
                                </div>
                                <p className="font-size-lg-120 text-color-6 ticket-instructions-text mb-3">Kindly attach the Proof of Payment file on the registration form.</p>
                                <p className="font-size-lg-120 text-color-6 ticket-instructions-text mb-1">Once verified, email confirmation will be sent together with the ticket number to be presented on the event registration.</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal> 
        </section>
    )
}