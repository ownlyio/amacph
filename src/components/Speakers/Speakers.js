import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Speakers.css'

import speakerBg from '../../img/speaker_bg.png'
import speaker1 from '../../img/speakers/speaker1.jpg'
import speaker2 from '../../img/speakers/speaker2.jpg'
import speaker3 from '../../img/speakers/speaker3.jpg'

export default function Speakers() {
    return (
        <section id="amac-speakers" className="background-image-cover" style={{"backgroundImage": `url(${speakerBg})`}}>
            <div className="container">
                <p className="text-center font-size-lg-280 text-color-4 arvo-bold speaker-title mb-5">Speakers</p>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4">
                        <div className="speaker-item mb-4 p-3">
                            <div className="speaker-img p-3 mb-3">
                                <img src={speaker1} alt="Speaker 1 Name" className="w-100" />
                            </div>
                            <p className="text-center font-size-lg-180 text-color-6 arvo-bold speaker-name mb-1">Fredrick Martinsson</p>
                            <p className="text-center font-size-lg-130 text-color-5 arvo-italic speaker-job">Founder, Edilta</p>

                            <div className="speaker-socmed d-flex align-items-center justify-content-center">
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-1 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faFacebookF} size="md" />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-1 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faTwitter} size="md" />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-1 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faInstagram} size="md" />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-1 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="md" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="speaker-item mb-4 p-3">
                            <div className="speaker-img p-3 mb-3">
                                <img src={speaker2} alt="Speaker 2 Name" className="w-100" />
                            </div>
                            <p className="text-center font-size-lg-180 text-color-6 arvo-bold speaker-name mb-1">Melisa Lundryn</p>
                            <p className="text-center font-size-lg-130 text-color-5 arvo-italic speaker-job">Lead Designer, Payol</p>

                            <div className="speaker-socmed d-flex align-items-center justify-content-center">
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-1 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faFacebookF} size="md" />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-1 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faTwitter} size="md" />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-1 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faInstagram} size="md" />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-1 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="md" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="speaker-item mb-4 p-3">
                            <div className="speaker-img p-3 mb-3">
                                <img src={speaker3} alt="Speaker 3 Name" className="w-100" />
                            </div>
                            <p className="text-center font-size-lg-180 text-color-6 arvo-bold speaker-name mb-1">Agaton Johnsson</p>
                            <p className="text-center font-size-lg-130 text-color-5 arvo-italic speaker-job">Development Expert</p>

                            <div className="speaker-socmed d-flex align-items-center justify-content-center">
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-1 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faFacebookF} size="md" />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-1 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faTwitter} size="md" />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-1 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faInstagram} size="md" />
                                </a>
                                <a href="https://sample.com" target="_blank" rel="noreferrer" className="mx-2 link-color-1 speaker-socmed-icon">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="md" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}