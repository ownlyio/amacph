import './About.css'

import about1 from '../../img/pictures/about-pic.jpg'

export default function About() {
    return (
        <section id="amac-about">
            <div className="container">
                <div className="row align-items-center mb-lg-5">
                    <div className="col-12 col-md-6 order-2 order-md-1">
                        <p className="text-center text-md-start font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-color-4 arvo-bold about-title mb-4">What is AMAC?</p>
                        <p className="text-center text-md-start font-size-100 font-size-sm-120 font-size-lg-140 text-color-5 about-desc neo-regular mb-3">The Albay Multimedia Arts Convention is a two-day event happening on October 8-9, 2022 at Ayala Malls Legazpi. AMAC is the biggest event celebrating creativity through art and tech in South Luzon, cultivating the grass root creative community since 2016.</p>
                        <p className="text-center text-md-start font-size-100 font-size-sm-120 font-size-lg-140 text-color-5 about-desc">For this year’s AMAC, we will explore the intersection of art and technology in the biggest event celebrating creativity in the Bicol Region.</p>

                        <div className="text-center text-md-start mb-5 mb-md-0">
                            <button type="button" className="btn btn-custom-2 py-2 px-4 mt-4 fw-bold">FULL EVENT DETAILS TBA</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-1 order-md-2 mb-5 mb-md-0">
                        <div className="about-img">
                            <img src={about1} alt="About AMAC" className="w-100" />
                        </div>
                    </div>
                </div>

                <div className="about-numbers row justify-content-center align-items-start">
                    <div className="col-12 col-md-4">
                        <div className="about-number-item">
                            <p className="text-center font-size-200 font-size-sm-270 font-size-md-310 font-size-lg-400 text-color-2 arvo-bold about-qty mb-1">2000+</p>
                            <p className="text-center font-size-100 font-size-sm-120 font-size-lg-200 text-color-5 about-qty mb-5 mb-md-0">ATTENDEES</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="about-number-item">
                            <p className="text-center font-size-200 font-size-sm-270 font-size-md-310 font-size-lg-400 text-color-3 arvo-bold about-qty mb-1">50+</p>
                            <p className="text-center font-size-100 font-size-sm-120 font-size-lg-200 text-color-5 about-qty mb-5 mb-md-0">ARTISTS &amp; BRANDS</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="about-number-item">
                            <p className="text-center font-size-200 font-size-sm-270 font-size-md-310 font-size-lg-400 text-color-4 arvo-bold about-qty mb-1">4</p>
                            <p className="text-center font-size-100 font-size-sm-120 font-size-lg-200 text-color-5 about-qty mb-5 mb-md-0">ART TALK SPEAKERS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}