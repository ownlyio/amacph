import './Sponsors.css'

import coPresenter1 from '../../img/sponsors/ownly.png'
import coPresenter2 from '../../img/sponsors/ayala-malls-legazpi.webp'
import mediaPartner from '../../img/sponsors/bitpinas.png'
import commPartner1 from '../../img/sponsors/crypto-art-ph.png'
import commPartner2 from '../../img/sponsors/tpt-black.png'

export default function Sponsors() {
    return (
        <section id="partners">
            <div className="container">
                <div className="sponsors-lists">
                    <p className="text-center font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-color-4 arvo-bold sponsor-title mb-5">OUR PARTNERS</p>
                    
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

                    {/* Official Media Partner */}
                    <div className="sponsors-section">
                        <p className="text-center font-size-100 font-size-lg-140 text-color-5 arvo-italic sponsor-title mb-sm-4 mb-md-1">Official Media Partner</p>
                        <div className="sponsors-wrap">
                            <div className="sponsors-row d-flex justify-content-evenly align-items-center my-md-3 my-lg-5 flex-wrap">
                                <div className="sponsor-item my-3 my-md-0 mx-md-3">
                                    <img src={mediaPartner} alt="Sponsor Logo" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Community Partner */}
                    <div className="sponsors-section">
                        <p className="text-center font-size-100 font-size-lg-140 text-color-5 arvo-italic sponsor-title mb-sm-4 mb-md-1">Community Partners</p>
                        <div className="sponsors-wrap">
                            <div className="sponsors-row d-flex justify-content-evenly align-items-center my-md-3 my-lg-5 flex-wrap">
                                <div className="sponsor-item my-3 my-md-0 mx-md-3">
                                    <img src={commPartner1} alt="Sponsor Logo" className="w-100" />
                                </div>
                                <div className="sponsor-item my-3 my-md-0 mx-md-3">
                                    <img src={commPartner2} alt="Sponsor Logo" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}