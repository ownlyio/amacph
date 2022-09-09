import './PastAMAC.css'

// images
import amac16 from '../../img/thumbnails/amac_2016.jpg'
import amac17 from '../../img/thumbnails/amac_2017.jpg'
import amac18 from '../../img/thumbnails/amac_2018.jpg'
import amac19 from '../../img/thumbnails/amac_2019.png'

export default function PastAMAC({ showAmacModal }) {
    return (
        <section id="past-amac">
            <div className="container">
                <p className="text-center font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-color-4 arvo-bold about-title mb-5">AMAC SINCE 2016</p>

                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="past-amac-thumbnail mb-3">
                            <a href="https://www.youtube.com/watch?v=jteH3HLu6DM" target="_blank" rel="noreferrer">
                                <img src={amac16} alt="AMAC 2016" className="w-100" />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 cursor-pointer" onClick={showAmacModal}>
                        <div className="past-amac-thumbnail mb-3">
                            <img src={amac17} alt="AMAC 2016" className="w-100" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="past-amac-thumbnail mb-3">
                            <a href="https://www.facebook.com/watch/?v=373607726668978" target="_blank" rel="noreferrer">
                                <img src={amac18} alt="AMAC 2018" className="w-100" />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="past-amac-thumbnail mb-3">
                            <a href="https://www.facebook.com/watch/?v=447100689288632" target="_blank" rel="noreferrer">
                                <img src={amac19} alt="AMAC 2019" className="w-100" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}