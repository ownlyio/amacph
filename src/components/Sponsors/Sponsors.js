import './Sponsors.css'

import coPresenter1 from '../../img/sponsors/ayala-malls-legazpi.webp'

export default function Sponsors() {
    return (
        <section id="sponsors">
            <div className="container">
                <div className="sponsors-lists mb-5">
                    <p className="text-center font-size-lg-280 text-color-4 arvo-bold sponsor-title mb-5">Our Sponsors</p>
                    
                    {/* Co-Presenters */}
                    <div className="sponsors-section">
                        <p className="text-center font-size-lg-140 text-color-5 arvo-italic sponsor-title mb-1">Co-presented by</p>
                        <div className="sponsors-wrap">
                            <div className="sponsors-row d-flex justify-content-evenly my-5 flex-wrap">
                                <div className="sponsor-item mx-3">
                                    <img src={coPresenter1} alt="Sponsor Logo" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Major Sponsors */}
                    {/* <div className="sponsors-section">
                        <p className="text-center font-size-lg-140 text-color-5 arvo-italic sponsor-title mb-1">Major Sponsors</p>
                        <div className="sponsors-wrap">
                            <div className="sponsors-row d-flex justify-content-evenly my-5 flex-wrap">
                                <div className="sponsor-item mx-3">
                                    <img src={logo} alt="Sponsor Logo" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}