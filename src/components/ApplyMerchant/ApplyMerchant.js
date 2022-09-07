import './ApplyMerchant.css'

import merchant from '../../img/pictures/merchant.jpg'
import merchant1 from '../../img/pictures/merchant-pic.jpg'

export default function ApplyMerchant() {
    return (
        <section id="merchant" className="background-image-cover" style={{"backgroundImage": `url(${merchant})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 order-2 order-md-1">
                        <p className="text-center text-md-start font-size-sm-150 font-size-md-200 font-size-lg-280 text-color-1 arvo-bold merchant-title mb-4">APPLY AS MERCHANT</p>
                        <p className="text-center text-md-start font-size-sm-100 font-size-md-120 font-size-lg-140 text-white merchant-sub mb-sm-4 mb-md-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                        <div className="text-center text-md-start">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfucKmPeebypjOA3dC8anxgCyrM37nRYv1RxbPvuQSppRNVNg/viewform?usp=sf_link" target="_blank" rel="noreferrer" className="def btn btn-custom-2 px-5 merchant-btn">APPLY NOW!</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-1 order-md-2 mb-sm-5 mb-md-0">
                        <div className="merchant-img">
                            <img src={merchant1} alt="Merchant of AMAC" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}