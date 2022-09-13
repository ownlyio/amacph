import './EventDetails.css'

// images
import artExhibit from '../../img/events/art_exhibit1.jpg'
import artFair from '../../img/events/art_fair1.jpg'
import artTalks from '../../img/events/art_talks1.jpg'
import coloring from '../../img/events/coloring1.jpg'
import musicJam from '../../img/events/music_jam1.jpg'
import photowalk from '../../img/events/photowalk1.jpg'

import tpt from '../../img/sponsors/tpt.png'

export default function EventDetails({ state, showRegister }) {
    return (
        <>
            <section id="art-schedule">
                <div className="container">
                    <div className="schedule-wrap d-flex justify-content-center align-items-center flex-column">
                        <p className="text-center font-size-130 font-size-sm-160 font-size-md-200 font-size-lg-280 text-white arvo-bold schedule-title mt-lg-5 mb-2">AMAC 2022 EVENT DETAILS</p>
                        <p className="font-size-100 font-size-sm-120 font-size-md-150 font-size-lg-180 neo-bold text-center text-white mb-5 schedule-sub">October 8-9, 2022 | Ayala Malls Legazpi</p>
                    </div>
                    <div className="row align-items-start">
                        <div className="col-12 col-md-2 col-lg-3"></div>
                        <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
                            <p className="font-size-100 font-size-sm-120 font-size-md-150 font-size-lg-180 arvo-bold text-center text-white mb-4">DAY 01</p>
                            <ul className="schedule-list">
                                <li className="font-size-100 font-size-sm-120 font-size-lg-140 text-white neo-regular my-2">ART FAIR</li>
                                <li className="font-size-100 font-size-sm-120 font-size-lg-140 text-white neo-regular my-2">ART EXHIBIT</li>
                                <li className="font-size-100 font-size-sm-120 font-size-lg-140 text-white neo-regular my-2">PHOTOWALK</li>
                                <li className="font-size-100 font-size-sm-120 font-size-lg-140 text-white neo-regular my-2">COLORING FOR KIDS</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <p className="font-size-100 font-size-sm-120 font-size-md-150 font-size-lg-180 arvo-bold text-center text-white mb-4">DAY 02</p>
                            <ul className="schedule-list">
                                <li className="font-size-100 font-size-sm-120 font-size-lg-140 text-white neo-regular my-2">ART FAIR</li>
                                <li className="font-size-100 font-size-sm-120 font-size-lg-140 text-white neo-regular my-2">ART EXHIBIT</li>
                                <li className="font-size-100 font-size-sm-120 font-size-lg-140 text-white neo-regular my-2">ART TALKS</li>
                                <li className="font-size-100 font-size-sm-120 font-size-lg-140 text-white neo-regular my-2">MUSIC JAM &amp; OPEN MIC</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-2 col-lg-3"></div> 
                    </div>
                </div>
            </section>
            <section className="art-sections background-image-cover" id="art-fair" style={{"backgroundImage": `url(${artFair})`}}>
                <div className="container h-100">
                    <div className="row flex-column justify-content-between h-100">
                        <p className="text-center text-md-start font-size-180 font-size-md-250 font-size-lg-320 text-white arvo-bold schedule-title mb-2">ART FAIR</p>
                        <div className="text-center text-md-start">
                            <a href="https://forms.gle/RuBfnskRRLHSy3Zw7" target="_blank" rel="noreferrer" className="def btn btn-custom-2 px-5">APPLY AS MERCHANT</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="art-sections background-image-cover" id="art-talks" style={{"backgroundImage": `url(${artTalks})`}}>
                <div className="container h-100">
                    <div className="row flex-column justify-content-between h-100">
                        <p className="text-center text-md-start font-size-180 font-size-md-250 font-size-lg-320 text-white arvo-bold schedule-title mb-2">ART TALKS</p>
                        <div className="text-center text-md-start">
                            <button onClick={showRegister} className="def btn btn-custom-2 px-5" disabled={state.isSoldOut}>{state.isSoldOut ? "SOLD OUT" : "BUY TICKETS"}</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="art-sections background-image-cover position-relative" id="photowalk" style={{"backgroundImage": `url(${photowalk})`}}>
                <div className="container h-100">
                    <div className="row flex-column justify-content-between h-100">
                        <p className="text-center text-md-start font-size-180 font-size-md-250 font-size-lg-320 text-white arvo-bold schedule-title mb-2">PHOTOWALK</p>
                        <div className="tpt-wrap-desktop d-block d-md-none">
                            <div className="tpt-logo mx-auto mb-2">
                                <img src={tpt} alt="TPT logo" className="w-100" />
                            </div>
                            <p className="text-center font-size-100 text-white neo-regular">TARA PHOTOWALK TAYO</p>
                        </div>
                        <div className="text-center text-md-start">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScQ8iqcDUC5ld9jtWiXudTX7IsvgraWyYbzouhCIhpuEoFnGA/viewform?fbclid=IwAR1wh3OhwUkyxS_0QapnIpfzod4V_Edn5e6LMBstflnD1ypyRO6_A9d8Trk" target="_blank" rel="noreferrer" className="def btn btn-custom-2 px-5">PRE-REGISTER</a>
                        </div>
                    </div>
                </div>

                <div className="tpt-wrap d-none d-md-block">
                    <div className="tpt-logo mx-auto mb-2">
                        <img src={tpt} alt="TPT logo" className="w-100" />
                    </div>
                    <p className="text-center font-size-100 text-white neo-regular">TARA PHOTOWALK TAYO</p>
                </div>
            </section>
            <section className="art-sections background-image-cover" id="art-exhibition" style={{"backgroundImage": `url(${artExhibit})`}}>
                <div className="container h-100">
                    <div className="row flex-column justify-content-between h-100">
                        <p className="text-center text-md-start font-size-180 font-size-md-250 font-size-lg-320 text-white arvo-bold schedule-title mb-2">ART EXHIBITION</p>
                        <div className="text-center text-md-start">
                            {/* <a href="#" target="_blank" rel="noreferrer" className="def btn btn-custom-2 px-5">REGISTRATION TBA</a> */}
                            <button type="button" className="def btn btn-custom-2 px-5">REGISTRATION TBA</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="art-sections background-image-cover" id="coloring" style={{"backgroundImage": `url(${coloring})`}}>
            <div className="container h-100">
                    <div className="row flex-column justify-content-between h-100">
                        <p className="text-center text-md-start font-size-180 font-size-md-250 font-size-lg-320 text-white arvo-bold schedule-title mb-2">COLORING FOR KIDS</p>
                        <div className="text-center text-md-start">
                            {/* <a href="#" target="_blank" rel="noreferrer" className="def btn btn-custom-2 px-5">REGISTRATION TBA</a> */}
                            <button type="button" className="def btn btn-custom-2 px-5">REGISTRATION TBA</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="art-sections background-image-cover" id="music-jam" style={{"backgroundImage": `url(${musicJam})`}}>
                <div className="container h-100">
                    <div className="row flex-column justify-content-between h-100">
                        <p className="text-center text-md-start font-size-180 font-size-md-250 font-size-lg-320 text-white arvo-bold schedule-title mb-2">MUSIC JAM &amp; OPEN MIC</p>
                        <div className="text-center text-md-start">
                            {/* <a href="#" target="_blank" rel="noreferrer" className="def btn btn-custom-2 px-5">REGISTRATION TBA</a> */}
                            <button type="button" className="def btn btn-custom-2 px-5">REGISTRATION TBA</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}