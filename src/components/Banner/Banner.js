import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import banner from '../../img/banner.jpg'
import logo from '../../img/amac-logo-2.png'
import ownly from '../../img/sponsors/ownly.png'
import ayala from '../../img/sponsors/ayala-malls-legazpi.webp'
import bitpinas from '../../img/sponsors/bitpinas.png'

export default function Banner({ isLoading, showRegister }) {
    return (
        <section id="amac-banner" className="h-screen background-image-cover position-relative" style={{"backgroundImage": `url(${banner})`}}>
            <div className="container h-100 pt-4">
                <div className="d-flex justify-content-center align-items-center h-100 flex-column">
                    <div className="row justify-content-center mb-3">
                        <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-6">
                            <img className="w-100" src={logo} alt="AMAC Logo" />
                        </div>
                    </div>
                    <p className="font-size-110 font-size-sm-140 font-size-md-180 font-size-lg-250 arvo-bold text-center text-color-1 banner-title">Exploring the intersection of art and technology</p>
                    <p className="font-size-90 font-size-sm-110 font-size-md-140 font-size-lg-160 neo-bold text-center text-white banner-sub">October 8-9, 2022 | Ayala Malls Legazpi</p>
                    { isLoading ? (
                        <button className="def btn btn-custom-4 px-5 mb-3 banner-btn" disabled>
                            <FontAwesomeIcon icon={faSpinner} spin />
                        </button>
                    ) : (
                        <button onClick={showRegister} className="def btn btn-custom-1 px-5 mb-3 banner-btn">BUY TICKETS</button>
                    )}
                    <p className="font-size-80 font-size-md-100 neo-regular-italic text-center text-white mb-0 banner-text">Note: Only the Art Talks are ticketed. Other activities are open and free for everyone in the community.</p>
                </div>

                <div className="banner-sponsors mt-4 px-5 d-flex justify-content-center justify-content-lg-between align-items-start flex-wrap w-100">
                    <div className="banner-sponsor-1 mb-2 mb-lg-0">
                        <p className="font-size-80 font-size-md-100 neo-regular text-center text-lg-start text-white mb-3 banner-sponsor-1-text">ORGANIZED AND CO-PRESENTED BY:</p>
                        <div className="d-flex justify-content-center justify-content-lg-start align-items-center flex-wrap">
                            <div className="banner-sponsor-1-img-wrap me-4 mb-3 mb-lg-0">
                                <img className="w-100" src={ownly} alt="Ownly Logo" />
                            </div>
                            <div className="banner-sponsor-1-img-wrap mb-3 mb-lg-0">
                                <img className="w-100" src={ayala} alt="Ayala Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="banner-sponsor-2">
                        <p className="font-size-80 font-size-md-100 neo-regular text-center text-lg-end text-white mb-3 banner-sponsor-2-text">OFFICIAL MEDIA PARTNER:</p>
                        <div className="d-flex justify-content-center justify-content-lg-end align-items-center">
                            <div className="banner-sponsor-2-img-wrap">
                                <img className="w-100" src={bitpinas} alt="BitPinas Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}