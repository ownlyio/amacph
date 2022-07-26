import './Events.css'

// images
import artExhibit from '../../img/events/exhibit.jpg'
import artFair from '../../img/events/art_fair.jpg'
import artTalks from '../../img/events/art_talks.jpg'
import coloring from '../../img/events/coloring.jpg'
import musicJam from '../../img/events/music_jam.jpg'
import photowalk from '../../img/events/photowalk.jpg'

export default function Events() {
    return (    
        <section id="events">
            <div className="container">
                <p className="text-center font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-color-4 arvo-bold events-title mb-4">CELEBRATING CREATIVITY</p>
                <p className="text-center font-size-100 font-size-sm-120 font-size-lg-140 text-color-5 events-desc neo-regular mb-5">Join us as we celebrate the creativity of our talented local artists through the following set of events:</p>
                
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <div className="event-item">
                            <div className="events-thumbnail mb-3">
                                <img src={artTalks} alt="Art Talks" className="w-100" />
                            </div>
                            <div className="event-content">
                                <p className="text-start font-size-120 font-size-sm-160 font-size-lg-250 text-white event-item-title">ART TALKS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <div className="event-item">
                            <div className="events-thumbnail mb-3">
                                <img src={artFair} alt="Art Fair" className="w-100" />
                            </div>
                            <div className="event-content">
                                <p className="text-start font-size-120 font-size-sm-160 font-size-lg-250 text-white event-item-title">ART FAIR</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <div className="event-item">
                            <div className="events-thumbnail mb-3">
                                <img src={artExhibit} alt="Art Exhibit" className="w-100" />
                            </div>
                            <div className="event-content">
                                <p className="text-start font-size-120 font-size-sm-160 font-size-lg-250 text-white event-item-title">ART EXHIBIT</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3 mb-lg-0">
                        <div className="event-item">
                            <div className="events-thumbnail mb-3">
                                <img src={photowalk} alt="Photowalk" className="w-100" />
                            </div>
                            <div className="event-content">
                                <p className="text-start font-size-120 font-size-sm-160 font-size-lg-250 text-white event-item-title">PHOTOWALK</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3 mb-lg-0">
                        <div className="event-item">
                            <div className="events-thumbnail mb-3">
                                <img src={coloring} alt="Coloring for Kids" className="w-100" />
                            </div>
                            <div className="event-content">
                                <p className="text-start font-size-120 font-size-sm-160 font-size-lg-250 text-white event-item-title">COLORING FOR KIDS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="event-item">
                            <div className="events-thumbnail mb-3">
                                <img src={musicJam} alt="MUSIC JAM" className="w-100" />
                            </div>
                            <div className="event-content">
                                <p className="text-start font-size-120 font-size-sm-160 font-size-lg-250 text-white event-item-title">MUSIC JAM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-5 mb-md-0">
                    <a href="/event-details" rel="noreferrer" className="def btn btn-custom-2 py-2 px-4 mt-4 fw-bold">EVENT DETAILS</a>
                </div>
            </div>
        </section>
    )
}