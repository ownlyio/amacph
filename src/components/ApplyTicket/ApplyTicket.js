import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts, faUsers, faTicketAlt, faCertificate, faPalette, faPen, faSpinner } from '@fortawesome/free-solid-svg-icons';
import './ApplyTicket.css'

import shirt from '../../img/tshirt.png'
import rascal from '../../img/rascal2.png'

export default function ApplyTicket({ isLoading, isSoldOut, showRegister }) {
    return (
        <section id="tickets">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 mb-5 mb-md-0">
                        <p className="text-center w-100 font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-white arvo-bold ticket-title mb-1">ATTEND EXCLUSIVE ART TALKS</p>
                        <p className="text-center w-100 font-size-90 font-size-md-100 font-size-lg-140 text-white arvo-bold ticket-title mb-5">TICKET INCLUSIONS:</p>
                    </div>

                    <div className="col-12 col-md-6 pe-md-4">
                        <div className="row justify-content-center align-items-center mb-4 mb-lg-0">
                            <div className="col-12 col-md-5">
                                <div className="ticket-img-wrap">
                                    <div className="ticket-img mx-auto">
                                        <img src={shirt} alt="AMAC Shirt" className="w-100" />
                                    </div>
                                    <p className="text-center font-size-100 font-size-md-110 font-size-lg-130 text-white arvo-italic ticket-det mb-3">AMAC2022 X Lei Melendres Shirt</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-2">
                                <p className="text-center font-size-300 font-size-md-200 font-size-lg-400 text-white arvo-bold ticket-det-plus mb-3">+</p>
                            </div>
                            <div className="col-12 col-md-5">
                                <div className="ticket-img-wrap">
                                    <div className="ticket-img mx-auto">
                                        <img src={rascal} alt="Mustachio Rascals" className="w-100" />
                                    </div>
                                    <p className="text-center font-size-100 font-size-md-110 font-size-lg-130 text-white arvo-italic ticket-det mb-3">3D <a href="https://mustachioverse.com/rascals" target="_blank" rel="noreferrer" className="link-color-1">Mustachio Rascals NFT</a> (Non-Fungible Token)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 ps-md-4">
                        <div className="row justify-content-evenly align-items-start flex-wrap mb-md-3 mb-lg-0 font-size-80">
                            <div className="ticket-inclusion-item p-3 mb-2">
                                <div className="text-center mb-3">
                                    <FontAwesomeIcon className="inclusion-icon" icon={faTicketAlt} color="white" size="4x" />
                                </div>
                                <p className="text-center font-size-100 font-size-sm-110 font-size-lg-140 text-white inclusion-desc mb-2">Event Admission</p>
                                <p className="text-center font-size-80 font-size-sm-90 font-size-lg-110 text-white neo-regular-italic inclusion-desc-sub mb-0">4 speakers sharing their art journeys filled with inspiration and realizations</p>
                            </div>
                            <div className="ticket-inclusion-item p-3 mb-2">
                                <div className="text-center mb-3">
                                    <FontAwesomeIcon className="inclusion-icon" icon={faGifts} color="white" size="4x" />
                                </div>
                                <p className="text-center font-size-100 font-size-sm-110 font-size-lg-140 text-white inclusion-desc mb-2">AMAC2022 freebies</p>
                                <p className="text-center font-size-80 font-size-sm-90 font-size-lg-110 text-white neo-regular-italic inclusion-desc-sub mb-0">Event shirt designed by Lei Melendres and more!</p>
                            </div>
                            <div className="ticket-inclusion-item p-3">
                                <div className="text-center mb-3">
                                    <FontAwesomeIcon className="inclusion-icon" icon={faUsers} color="white" size="4x" />
                                </div>
                                <p className="text-center font-size-100 font-size-sm-110 font-size-lg-140 text-white inclusion-desc mb-2">Networking</p>
                                <p className="text-center font-size-80 font-size-sm-90 font-size-lg-110 text-white arvo-italic inclusion-desc-sub mb-0">Connect and meet fellow creative minds in the event</p>
                            </div>
                            <div className="ticket-inclusion-item p-3">
                                <div className="text-center mb-3">
                                    <FontAwesomeIcon className="inclusion-icon" icon={faCertificate} color="white" size="4x" />
                                </div>
                                <p className="text-center font-size-100 font-size-sm-110 font-size-lg-140 text-white inclusion-desc mb-2">NFT Certificate</p>
                                <p className="text-center font-size-80 font-size-sm-90 font-size-lg-110 text-white arvo-italic inclusion-desc-sub mb-0">Irrefutable POAP</p>
                            </div>
                            <div className="ticket-inclusion-item p-3">
                                <div className="text-center mb-3">
                                    <FontAwesomeIcon className="inclusion-icon" icon={faPalette} color="white" size="4x" />
                                </div>
                                <p className="text-center font-size-100 font-size-sm-110 font-size-lg-140 text-white inclusion-desc mb-2">Larry Alcala NFT Whitelist Spot</p>
                                <p className="text-center font-size-80 font-size-sm-90 font-size-lg-110 text-white arvo-italic inclusion-desc-sub mb-0">Get an NFT whitelist for NFT collection of comic illustrator and national artist, Larry Alcala!</p>
                            </div>
                            <div className="ticket-inclusion-item p-3">
                                <div className="text-center mb-3">
                                    <FontAwesomeIcon className="inclusion-icon" icon={faPen} color="white" size="4x" />
                                </div>
                                <p className="text-center font-size-100 font-size-sm-110 font-size-lg-140 text-white inclusion-desc mb-2">Sandbox Alpha Season 3 Sign Up</p>
                                <p className="text-center font-size-80 font-size-sm-90 font-size-lg-110 text-white arvo-italic inclusion-desc-sub mb-0">Get an exclusive Sign Up for Sandbox Alpha Season 3, the largest showcase of playable experiences from The Sandbox, with almost 100 experiences and new reward mechanics for players!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-10 col-lg-8 col-xl-6 mt-5">
                        <div className="ticket-wrap">
                            <p className="text-center font-size-270 font-size-md-310 font-size-lg-400 text-white arvo-bold ticket-price mb-2">₱599</p>
                            <p className="text-center font-size-150 font-size-sm-170 font-size-md-210 font-size-lg-300 text-color-4 arvo-bold ticket-price mb-2">ART TALK PASS</p>
                            <p className="text-center font-size-100 font-size-md-110 font-size-lg-120 text-white ticket-det line-height-150 mb-5">Each ticket includes an AMAC2022 X Lei Melendres shirt, a FREE Mint Slot for Mustachio Rascals NFT, and an EXCLUSIVE pass to our Art Talks Session.</p>

                            <div className="text-center pt-3">
                                { isLoading ? (
                                    <button className="def btn btn-custom-4 px-5 ticket-btn" disabled>
                                        <FontAwesomeIcon icon={faSpinner} spin />
                                    </button>
                                ) : (
                                    <button className="def btn btn-custom-4 px-5 ticket-btn" disabled={true}>REGISTRATION CLOSED</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    )
}