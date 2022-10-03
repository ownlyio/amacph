import './Exhibit.css'

// images
import artExhibit from '../../img/events/exhibit1.jpg'

export default function Exhibit() {
    return (    
        <section className="background-image-cover" id="exhibition" style={{"backgroundImage": `url(${artExhibit})`}}>
            <div className="container h-100">
                <div className="row flex-column justify-content-between h-100">
                    <p className="text-center text-md-start font-size-180 font-size-md-250 font-size-lg-320 text-white arvo-bold mb-4">ART EXHIBITION</p>
                    <p className="text-center text-md-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-white exhibit-sub neo-regular mb-3 mx-auto mx-md-0">For this year's art exhibition, we want to take artists to showcase their works in the <a href="https://mustachio.quest" target="_blank" rel="noreferrer" className="link-color-1 neo-regular">metaverse gallery</a> of MustachioVerse. We're partnering with <a href="https://mustachioverse.com" target="_blank" rel="noreferrer" className="link-color-1 neo-regular">MustachioVerse</a> to curate a metaverse exhibition on their platform.</p>
                    <p className="text-center text-md-start font-size-90 font-size-sm-100 font-size-md-120 font-size-lg-140 text-white exhibit-sub neo-regular mb-4 mb-md-5 mx-auto mx-md-0">Just click the button below, fill out the form, and we'll let you know if you're works got accepted.</p>
                    <div className="text-center text-md-start">
                        <button className="def btn btn-custom-2 px-5" disabled={true}>APPLICATION CLOSED</button>
                    </div>
                </div>
            </div>
        </section>
    )
}