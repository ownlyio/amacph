import './FAQ.css'

export default function FAQ() {
    return (
        <section id="faq">
            <div className="container">
                <p className="text-center font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-white arvo-bold faq-title mb-4">FREQUENTLY ASKED QUESTIONS</p>

                <div className="accordion accordion-flush" id="faq-accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-header-1">
                            <button className="font-size-130 font-size-sm-160 accordion-button text-center justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-1">
                                I'm not a designer or artist, can I still attend?
                            </button>
                        </h2>
                        <div id="flush-collapse-1" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div className="accordion-body">
                                <p className="font-size-100 font-size-lg-120">Yes! If you appreciate art, passionate about design and creative at heart, you are very welcome to attend the event. The event is open to everyone!</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-header-2">
                            <button className="font-size-130 font-size-sm-160 accordion-button text-center justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-2">
                                Is my reservation for the event valid until the day of the event?
                            </button>
                        </h2>
                        <div id="flush-collapse-2" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div className="accordion-body">
                                <p className="font-size-100 font-size-lg-120">Slots are only secured once tickets are paid.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-header-3">
                            <button className="font-size-130 font-size-sm-160 accordion-button text-center justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-3">
                                Are tickets transferable?
                            </button>
                        </h2>
                        <div id="flush-collapse-3" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div className="accordion-body">
                                <p className="font-size-100 font-size-lg-120">Yes. If you have the virtual ticket sent on email, the attending participant may use it on event day.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-header-4">
                            <button className="font-size-130 font-size-sm-160 accordion-button text-center justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-4">
                                Can I still purchase tickets on the event day?
                            </button>
                        </h2>
                        <div id="flush-collapse-4" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div className="accordion-body">
                                <p className="font-size-100 font-size-lg-120">If we have not reached our total seats until the day of the event, then yes. But we suggest to secure your tickets the soonest time possible for you to be able to have a secure seat for the event.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-header-5">
                            <button className="font-size-130 font-size-sm-160 accordion-button text-center justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-5">
                                I lost my ticket
                            </button>
                        </h2>
                        <div id="flush-collapse-5" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div className="accordion-body">
                                <p className="font-size-100 font-size-lg-120">SORRY, TICKETS WILL NOT BE REPLACED IF LOST OR STOLEN.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-header-6">
                            <button className="font-size-130 font-size-sm-160 accordion-button text-center justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-6">
                                How to claim my free mint on Mustachio Rascals?
                            </button>
                        </h2>
                        <div id="flush-collapse-6" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div className="accordion-body">
                                <p className="font-size-100 font-size-lg-120">An email will be sent for the next instruction on how to claim it after the event.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-header-7">
                            <button className="font-size-130 font-size-sm-160 accordion-button text-center justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-7">
                                Do i need to register to be able to join AMAC 2022?
                            </button>
                        </h2>
                        <div id="flush-collapse-7" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div className="accordion-body">
                                <p className="font-size-100 font-size-lg-120">Only the ART TALKS will be a paid event.</p>
                                <p className="font-size-100 font-size-lg-120">The rest of the activities of the event are FREE and OPEN TO PUBLIC to celebrate creativity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}