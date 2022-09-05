import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import './ApplyTicket.css'

import ticket from '../../img/ticket.png'

export default function ApplyTicket() {
    return (
        <section id="amac-apply-ticket">
            <div className="container">
                <p className="text-center font-size-lg-280 text-white arvo-bold ticket-title">BUY TICKETS</p>

                <div className="row align-items-center">
                    <div className="col-12 col-md-4">
                        <div className="ticket-img mx-auto">
                            <img src={ticket} alt="AMAC ticket" className="w-100" />
                        </div>

                        <p className="text-center text-md-start font-size-lg-140 text-white ticket-sub mb-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>

                        <button className="def btn btn-custom-4 px-5 about-btn">BUY NOW!</button>
                    </div>
                    <div className="col-12 col-md-8">
                        <p className="text-center font-size-lg-230 text-white arvo-bold ticket-sub mb-5">INCLUSIONS</p>

                        <div className="row justify-content-evenly align-items-start">
                            <div className="col-12 col-md-6">
                                <div className="ticket-inclusion-item p-3">
                                    <div className="text-center mb-4">
                                        <FontAwesomeIcon className="inclusion-icon" icon={faHeart} color="white" size="4x" />
                                    </div>
                                    <p className="text-center font-size-lg-140 text-white inclusion-desc mb-4">Event Freebies (Stickers and Marketing Materials from Ownly)</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="ticket-inclusion-item p-3">
                                    <div className="text-center mb-4">
                                        <FontAwesomeIcon className="inclusion-icon" icon={faMicrophone} color="white" size="4x" />
                                    </div>
                                    <p className="text-center font-size-lg-140 text-white inclusion-desc mb-4">Access to all talks on Oct 9 - Ayala Malls Cinema</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}