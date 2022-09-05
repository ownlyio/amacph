import './About.css'

import about1 from '../../img/pictures/about-1.jpg'

export default function About() {
    return (
        <section id="amac-about">
            <div className="container">
                <div className="row align-items-center mb-5">
                    <div className="col-12 col-md-6">
                        <p className="text-center text-md-start font-size-lg-280 text-color-4 arvo-bold about-title mb-4">What is AMAC?</p>
                        <p className="text-center text-md-start font-size-lg-140 text-color-5 about-desc mb-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>

                        {/* <button className="def btn btn-custom-2 px-5 about-btn">LEARN MORE</button> */}
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="about-img">
                            <img src={about1} alt="About AMAC" className="w-100" />
                        </div>
                    </div>
                </div>

                <div className="about-numbers row justify-content-center align-items-center">
                    <div className="col-12 col-md-4">
                        <div className="about-number-item">
                            <p className="text-center font-size-lg-400 text-color-2 arvo-bold about-qty mb-1">200</p>
                            <p className="text-center font-size-lg-200 text-color-5 about-qty">ATTENDEES</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="about-number-item">
                            <p className="text-center font-size-lg-400 text-color-3 arvo-bold about-qty mb-1">50</p>
                            <p className="text-center font-size-lg-200 text-color-5 about-qty">ARTISTS &amp; BRANDS</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="about-number-item">
                            <p className="text-center font-size-lg-400 text-color-4 arvo-bold about-qty mb-1">4</p>
                            <p className="text-center font-size-lg-200 text-color-5 about-qty">SPEAKERS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}