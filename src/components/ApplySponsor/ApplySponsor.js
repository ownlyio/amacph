import './ApplySponsor.css'

import sponsor from '../../img/pictures/sponsor.jpg'
import sponsor1 from '../../img/pictures/sponsor-pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function ApplySponsor() {
    return (
        <section id="amac-apply-sponsor" className="background-image-cover" style={{"backgroundImage": `url(${sponsor})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-5 mb-5 mb-md-0">
                        <div className="apply-sponsor-img">
                            <img src={sponsor1} alt="AMAC Crowd" className="w-100" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 offset-md-1">
                        <p className="text-center text-md-start font-size-130 font-size-sm-150 font-size-md-200 font-size-lg-280 text-color-2 arvo-bold sponsor-title mb-4">BECOME A SPONSOR</p>
                        <p className="text-center text-md-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-white sponsor-sub mb-3">Looking to get your brand exposure and engagement in the rapidly expanding world of web3? We offer various ways for you to showcase your project at our event:</p>

                        <p className="text-center text-md-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-white sponsor-sub mb-2">
                            <FontAwesomeIcon icon={faCheck} color="white" />&nbsp;&nbsp;Speaking slots
                        </p>
                        <p className="text-center text-md-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-white sponsor-sub mb-2">
                            <FontAwesomeIcon icon={faCheck} color="white" />&nbsp;&nbsp;Branded side events
                        </p>
                        <p className="text-center text-md-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-white sponsor-sub mb-2">
                            <FontAwesomeIcon icon={faCheck} color="white" />&nbsp;&nbsp;Branded main event segments
                        </p>
                        <p className="text-center text-md-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-white sponsor-sub mb-3">
                            <FontAwesomeIcon icon={faCheck} color="white" />&nbsp;&nbsp;Expo booths
                        </p>
                        <p className="text-center text-md-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-white sponsor-sub mb-4 mb-md-5">and many more!</p>


                        <div className="text-center text-md-start">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfucKmPeebypjOA3dC8anxgCyrM37nRYv1RxbPvuQSppRNVNg/viewform?usp=sf_link" target="_blank" rel="noreferrer" className="def btn btn-custom-3 px-5 merchant-btn">APPLY NOW!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}