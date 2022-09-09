import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts, faUsers, faTicketAlt, faCertificate, faHeart } from '@fortawesome/free-solid-svg-icons';
import './ApplyTicket.css'

import ticket from '../../img/ticket.png'

export default function ApplyTicket({ state, showRegister }) {
    return (
        <section id="tickets">
            <div className="container">
                <p className="text-center font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-white arvo-bold ticket-title">BUY TICKETS</p>

                <div className="ticket-img mx-auto">
                    <img src={ticket} alt="AMAC ticket" className="w-100" />
                </div>

                <div className="ticket-wrap">
                    <p className="text-center font-size-200 font-size-sm-270 font-size-md-310 font-size-lg-400 text-white arvo-bold ticket-price mb-2">₱ 500</p>
                    <p className="text-center font-size-100 font-size-md-120 font-size-lg-140 text-white arvo-italic ticket-sub mb-5">With AMAC Shirt</p>

                    <p className="text-center font-size-sm-100 font-size-lg-120 text-white ticket-available mb-3">Available Tickets</p>
                    {/* Range */}
                    <div className="ticket-range-wrap">
                        <div className="ticket-range-outer">
                            <div className="ticket-range-inner" style={{ "width": `${state.percentageAvailable}%` }}></div>
                        </div>
                    </div>
                    <p className="text-center font-size-100 font-size-lg-120 text-white ticket-available-qty">{state.availableTickets}/{state.maxTickets}</p>
                </div>

                {/* INCLUSIONS */}
                <p className="text-center font-size-110 font-size-sm-130 font-size-md-180 font-size-lg-230 text-white arvo-bold ticket-sub mb-5">INCLUSIONS</p>

                <div className="row justify-content-evenly align-items-start flex-wrap mb-md-3 mb-lg-5">
                    <div className="ticket-inclusion-item p-3 mb-4">
                        <div className="text-center mb-4">
                            <FontAwesomeIcon className="inclusion-icon" icon={faTicketAlt} color="white" size="4x" />
                        </div>
                        <p className="text-center font-size-100 font-size-sm-110 font-size-lg-140 text-white inclusion-desc mb-2">Event Admission</p>
                        <p className="text-center font-size-80 font-size-sm-90 font-size-lg-110 text-white arvo-italic inclusion-desc-sub mb-0">4 speakers sharing their art journey filled-with inspiration and learnings</p>
                    </div>
                    <div className="ticket-inclusion-item p-3 mb-4">
                        <div className="text-center mb-4">
                            <FontAwesomeIcon className="inclusion-icon" icon={faGifts} color="white" size="4x" />
                        </div>
                        <p className="text-center font-size-100 font-size-sm-110 font-size-lg-140 text-white inclusion-desc mb-2">AMAC2022 freebies</p>
                        <p className="text-center font-size-80 font-size-sm-90 font-size-lg-110 text-white arvo-italic inclusion-desc-sub mb-0">Event shirt designed by Lei Melendres and more!</p>
                    </div>
                    <div className="ticket-inclusion-item p-3 mb-4">
                        <div className="text-center mb-4">
                            <FontAwesomeIcon className="inclusion-icon" icon={faUsers} color="white" size="4x" />
                        </div>
                        <p className="text-center font-size-100 font-size-sm-110 font-size-lg-140 text-white inclusion-desc mb-2">Networking</p>
                        <p className="text-center font-size-80 font-size-sm-90 font-size-lg-110 text-white arvo-italic inclusion-desc-sub mb-0">Connect and meet fellow creative minds in the event</p>
                    </div>
                    <div className="ticket-inclusion-item p-3 mb-4">
                        <div className="text-center mb-4">
                            <FontAwesomeIcon className="inclusion-icon" icon={faCertificate} color="white" size="4x" />
                        </div>
                        <p className="text-center font-size-100 font-size-sm-110 font-size-lg-140 text-white inclusion-desc mb-2">NFT Certificate</p>
                        <p className="text-center font-size-80 font-size-sm-90 font-size-lg-110 text-white arvo-italic inclusion-desc-sub mb-0">Irrefutable POAP</p>
                    </div>
                    <div className="ticket-inclusion-item p-3 mb-4">
                        <div className="text-center mb-4">
                            <FontAwesomeIcon className="inclusion-icon" icon={faHeart} color="white" size="4x" />
                        </div>
                        <p className="text-center font-size-100 font-size-sm-110 font-size-lg-140 text-white inclusion-desc mb-2">Free Mint Rascals</p>
                        <p className="text-center font-size-80 font-size-sm-90 font-size-lg-110 text-white arvo-italic inclusion-desc-sub mb-0">Get to mint Ownly's Mustachio Rascals for FREE!</p>
                    </div>
                </div>


                {/* BUY NOW */}
                <div className="text-center">
                    <button onClick={showRegister} className="def btn btn-custom-4 px-5 ticket-btn" disabled={state.isSoldOut}>{state.isSoldOut ? "SOLD OUT" : "BUY NOW!"}</button>
                </div>
            </div>
        </section>
    )
}