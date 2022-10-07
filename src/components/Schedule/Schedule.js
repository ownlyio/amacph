
import './Schedule.css'

import schedBg from '../../img/speaker_bg.png'

export default function Speakers() {
    return (
        <section id="schedule" className="background-image-cover" style={{ "backgroundImage": `url(${schedBg})` }}>
            <div className="container">
                <p className="text-center font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-color-4 arvo-bold speaker-title mb-4 mb-lg-5">SCHEDULE OF EVENTS</p>
                
                <div className="row align-items-start">
                    <div className="col-12 col-md-6 mb-4 order-1">
                        <p className="font-size-110 font-size-sm-160 font-size-md-190 font-size-lg-220 arvo-bold text-center text-color-2 mb-4">DAY 01 - OCT. 08</p>
                        <div className="schedule-item-wrap">
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">10:00AM-08:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Art Fair with local creative merchants</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">01:00PM-07:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Busking with TabuskCo</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">02:00PM-05:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Tara Photowalk Tayo with Earl Recamunda</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3"><a href="https://mustachio.quest" target="_blank" rel="noreferrer" className="link-color-2">Mustachio Quest Gallery</a></p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Metaverse Exhibit (visit anytime online)</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 mb-4 order-2 order-md-3">
                        <p className="font-size-110 font-size-sm-160 font-size-md-190 font-size-lg-220 arvo-bold text-center text-color-2 mb-4">DAY 02 - OCT. 09</p>
                        <div className="schedule-item-wrap">
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">10:00AM-08:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Art Fair with local creative merchants</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">01:00PM-05:30PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Art Taks at Ayala Malls Cinema<br/>with Lei Melendres, Karl Vasquez, Verlin Santos &amp; Jopet Arias</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">01:00PM-04:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Music Jam Part 1 with local music performances</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">05:00PM-08:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Music Jam Part 2, Transcendence with Dawani, &amp; COTM</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3"><a href="https://mustachio.quest" target="_blank" rel="noreferrer" className="link-color-2">Mustachio Quest Gallery</a></p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Metaverse Exhibit (visit anytime online)</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 mb-4 order-3 order-md-2">
                        <p className="font-size-110 font-size-sm-160 font-size-md-190 font-size-lg-220 arvo-bold text-center text-color-2 mb-4">OFFICIAL SIDE EVENTS</p>
                        <div className="schedule-item-wrap">
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Oct. 7<br />01:00PM-03:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">BB Talks (Webinar via Zoom)</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Oct. 8<br />02:00PM-05:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">SparkLearn (NFT Talk &amp; Crypto Wallet Setup) @ SparkPoint Office</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Oct. 8-9</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Kids workshop with Dee Jai Tanji</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 mb-0 mb-md-4 order-4">
                        <p className="font-size-110 font-size-sm-160 font-size-md-190 font-size-lg-220 arvo-bold text-center text-color-2 mb-4">ART TALKS PROGRAM</p>
                        <div className="schedule-item-wrap">
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">12:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Registration</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">01:15PM-01:20PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Announcement of Upcoming Talks and Speakers</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">01:20PM-01:30PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Prayer and National Anthem</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">01:30PM-01:40PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Opening and Welcome by Ismael Jerusalem</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">01:40PM-02:25PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Verlin Santos, Titik Poetry</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">02:25PM-02:35PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Dell Omasas, CoinEx</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">02:35PM-03:20PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Karl Vasquez, Bounce Back PH</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">03:20PM-03:30PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Mike Reñevo, MetaGaming Guild</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">03:30PM-04:15PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Jopet Arias, CryptoArt PH</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">04:15PM-04:25PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Kristine Joy Ibañez, SparkPoint</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">04:25PM-05:10PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Lei Melendres</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">05:10PM-05:20PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Blockchain Space/Sandbox</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">05:20PM-05:30PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Closing and Raffle, WACOM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}