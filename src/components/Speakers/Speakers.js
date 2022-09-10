import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTwitter, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';
import speakers from '../../utils/SpeakersList'
import SpeakerProfile from '../../components/_Modals/SpeakerProfile'
import './Speakers.css'

import speakerBg from '../../img/speaker_bg.png'
import lei from '../../img/speakers/lei_melendres.png'
import jopet from '../../img/speakers/jopet_arias.jpg'
import karl from '../../img/speakers/karl_vasquez.jpg'
import john from '../../img/speakers/john_verlin_santos.jpg'

// works cover
import artLei from '../../img/speakers/works/Lei/5.png'
import artJopet from '../../img/speakers/works/Jopet/5.jpg'
import artKarl from '../../img/speakers/works/Karl/4.jpg'
import artJohn from '../../img/speakers/works/John/1.jpg'

export default function Speakers() {
    const [speakerDetails, setSpeakerDetails] = useState(speakers[0])
    const [showSpeakerProfile, setShowSpeakerProfile] = useState(false)
    const handleCloseSpeakerProfile = () => setShowSpeakerProfile(false)
    const handleShowSpeakerProfile = (data) => {
        setSpeakerDetails(data)
        setShowSpeakerProfile(true)
    }

    return (
        <section id="speakers" className="background-image-cover" style={{ "backgroundImage": `url(${speakerBg})` }}>
            <div className="container">
                <p className="text-center font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-color-4 arvo-bold speaker-title mb-4 mb-lg-5">SPEAKERS</p>
                <div className="row justify-content-center">

                    <div className="col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0">
                        <div className="speaker-item">
                            <div className="speaker-cover-photo d-flex justify-content-center align-items-center background-image-cover" style={{ "backgroundImage": `url(${artLei})` }}>
                                <div className="speaker-dp">
                                    <img src={lei} alt="Lei Melendres" className="w-100" />
                                </div>
                            </div>
                            <div className="speaker-content p-3">
                                <p className="text-start font-size-100 font-size-md-110 font-size-lg-120 text-color-6 arvo-bold speaker-name mb-1">Lei Melendres</p>
                                <p className="text-start font-size-90 font-size-md-110 font-size-lg-120 text-color-5 neo-regular-italic speaker-job mb-3">Illustrator/Doodle Artist</p>

                                <p className="text-start font-size-80 font-size-md-90 font-size-lg-110 text-color-5 neo-regular-italic speaker-desc">Lei Melendres is a full-time freelance illustrator from the Philippines whose art style is focused on illustrations specifically, doodle art.</p>
                                <div className="text-center">
                                    <button onClick={() => handleShowSpeakerProfile(speakers[0])} type="button" className="btn speaker-btn mb-3">READ MORE</button>
                                </div>

                                <div className="speaker-socmed d-flex align-items-center justify-content-center">
                                    <a href="https://twitter.com/leimelendres" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="https://www.instagram.com/leimelendres" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="https://www.behance.net/leimelendres" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                        <FontAwesomeIcon icon={faBehance} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mb-3 mb-lg-0">
                        <div className="speaker-item">
                            <div className="speaker-cover-photo d-flex justify-content-center align-items-center background-image-cover" style={{ "backgroundImage": `url(${artJopet})` }}>
                                <div className="speaker-dp">
                                    <img src={jopet} alt="Jopet Arias" className="w-100" />
                                </div>
                            </div>
                            <div className="speaker-content p-3">
                                <p className="text-start font-size-100 font-size-md-110 font-size-lg-120 text-color-6 arvo-bold speaker-name mb-1">Jopet Arias</p>
                                <p className="text-start font-size-90 font-size-md-110 font-size-lg-120 text-color-5 neo-regular-italic speaker-job mb-3">Forerunner, Artist and Digital Nomad</p>

                                <p className="text-start font-size-80 font-size-md-90 font-size-lg-110 text-color-5 neo-regular-italic speaker-desc">One of the Forerunners of Crypto Art movement in the Ph, First batch of Artist that was featured on CAWA. Co-founder of CryptoartPh and a member of The Guild.</p>
                                <div className="text-center">
                                    <button onClick={() => handleShowSpeakerProfile(speakers[1])} type="button" className="btn speaker-btn mb-3">READ MORE</button>
                                </div>

                                <div className="speaker-socmed d-flex align-items-center justify-content-center">
                                    <a href="https://twitter.com/AriasJopet" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="https://www.instagram.com/jopet.arias/" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/jopet-arias-233b93225/" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mb-3 mb-md-0">
                        <div className="speaker-item">
                            <div className="speaker-cover-photo d-flex justify-content-center align-items-center background-image-cover" style={{ "backgroundImage": `url(${artKarl})` }}>
                                <div className="speaker-dp">
                                    <img src={karl} alt="Karl Vasquez" className="w-100" />
                                </div>
                            </div>
                            <div className="speaker-content p-3">
                                <p className="text-start font-size-100 font-size-md-110 font-size-lg-120 text-color-6 arvo-bold speaker-name mb-1">Karl Vasquez</p>
                                <p className="text-start font-size-90 font-size-md-110 font-size-lg-120 text-color-5 neo-regular-italic speaker-job mb-3">Creative Director</p>

                                <p className="text-start font-size-80 font-size-md-90 font-size-lg-110 text-color-5 neo-regular-italic speaker-desc">Karl is the Founder and Creative Director of the community-based streetwear brand, Bounce Back PH and also the artist of the NFT Collection, Old Chap Club.</p>
                                <div className="text-center">
                                    <button onClick={() => handleShowSpeakerProfile(speakers[2])} type="button" className="btn speaker-btn mb-3">READ MORE</button>
                                </div>

                                <div className="speaker-socmed d-flex align-items-center justify-content-center">
                                    <a href="https://twitter.com/vasquezkarlc" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="https://www.instagram.com/karlvasquez/" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/karlvasquez/" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="speaker-item">
                            <div className="speaker-cover-photo d-flex justify-content-center align-items-center background-image-cover" style={{ "backgroundImage": `url(${artJohn})` }}>
                                <div className="speaker-dp">
                                    <img src={john} alt="John Verlin Santos" className="w-100" />
                                </div>
                            </div>
                            <div className="speaker-content p-3">
                                <p className="text-start font-size-100 font-size-md-110 font-size-lg-120 text-color-6 arvo-bold speaker-name mb-1">John Verlin Santos</p>
                                <p className="text-start font-size-90 font-size-md-110 font-size-lg-120 text-color-5 neo-regular-italic speaker-job mb-3">Spoken Word Artist</p>

                                <p className="text-start font-size-80 font-size-md-90 font-size-lg-110 text-color-5 neo-regular-italic speaker-desc">John founded Titik Poetry, a Non-Government Organization Cavite-based art collective, that aims to make art a platform for education.</p>
                                <div className="text-center">
                                    <button onClick={() => handleShowSpeakerProfile(speakers[3])} type="button" className="btn speaker-btn mb-3">READ MORE</button>
                                </div>

                                <div className="speaker-socmed d-flex align-items-center justify-content-center">
                                    <a href="https://twitter.com/TitikAtSigya" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="https://www.instagram.com/verlin_santos/" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="https://verlinsantos.webflow.io/" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SpeakerProfile profileModal={showSpeakerProfile} closeProfile={handleCloseSpeakerProfile} profile={speakerDetails} />
        </section>
    )
}