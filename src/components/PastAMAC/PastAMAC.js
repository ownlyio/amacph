import './PastAMAC.css'

// images
import amac16 from '../../img/thumbnails/amac_2016.jpg'
import amac17 from '../../img/thumbnails/amac_2017.jpg'
import amac18 from '../../img/thumbnails/amac_2018.jpg'
import amac19 from '../../img/thumbnails/amac_2019.png'

export default function PastAMAC() {
    return (
        <section id="past-amac">
            <div className="container">
                <p className="text-center font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-color-4 arvo-bold past-title mb-4">AMAC SINCE 2016</p>
                <p className="text-center font-size-100 font-size-sm-120 font-size-lg-140 text-color-5 past-desc neo-regular mb-5">Building a community of creatives since 2016, AMAC has gathered diverse creative minds from different places in South Luzon. Through AMAC, we celebrate creativity through community-led initiatives and activities that grew from dozens to hundreds to thousands of attendees.</p>

                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <a href="https://youtu.be/NnRRzY8KORU" data-fancybox target="_blank" rel="noreferrer">
                            <div className="past-amac-thumbnail">
                                <img src={amac16} alt="AMAC 2016" className="w-100" />
                            </div>
                        </a>
                        <p className="text-center font-size-100 font-size-sm-110 font-size-lg-120 text-color-5 past-dec neo-regular mt-3 mb-4 mb-lg-0">Started with a few dozen of attendees hosted by a student department organization from a university in Bicol.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <a href="https://youtu.be/Pa39b0wKYAw" data-fancybox target="_blank" rel="noreferrer">
                            <div className="past-amac-thumbnail">
                                <img src={amac17} alt="AMAC 2017" className="w-100" />
                            </div>
                        </a>
                        <p className="text-center font-size-100 font-size-sm-110 font-size-lg-120 text-color-5 past-dec neo-regular mt-3 mb-4 mb-lg-0">We were joined as speakers by well-known creative professionals like Kerby Rosanes and Raf Banzuela.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <a href="https://youtu.be/9k4dZXKx4r4" data-fancybox target="_blank" rel="noreferrer">
                            <div className="past-amac-thumbnail">
                                <img src={amac18} alt="AMAC 2018" className="w-100" />
                            </div>
                        </a>
                        <p className="text-center font-size-100 font-size-sm-110 font-size-lg-120 text-color-5 past-dec neo-regular mt-3 mb-4 mb-md-0">Started expanding the event by adding community-led activities such as art fairs, exhibits, workshops, music jams, and more.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <a href="https://youtu.be/mD5XaU7Xv8k" data-fancybox target="_blank" rel="noreferrer">
                            <div className="past-amac-thumbnail">
                                <img src={amac19} alt="AMAC 2019" className="w-100" />
                            </div>
                        </a>
                        <p className="text-center font-size-100 font-size-sm-110 font-size-lg-120 text-color-5 past-dec neo-regular mt-3">Eventually grew to thousands of attendees. Added more community-led initiatives and inspirational speakers.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}