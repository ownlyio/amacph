import './Banner.css'

import banner from '../../img/banner.jpg'
import logo from '../../img/amac-logo-2.png'

export default function Banner() {
    return (
        <section id="amac-banner" className="h-screen background-image-cover position-relative" style={{"backgroundImage": `url(${banner})`}}>
            <div className="container h-100">
                <div className="d-flex justify-content-center align-items-center h-100 flex-column">
                    <div className="amac-logo">
                        <img className="w-100" src={logo} alt="AMAC Logo" />
                    </div>
                    <p className="font-size-lg-280 arvo-bold text-center text-color-1 banner-title">ALBAY MULTIMEDIA ARTS CONVENTION</p>
                    <p className="font-size-lg-230 arvo-bold text-center text-white mb-5 banner-sub">October 8-9, 2022 | Ayala Malls Legazpi</p>
                    <button className="btn btn-custom-1 px-5 banner-btn">BUY TICKETS</button>
                </div>
            </div>
        </section>
    )
}