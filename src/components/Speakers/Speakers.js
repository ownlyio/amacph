import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Speakers.css'

import speakerBg from '../../img/speaker_bg.png'
import lei from '../../img/speakers/lei_melendres.png'
import jopet from '../../img/speakers/jopet_arias.jpg'
import karl from '../../img/speakers/karl_vasquez.jpg'
import john from '../../img/speakers/john_verlin_santos.jpg'

export default function Speakers() {
    return (
        <section id="speakers" className="background-image-cover" style={{"backgroundImage": `url(${speakerBg})`}}>
            <div className="container">
                <p className="text-center font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-color-4 arvo-bold speaker-title mb-md-3 mb-lg-5">Speakers</p>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="speaker-item mb-4 p-3">
                            <div className="speaker-img p-3 mb-sm-2 mb-lg-3">
                                <img src={lei} alt="Lei Melendres" className="w-100" />
                            </div>
                            <p className="text-center font-size-100 font-size-sm-120 font-size-md-150 font-size-lg-180 text-color-6 arvo-bold speaker-name mb-1">Lei Melendres</p>
                            <p className="text-center font-size-90 font-size-md-110 font-size-lg-130 text-color-5 arvo-italic speaker-job">Illustrator/Doodle Artist</p>

                            <div className="speaker-socmed d-flex align-items-center justify-content-center">
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="speaker-item mb-4 p-3">
                            <div className="speaker-img p-3 mb-sm-2 mb-lg-3">
                                <img src={jopet} alt="Jopet Arias" className="w-100" />
                            </div>
                            <p className="text-center font-size-100 font-size-sm-120 font-size-md-150 font-size-lg-180 text-color-6 arvo-bold speaker-name mb-1">Jopet Arias</p>
                            <p className="text-center font-size-90 font-size-md-110 font-size-lg-130 text-color-5 arvo-italic speaker-job">Forerunner, Artist and Digital Nomad</p>

                            <div className="speaker-socmed d-flex align-items-center justify-content-center">
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="speaker-item mb-4 p-3">
                            <div className="speaker-img p-3 mb-sm-2 mb-lg-3">
                                <img src={karl} alt="Karl Vasquez" className="w-100" />
                            </div>
                            <p className="text-center font-size-100 font-size-sm-120 font-size-md-150 font-size-lg-180 text-color-6 arvo-bold speaker-name mb-1">Karl Vasquez</p>
                            <p className="text-center font-size-90 font-size-md-110 font-size-lg-130 text-color-5 arvo-italic speaker-job">Creative Director</p>

                            <div className="speaker-socmed d-flex align-items-center justify-content-center">
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="speaker-item mb-4 p-3">
                            <div className="speaker-img p-3 mb-sm-2 mb-lg-3">
                                <img src={john} alt="Speaker 3 Name" className="w-100" />
                            </div>
                            <p className="text-center font-size-100 font-size-sm-120 font-size-md-150 font-size-lg-180 text-color-6 arvo-bold speaker-name mb-1">John Verlin Santos</p>
                            <p className="text-center font-size-90 font-size-md-110 font-size-lg-130 text-color-5 arvo-italic speaker-job">Spoken Word Artist</p>

                            <div className="speaker-socmed d-flex align-items-center justify-content-center">
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-2 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}