import './Banner.css'

import banner from '../../img/banner.jpg'
import logo from '../../img/amac-logo-2.png'

export default function Banner({ showRegister }) {
    return (
        <section id="amac-banner" className="h-screen background-image-cover position-relative py-5" style={{"backgroundImage": `url(${banner})`}}>
            <div className="container h-100 pt-5">
                <div className="d-flex justify-content-center align-items-center h-100 flex-column">
                    <div className="row justify-content-center mb-3">
                        <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-6">
                            <img className="w-100" src={logo} alt="AMAC Logo" />
                        </div>
                    </div>
                    <p className="font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 arvo-bold text-center text-color-1 banner-title">Exploring the intersection of art and technology</p>
                    <p className="font-size-100 font-size-sm-120 font-size-md-150 font-size-lg-180 arvo-bold text-center text-white mb-5 banner-sub">October 8-9, 2022 | Ayala Malls Legazpi</p>
                    <button onClick={showRegister} className="def btn btn-custom-1 px-5 mb-3 banner-btn">BUY TICKETS</button>
                    <p className="font-size-80 font-size-md-100 arvo-italic text-center text-white mb-0 banner-text">Note: Only the Art Talks is ticketed, all activities is open and free for the community</p>
                </div>
            </div>
        </section>
    )
}