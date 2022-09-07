import './ApplySponsor.css'

import sponsor from '../../img/pictures/sponsor.jpg'

export default function ApplySponsor() {
    return (
        <section id="amac-apply-sponsor" className="background-image-cover" style={{"backgroundImage": `url(${sponsor})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 order-2 order-md-1">
                        <div className="sponsor-gform">
                            <iframe title="Apply as Sponsor form" src="https://docs.google.com/forms/d/e/1FAIpQLSfPgYfe66J7d4JSqj3RmyraX5mLahxVUcWLJ7ImDyftvccNOQ/viewform?embedded=true" width="640" height="720" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-1 order-md-2">
                        <p className="text-center text-md-start font-size-lg-280 text-color-2 arvo-bold sponsor-title mb-4">BECOME A SPONSOR</p>
                        <p className="text-center text-md-start font-size-lg-140 text-white sponsor-sub mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}