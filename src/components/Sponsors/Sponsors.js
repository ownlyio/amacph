import './Sponsors.css'

import coPresenter1 from '../../img/sponsors/ownly.png'
import coPresenter2 from '../../img/sponsors/ayala-malls-legazpi.webp'
import mediaPartner1 from '../../img/sponsors/bitpinas.png'
import mediaPartner2 from '../../img/sponsors/blocktides.jpg'
import commPartner1 from '../../img/sponsors/crypto-art-ph.png'
import commPartner2 from '../../img/sponsors/tpt-black.png'
import commPartner3 from '../../img/sponsors/cotm.png'
import commPartner4 from '../../img/sponsors/dawani.png'
import commPartner5 from '../../img/sponsors/tabuskco.png'
import commPartner6 from '../../img/sponsors/ruyag.png'
import goldSponsor1 from '../../img/sponsors/coinex.png'
import goldSponsor2 from '../../img/sponsors/sparkpoint.png'
import goldSponsor3 from '../../img/sponsors/mgg.png'
import goldSponsor4 from '../../img/sponsors/blockchainspace.png'
import silverSponsor1 from '../../img/sponsors/wacom.png'
import silverSponsor2 from '../../img/sponsors/sparklearn.webp'
import bronzeSponsor1 from '../../img/sponsors/placewar.png'

export default function Sponsors() {
    return (
        <section id="partners">
            <div className="container">
                <div className="sponsors-lists">
                    <p className="text-center font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-color-4 arvo-bold sponsor-title mb-5">OUR PARTNERS</p>

                    {/* Gold Sponsors */}
                    <div className="mb-5">
                        <p className="text-center font-size-100 font-size-lg-140 text-color-5 arvo-italic sponsor-title mb-sm-4 mb-md-1">Gold Sponsors</p>
                        <div className="sponsors-wrap">
                            <div className="row justify-content-center align-items-center my-md-3">
                                <div className="col-6 col-md-3 col-xl-2 gold my-3 my-md-0 mx-md-3">
                                    <img src={goldSponsor1} alt="Sponsor Logo" className="w-100" />
                                </div>
                                <div className="col-6 col-md-3 col-xl-2 gold my-3 my-md-0 mx-md-3">
                                    <img src={goldSponsor2} alt="Sponsor Logo" className="w-100" />
                                </div>
                                <div className="col-6 col-md-3 col-xl-2 gold my-3 my-md-0 mx-md-3">
                                    <img src={goldSponsor4} alt="Sponsor Logo" className="w-100" />
                                </div>
                                <div className="col-6 col-md-3 col-xl-2 gold my-3 my-md-0 mx-md-3 ps-4 pe-5 px-sm-5">
                                    <div className="pe-lg-5 pe-xl-4 pe-xxl-5">
                                        <div className="pe-sm-4 pe-md-0 pe-lg-2 pe-xl-0">
                                            <img src={goldSponsor3} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3 mb-2 mb-lg-4">
                        <div className="col-6">
                            {/* Silver Sponsors */}
                            <div className="">
                                <p className="text-center font-size-100 font-size-lg-140 text-color-5 arvo-italic sponsor-title mb-sm-4 mb-md-1">Silver Sponsor</p>
                                <div className="sponsors-wrap">
                                    <div className="row justify-content-center align-items-center my-md-3">
                                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 silver my-3 my-md-0">
                                            <img src={silverSponsor1} alt="Sponsor Logo" className="w-100 px-3" />
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 silver my-3 my-md-0">
                                            <img src={silverSponsor2} alt="Sponsor Logo" className="w-100 px-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            {/* Bronze Sponsors */}
                            <div className="">
                                <p className="text-center font-size-100 font-size-lg-140 text-color-5 arvo-italic sponsor-title mb-sm-4 mb-md-1">Bronze Sponsor</p>
                                <div className="sponsors-wrap">
                                    <div className="row justify-content-center align-items-center my-md-3">
                                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 silver my-3 my-md-0">
                                            <img src={bronzeSponsor1} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 align-items-start">
                        <div className="col-12 col-md-6">
                            {/* Community Partner */}
                            <div className="mb-2 mb-lg-4">
                                <p className="text-center font-size-100 font-size-lg-140 text-color-5 arvo-italic sponsor-title mb-sm-4 mb-md-1">Community Partners</p>
                                <div className="sponsors-wrap">
                                    <div className="row justify-content-center align-items-center my-md-3 my-lg-5">
                                        <div className="col-4 col-md-5 col-lg-3 my-3 my-md-0 px-4">
                                            <img src={commPartner1} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                        <div className="col-4 col-md-5 col-lg-3 my-3 my-md-0 px-4">
                                            <img src={commPartner2} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                        <div className="col-4 col-md-5 col-lg-3 my-3 my-md-0 px-4">
                                            <img src={commPartner3} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                        <div className="col-4 col-md-5 col-lg-3 my-3 my-md-0 px-4">
                                            <img src={commPartner4} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                        <div className="col-4 col-md-5 col-lg-3 my-3 my-md-0">
                                            <img src={commPartner5} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                        <div className="col-4 col-md-5 col-lg-3 my-3 my-md-0">
                                            <img src={commPartner6} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            {/* Official Media Partner */}
                            <div className="mb-2 mb-lg-4">
                                <p className="text-center font-size-100 font-size-lg-140 text-color-5 arvo-italic sponsor-title mb-sm-4 mb-md-1">Official Media Partners</p>
                                <div className="sponsors-wrap">
                                    <div className="row justify-content-evenly align-items-center my-md-3 my-lg-5 flex-wrap">
                                        <div className="col-4 col-md-5 col-lg-3 my-3 my-md-0">
                                            <img src={mediaPartner1} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                        <div className="col-4 col-md-5 col-lg-3 my-3 my-md-0">
                                            <img src={mediaPartner2} alt="Sponsor Logo" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Co-Presenters */}
                    <div className="mt-4 mt-lg-0">
                        <p className="text-center font-size-100 font-size-lg-140 text-color-5 arvo-italic sponsor-title mb-sm-4 mb-md-1">Organized and Co-presented by</p>
                        <div className="sponsors-wrap">
                            <div className="row justify-content-evenly align-items-center my-md-3 my-lg-5 flex-wrap">
                                <div className="col-5 col-sm-6 col-md-5 col-lg-4 my-3 my-md-0 px-sm-5">
                                    <div className="px-lg-0 px-xxl-5">
                                        <img src={coPresenter1} alt="Sponsor Logo" className="w-100" />
                                    </div>
                                </div>
                                <div className="col-5 col-sm-6 col-md-5 col-lg-4 my-3 my-md-0 px-sm-5">
                                    <div className="px-lg-0 px-xxl-5">
                                        <img src={coPresenter2} alt="Sponsor Logo" className="w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}