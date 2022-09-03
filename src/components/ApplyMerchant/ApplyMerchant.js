import './ApplyMerchant.css'

import merchant from '../../img/pictures/merchant.jpg'

export default function ApplyMerchant() {
    return (
        <section id="amac-apply-merchant" className="background-image-cover" style={{"backgroundImage": `url(${merchant})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <p className="text-center text-md-start font-size-lg-280 text-color-1 arvo-bold merchant-title mb-4">APPLY AS MERCHANT</p>
                        <p className="text-center text-md-start font-size-lg-140 text-white merchant-sub mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="merchant-gform">
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfPgYfe66J7d4JSqj3RmyraX5mLahxVUcWLJ7ImDyftvccNOQ/viewform?embedded=true" width="640" height="720" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}