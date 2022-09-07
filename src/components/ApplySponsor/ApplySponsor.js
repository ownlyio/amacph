import './ApplySponsor.css'

import sponsor from '../../img/pictures/sponsor.jpg'
import sponsor1 from '../../img/pictures/sponsor-pic.jpg'

export default function ApplySponsor() {
    return (
        <section id="amac-apply-sponsor" className="background-image-cover" style={{"backgroundImage": `url(${sponsor})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 mb-sm-5">
                        <div className="apply-sponsor-img">
                            <img src={sponsor1} alt="AMAC Crowd" className="w-100" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className="text-center text-md-start font-size-sm-150 font-size-md-200 font-size-lg-280 text-color-2 arvo-bold sponsor-title mb-4">BECOME A SPONSOR</p>
                        <p className="text-center text-md-start font-size-sm-100 font-size-md-120 font-size-lg-140 text-white sponsor-sub mb-sm-4 mb-md-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                        <div className="text-center text-md-start">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfucKmPeebypjOA3dC8anxgCyrM37nRYv1RxbPvuQSppRNVNg/viewform?usp=sf_link" target="_blank" rel="noreferrer" className="def btn btn-custom-3 px-5 merchant-btn">APPLY NOW!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}