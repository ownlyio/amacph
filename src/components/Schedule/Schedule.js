
import './Schedule.css'

import schedBg from '../../img/speaker_bg.png'

export default function Speakers() {
    return (
        <section id="schedule" className="background-image-cover" style={{ "backgroundImage": `url(${schedBg})` }}>
            <div className="container">
                <p className="text-center font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-color-4 arvo-bold speaker-title mb-4 mb-lg-5">SCHEDULE OF EVENTS</p>
                
                <div className="row align-items-start">
                    <div className="col-12 col-md-6 mb-4">
                        <p className="font-size-110 font-size-sm-160 font-size-md-190 font-size-lg-220 arvo-bold text-center text-color-2 mb-4">DAY 01 - OCT. 08</p>
                        <div className="schedule-item-wrap">
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">10:00AM-08:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Art Fair</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Anytime at <a href="https://mustachio.quest" target="_blank" rel="noreferrer" className="link-color-2">Mustachio Quest Gallery</a></p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">AMAC Metaverse Exhibit</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">02:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Photowalk - Assembly Time</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">01:00PM-07:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Busking</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">06:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Raffle WACOM (AR content)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                        <p className="font-size-110 font-size-sm-160 font-size-md-190 font-size-lg-220 arvo-bold text-center text-color-2 mb-4">DAY 02 - OCT. 09</p>
                        <div className="schedule-item-wrap">
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">10:00AM-08:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Art Fair</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Anytime at <a href="https://mustachio.quest" target="_blank" rel="noreferrer" className="link-color-2">Mustachio Quest Gallery</a></p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">AMAC Metaverse Exhibit</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">01:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Art Talks @ Ayala Cinema</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">01:00PM-04:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Music Jam Part 1</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">05:00PM-08:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Music Jam Part 2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-start">
                    <div className="col-12 col-md-6 mb-4">
                        <p className="font-size-110 font-size-sm-160 font-size-md-190 font-size-lg-220 arvo-bold text-center text-color-2 mb-4">OFFICIAL SIDE EVENTS</p>
                        <div className="schedule-item-wrap">
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Oct. 7</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">BB Talks (webinar via Zoom)</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Oct. 8<br />02:00PM-05:00PM</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Side event with SparkLearn @ SparkPoint Office</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Oct. 8-9</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular mb-3">Kids Workshop with Dee Jai</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-0 mb-md-4">
                        <p className="font-size-110 font-size-sm-160 font-size-md-190 font-size-lg-220 arvo-bold text-center text-color-2 mb-4">ART TALKS PROGRAM</p>
                        <div className="schedule-item-wrap">
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">01:00PM onwards</p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Prayer</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular"></p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">National Anthem</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular"></p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Opening and Welcome</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular"></p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">1st Speaker - Verlin Santos</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular"></p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">CoinEx</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular"></p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">2nd Speaker - Karl Vasquez</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular"></p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">MGG</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular"></p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">3rd Speaker - Jopet Arias</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular"></p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">SparkPoint</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular"></p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">4th Speaker - Lei Melendres</p>
                            </div>
                            <div className="schedule-item-list d-flex justify-content-between">
                                <p className="schedule-title-a text-end font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular"></p>
                                <p className="schedule-title-b text-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-color-5 neo-regular">Closing and Raffle (WACOM)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}