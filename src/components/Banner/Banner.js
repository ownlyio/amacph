import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import './Banner.css'

import background from '../../img/bg.png'
import ayalaMallsLeg from '../../img/ayala-malls-legazpi.webp'
import ownlyLogo from '../../img/ownly.png'

function Banner() {
    const [emailAdd, setEmailAdd] = useState("")
    const [showSubscribed, setShowSubscribed] = useState(false);
    const handleCloseSubscribed = () => setShowSubscribed(false);
    const handleShowSubscribed = () => setShowSubscribed(true);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const handleCloseErrorEmail = () => setShowErrorEmail(false);
    const handleShowErrorEmail = () => setShowErrorEmail(true);

    const submitForm = (e) => {
        e.preventDefault()

        let re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    
        if (re.test(emailAdd)) {
            axios.post('https://ownly.market/api/email-signup', {email: emailAdd, type: 'amacph'}).then(res => {
                document.getElementById("emailAdd").value = ""
                setEmailAdd("")
                handleShowSubscribed()
            })
        } else {
            handleShowErrorEmail()
        }
    }

    return (
        <section id="app" className="background-image-cover h-screen" style={{"backgroundImage": `url(${background})`}}>
            <div className="container h-full">
                <div className="overlay"></div>
                <div className="d-flex justify-content-center align-items-center h-full">
                    <div className="app-wrap">
                        <h1 className="app-title text-center font-size-220 font-size-md-350 font-size-lg-430 font-size-xl-500 text-white arvo-bold">ALBAY MULTIMEDIA ARTS CONVENTION</h1>
                        <p className="app-sub text-center font-size-120 font-size-md-180 font-size-lg-230 font-size-xl-300 text-white arvo-italic mb-5">October 8-9, 2022 | Ayala Malls Legazpi</p>

                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <p className="text-white font-size-100 font-size-sm-140 text-center px-md-5 mb-4">Wanna be the first to get notified when we announce the details of the next AMAC? Join our VIP List to be first to know.</p>
                                <div className="px-lg-5 mx-lg-5">
                                    <form className="app-bbm-form" onSubmit={submitForm}>
                                        <div className="d-flex align-items-center flex-wrap mb-2">
                                            <div className="app-form app-input-wrapper d-flex flex-fill justify-content-center">
                                                <input id="emailAdd" type="email" name="email_address" className="form-control d-block px-3 py-1 font-size-90" style={{"borderRadius": "5px 0 0 5px"}} placeholder="Your email address" required onChange={(e) => setEmailAdd(e.target.value)} />
                                            </div>
                                            <div className="app-form app-btn-form-wrapper">
                                                <button type="submit" className="btn btn-custom-7 px-3 py-1 font-size-90" style={{"letterSpacing": "0.05em", "borderRadius": "0 5px 5px 0"}}>Join VIP List</button>
                                            </div>
                                        </div>
                                        
                                        <div className="form-check d-flex align-items-start mb-3">
                                            <div>
                                                <input className="form-check-input" type="checkbox" id="agreement" required />
                                            </div>
                                            <div className="ps-1">
                                                <label className="form-check-label font-size-80 text-white" for="agreement">
                                                By joining our Ownly VIP list, you agree to receive updates from Ownly for our upcoming IRL events. You can opt out of our marketing emails anytime. Your email will be stored on our database and will not be shared with any third-party.
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 mt-sm-3 mt-lg-5">
                            <p className="text-center font-size-110 font-size-md-140 font-size-lg-180 font-size-xl-200 text-white arvo-italic mb-2">Organized and Co-presented by:</p>
                            <div className="d-flex justify-content-center align-items-center w-1/2 mx-auto">
                                <div className="partner-img mx-auto">
                                    <img src={ownlyLogo} alt="Ownly" className="w-100" />
                                </div>
                                <div className="partner-img mx-auto">
                                    <img src={ayalaMallsLeg} alt="Ayala Malls Legazpi" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>

            <div className="app-socmed-icons py-4">
                <div className="d-flex justify-content-center align-items-center w-100">
                    <div className="mx-3">
                        <a href="https://web.facebook.com/amacphilippines" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon color="white" size="2x" icon={faFacebookF} />
                        </a>
                    </div>
                    <div className="mx-3">
                        <a href="https://www.instagram.com/amacphilippines" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon color="white" size="2x" icon={faInstagram} />
                        </a>
                    </div>
                    <div className="mx-3">
                        <a href="https://twitter.com/amac_ph" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon color="white" size="2x" icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal for successful subscription */}
            <Modal show={showSubscribed} onHide={handleCloseSubscribed} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="green" size="6x" icon={faCheckCircle} />
                    </div>
                    <p className="text-center text-lg">Thank you for subscribing!</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseSubscribed}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> 

            {/* Modal for error in email */}
            <Modal show={showErrorEmail} onHide={handleCloseErrorEmail} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="red" size="6x" icon={faExclamationCircle} />
                    </div>
                    <p className="text-center text-lg">Please provide a valid email address and try again.</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseErrorEmail}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> 
        </section>
    );
}

export default Banner
