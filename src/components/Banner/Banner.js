import { useState, useEffect } from 'react'
import axios from 'axios'
import './Banner.css'

import background from '../../img/bg.png'

function Banner() {
    // const [emailAdd, setEmailAdd] = useState("")
    // const [showSubscribed, setShowSubscribed] = useState(false);
    // const handleCloseSubscribed = () => setShowSubscribed(false);
    // const handleShowSubscribed = () => setShowSubscribed(true);
    // const [showErrorEmail, setShowErrorEmail] = useState(false);
    // const handleCloseErrorEmail = () => setShowErrorEmail(false);
    // const handleShowErrorEmail = () => setShowErrorEmail(true);

    // const submitForm = (e) => {
    //     e.preventDefault()

    //     let re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    
    //     if (re.test(emailAdd)) {
    //         axios.post('https://ownly.tk/api/store-mustachio-subscriber', {email_address: emailAdd}).then(res => {
    //             document.getElementById("emailAdd").value = ""
    //             setEmailAdd("")
    //             handleShowSubscribed()
    //         })
    //     } else {
    //         handleShowErrorEmail()
    //     }
    // }

    return (
        <section id="app" className="background-image-cover h-screen" style={{"backgroundImage": `url(${background})`}}>
            <div className="container h-full">
                <div className="overlay"></div>
                <div className="d-flex justify-content-center align-items-center h-full">
                    <div className="app-wrap">
                        <h1 className="app-title text-center font-size-280 font-size-md-350 font-size-lg-430 font-size-xl-500 text-white arvo-bold">ALBAY MULTIMEDIA ARTS CONVENTION</h1>
                        <p className="app-sub text-center font-size-150 font-size-md-180 font-size-lg-230 font-size-xl-300 text-white arvo-italic mb-5">October 8-9, 2022 | Ayala Malls Legazpi</p>

                        {/* <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <p className="text-white font-size-120 font-size-sm-130 text-center px-md-5 mb-4">Wanna be the first to get notified when we announce the details of the first-ever Bicol Blockchain Conference? Join our VIP List to be first to know.</p>
                                <div className="px-lg-5 mx-lg-5">
                                    <form className="app-bbm-form" onSubmit={submitForm}>
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="app-form app-input-wrapper d-flex flex-fill justify-content-center">
                                                <input type="email" name="email_address" className="form-control d-block px-3 py-1 font-size-90" style={{"borderRadius": "5px 0 0 5px"}} placeholder="Your email address" required onChange={(e) => setEmailAdd(e.target.value)} />
                                            </div>
                                            <div className="app-form app-btn-form-wrapper">
                                                <button type="submit" className="btn btn-custom-7 px-3 py-1 font-size-90" style={{"letterSpacing": "0.05em", "borderRadius": "0 5px 5px 0"}}>Join VIP List</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner
