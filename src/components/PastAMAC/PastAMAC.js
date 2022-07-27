import './PastAMAC.css'
import $ from 'jquery'

// images
import amac16 from '../../img/thumbnails/amac-2016.png'
import amac17 from '../../img/thumbnails/amac-2017.png'
import amac18 from '../../img/thumbnails/amac-2018.png'
import amac19 from '../../img/thumbnails/amac-2019.png'
import amac17Vid from '../../videos/amac-2017.mp4'

export default function PastAMAC() {
    $(document).ready(() => {
        var video = document.getElementById("amac17-vid")
        
        $(video).on({
            mouseenter: function () {
              video.setAttribute("controls","controls")
            },
            mouseleave: function () {
              video.removeAttribute("controls");
            }
        });
    })

    return (
        <section id="past-amac">
            <div className="container">
                <p className="past-amac-title text-start font-size-150 font-size-md-180 font-size-lg-230 font-size-xl-300 text-black arvo-bold mb-3">PAST AMAC EVENTS</p>
                <div className="past-amac-border"></div>
                <div className="row align-items-start">
                    <div className="col-12 col-lg-6">
                        <div className="past-amac-thumbnail mb-3">
                            <a href="https://www.youtube.com/watch?v=jteH3HLu6DM" target="_blank" rel="noreferrer">
                                <img src={amac16} alt="AMAC 2016" className="w-100" />
                            </a>
                        </div>
                        <p className="past-amac-event-title text-start text-black mb-3">
                            <a href="https://www.youtube.com/watch?v=jteH3HLu6DM" target="_blank" rel="noreferrer" className="link-color-5 font-size-110 font-size-md-130 font-size-lg-150 font-size-xl-180">AMAC 2016</a>
                        </p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="past-amac-video mb-3">
                            <video poster={amac17} id="amac17-vid">
                                <source src={amac17Vid} type="video/mp4" />
                            </video>
                        </div>
                        <p className="past-amac-event-title font-size-110 font-size-md-130 font-size-lg-150 font-size-xl-180 text-start text-black mb-3">AMAC 2017</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="past-amac-thumbnail mb-3">
                            <a href="https://www.facebook.com/watch/?v=373607726668978" target="_blank" rel="noreferrer">
                                <img src={amac18} alt="AMAC 2018" className="w-100" />
                            </a>
                        </div>
                        <p className="past-amac-event-title text-start text-black mb-3">
                            <a href="https://www.facebook.com/watch/?v=373607726668978" target="_blank" rel="noreferrer" className="link-color-5 font-size-110 font-size-md-130 font-size-lg-150 font-size-xl-180">AMAC 2018</a>
                        </p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="past-amac-thumbnail mb-3">
                            <a href="https://www.facebook.com/watch/?v=447100689288632" target="_blank" rel="noreferrer">
                                <img src={amac19} alt="AMAC 2019" className="w-100" />
                            </a>
                        </div>
                        <p className="past-amac-event-title text-start text-black mb-3">
                            <a href="https://www.facebook.com/watch/?v=447100689288632" target="_blank" rel="noreferrer" className="link-color-5 font-size-110 font-size-md-130 font-size-lg-150 font-size-xl-180">AMAC 2019</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}