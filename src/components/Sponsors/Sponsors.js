import './Sponsors.css'

import coPresenter1 from '../../img/sponsors/ownly.png'
import coPresenter2 from '../../img/sponsors/ayala-malls-legazpi.webp'
import mediaPartner1 from '../../img/sponsors/bitpinas.png'
import mediaPartner2 from '../../img/sponsors/blocktides.jpg'
import commPartner1 from '../../img/sponsors/crypto-art-ph.png'
import commPartner2 from '../../img/sponsors/tpt-black.png'
import commPartner3 from '../../img/sponsors/cotm.png'
import commPartner4 from '../../img/sponsors/dawani.png'
import goldSponsor1 from '../../img/sponsors/coinex.png'
import bronzeSponsor1 from '../../img/sponsors/placewar.png'

export default function Sponsors() {
    return (
        <section id="partners">
            <div className="container">
                <div className="sponsors-lists">
                    <p className="text-center font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-color-4 arvo-bold sponsor-title mb-5">OUR PARTNERS</p>
                    
                    <div className="row align-items-start">
                        <div className="col-12 col-md-6">
                            {/* Gold Sponsors */}
                            <div className="sponsors-section">
                                <p className="text-center font-size-100 font-size-lg-140 text-color-5 arvo-italic sponsor-title mb-sm-4 mb-md-1">Gold Sponsors</p>
                                <div className="sponsors-wrap">
                                    <div className="sponsors-row d-flex justify-content-evenly align-items-center my-md-3 my-lg-5 flex-wrap">
                                        <div className="sponsor-item my-3 my-md-0 mx-lg-4 mx-xxl-5">
                                            <img src={goldSponsor1} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            {/* Bronze Sponsors */}
                            <div className="sponsors-section">
                                <p className="text-center font-size-100 font-size-lg-140 text-color-5 arvo-italic sponsor-title mb-sm-4 mb-md-1">Bronze Sponsors</p>
                                <div className="sponsors-wrap">
                                    <div className="sponsors-row d-flex justify-content-evenly align-items-center my-md-3 my-lg-5 flex-wrap">
                                        <div className="sponsor-item my-3 my-md-0 mx-md-3">
                                            <img src={bronzeSponsor1} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>                                              
                    </div>

                    <div className="row align-items-start">
                        <div className="col-12 col-md-6">
                            {/* Community Partner */}
                            <div className="sponsors-section">
                                <p className="text-center font-size-100 font-size-lg-140 text-color-5 arvo-italic sponsor-title mb-sm-4 mb-md-1">Community Partners</p>
                                <div className="sponsors-wrap">
                                    <div className="sponsors-row d-flex justify-content-evenly align-items-center my-md-3 my-lg-5 flex-wrap">
                                        <div className="sponsor-item-sm my-3 my-md-0 mx-lg-4 mx-xxl-5">
                                            <img src={commPartner1} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                        <div className="sponsor-item-sm my-3 my-md-0 mx-lg-4 mx-xxl-5">
                                            <img src={commPartner2} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                        <div className="sponsor-item-sm my-3 my-md-0 mx-lg-4 mx-xxl-5">
                                            <img src={commPartner3} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                        <div className="sponsor-item-sm my-3 my-md-0 mx-lg-4 mx-xxl-5">
                                            <img src={commPartner4} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            {/* Official Media Partner */}
                            <div className="sponsors-section">
                                <p className="text-center font-size-100 font-size-lg-140 text-color-5 arvo-italic sponsor-title mb-sm-4 mb-md-1">Official Media Partner</p>
                                <div className="sponsors-wrap">
                                    <div className="sponsors-row d-flex justify-content-evenly align-items-center my-md-3 my-lg-5 flex-wrap">
                                        <div className="sponsor-item-md my-3 my-md-0 mx-md-3">
                                            <img src={mediaPartner1} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                        <div className="sponsor-item-md my-3 my-md-0 mx-md-3">
                                            <img src={mediaPartner2} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>                                              
                    </div>

                    {/* Co-Presenters */}
                    <div className="sponsors-section">
                        <p className="text-center font-size-100 font-size-lg-140 text-color-5 arvo-italic sponsor-title mb-sm-4 mb-md-1">Organized and Co-presented by</p>
                        <div className="sponsors-wrap">
                            <div className="sponsors-row d-flex justify-content-evenly align-items-center my-md-3 my-lg-5 flex-wrap">
                                <div className="sponsor-item my-3 my-md-0 mx-md-3">
                                    <img src={coPresenter1} alt="Sponsor Logo" className="w-100" />
                                </div>
                                <div className="sponsor-item my-3 my-md-0 mx-md-3">
                                    <img src={coPresenter2} alt="Sponsor Logo" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}