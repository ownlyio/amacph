import './FAQ.css'
import { useState } from "react"
import shirt from "../../img/tshirt.png";
import rascal from "../../img/rascal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faGifts, faTicketAlt, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function FAQ({ showRegister }) {
    return (
        <div>
            <section id="faq">
                <div className="container">
                    <p className="text-center font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-white arvo-bold faq-title mb-4">FREQUENTLY ASKED QUESTIONS</p>

                    <div className="accordion accordion-flush" id="faq-accordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-header-1">
                                <button className="font-size-130 font-size-sm-160 accordion-button text-center justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-1">
                                    I'm not a designer or artist, can I still attend?
                                </button>
                            </h2>
                            <div id="flush-collapse-1" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                                <div className="accordion-body">
                                    <p className="font-size-100 font-size-lg-120 neo-regular">Yes! If you appreciate art, passionate about design and creative at heart, you are very welcome to attend the event. The event is open to everyone!</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-header-2">
                                <button className="font-size-130 font-size-sm-160 accordion-button text-center justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-2">
                                    Is my reservation for the event valid until the day of the event?
                                </button>
                            </h2>
                            <div id="flush-collapse-2" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                                <div className="accordion-body">
                                    <p className="font-size-100 font-size-lg-120">Reservation slots are in the form of tickets. We can only guarantee your slot if you secured your own ticket to the Art Talks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-header-3">
                                <button className="font-size-130 font-size-sm-160 accordion-button text-center justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-3">
                                    Are tickets transferable?
                                </button>
                            </h2>
                            <div id="flush-collapse-3" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                                <div className="accordion-body">
                                    <p className="font-size-100 font-size-lg-120">Yes. If you secured a ticket but couldn’t make it on the day of the event, you can transfer your virtual ticket to another attending participant by sending it to them via email. They may use your ticket on the event day.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-header-4">
                                <button className="font-size-130 font-size-sm-160 accordion-button text-center justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-4">
                                    Can I still purchase tickets on the event day?
                                </button>
                            </h2>
                            <div id="flush-collapse-4" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                                <div className="accordion-body">
                                    <p className="font-size-100 font-size-lg-120">Ownly will have a booth at the venue during the duration of the event where you can purchase remaining tickets. However, in the case where all seats have been occupied, we will no longer be accepting walk-ins. We highly suggest to reserve your slot by securing your tickets before the date of the event to avoid this scenario.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-header-5">
                                <button className="font-size-130 font-size-sm-160 accordion-button text-center justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-5">
                                    I lost my tickets.
                                </button>
                            </h2>
                            <div id="flush-collapse-5" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                                <div className="accordion-body">
                                    <p className="font-size-100 font-size-lg-120">Our tickets for this year’s AMAC are solely virtual, which means that it will be sent to the email address you provided upon signing up.</p>
                                    <p className="font-size-100 font-size-lg-120">Your virtual ticket has its corresponding ticket number. In the event that you lost your virtual ticket, you will still be able to join the Art Talks provided that you have your ticket number and your identification card with the information you used to sign up for your ticket on our website.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-header-6">
                                <button className="font-size-130 font-size-sm-160 accordion-button text-center justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-6">
                                    How do I claim my free mint slot for Mustachio Rascals?
                                </button>
                            </h2>
                            <div id="flush-collapse-6" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                                <div className="accordion-body">
                                    <p className="font-size-100 font-size-lg-120">An email will be sent for the step-by-step instructions on how to claim your Mustachio Rascal after the event.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-header-7">
                                <button className="font-size-130 font-size-sm-160 accordion-button text-center justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-7">
                                    Do I need to register to join AMAC 2022?
                                </button>
                            </h2>
                            <div id="flush-collapse-7" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                                <div className="accordion-body">
                                    <p className="font-size-100 font-size-lg-120">Our Art Talks are exclusive, which means that in order to join us and our invited speakers in the said sessions, you need to sign up on our website to secure your ticket.</p>
                                    <p className="font-size-100 font-size-lg-120">However, the rest of the activities of AMAC 2022 are FREE and OPEN TO PUBLIC to celebrate creativity. Join us on October 8-9, 2022 at Ayala Malls Legazpi for community-led activities such as Art Fairs, Art Exhibits, Photo Walks, Coloring for Kids, and Music Jams.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}