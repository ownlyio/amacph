import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { faTwitter, faInstagram, faLinkedinIn, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import ViewPhoto from './ViewPhoto'
import './Modals.css'

export default function SpeakerProfile({ profileModal, closeProfile, profile }) {
    const [worksImg, setWorksImg] = useState(profile.works[0])
    const [worksAlt, setWorksAlt] = useState("")
    const [showImage, setShowImage] = useState(false)
    const handleCloseImage = () => setShowImage(false)
    const handleShowImage = (url, altText) => {
        setWorksImg(url)
        setWorksAlt(altText)
        setShowImage(true)
    }

    return (
        <Modal show={profileModal} onHide={closeProfile} backdrop="static" keyboard={false} size="lg" centered>
            <Modal.Body className="p-0 position-relative">
                <div className="speaker-profile">
                    <div className="speaker-cover-photo no-rounded d-flex justify-content-center align-items-center background-image-cover" style={{ "backgroundImage": `url(${profile.backgroundImage})` }}>
                        <div className="speaker-dp">
                            <img src={profile.profilePhoto} alt={profile.name} className="w-100" />
                        </div>
                    </div>

                    <div className="speaker-content p-3">
                        <div className="speaker-primer mb-4">
                            <p className="text-start font-size-100 font-size-md-110 font-size-lg-120 text-color-6 arvo-bold speaker-name mb-1">{profile.name}</p>
                            <p className="text-start font-size-90 font-size-md-110 font-size-lg-120 text-color-5 arvo-italic speaker-desig mb-1">{profile.designation}</p>
                            <p className="text-start font-size-90 font-size-md-110 font-size-lg-120 text-color-5 arvo-italic speaker-org mb-1"><b>Affiliation/Brand:</b> {profile.organization}</p>
                        </div>
                        <div className="speaker-details">
                            { profile.description.map((x, i) => (
                                <p key={i} className="text-start font-size-80 font-size-md-90 font-size-lg-110 text-color-6 speaker-det mb-3">{x}</p>
                            ))}
                        </div>
                        <div className="speaker-artworks mt-4 mb-4">
                            <p className="text-center font-size-80 font-size-md-90 font-size-lg-110 text-color-6 arvo-bold speaker-det mb-3">Sample Artworks</p>
                            <div className="d-flex flex-wrap justify-content-center">
                                { profile.works.map((x, i) => (
                                    <div key={i} onClick={() => handleShowImage(x, i)} className="speakers-det-thumbnail mb-3 mx-0 mx-sm-3 cursor-pointer">
                                        <img src={x} alt={`Artwork #${i}`} className="w-100" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="speaker-socmed d-flex align-items-center justify-content-center">
                            <a href={profile.twitter} target="_blank" rel="noreferrer" className="mx-3 link-color-2 speaker-socmed-icon">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href={profile.instagram} target="_blank" rel="noreferrer" className="mx-3 link-color-2 speaker-socmed-icon">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            {
                                profile.linkedin && 
                                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="mx-3 link-color-2 speaker-socmed-icon">
                                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                                    </a>
                            }
                            {
                                profile.behance && 
                                    <a href={profile.behance} target="_blank" rel="noreferrer" className="mx-3 link-color-2 speaker-socmed-icon">
                                        <FontAwesomeIcon icon={faBehance} size="2x" />
                                    </a>
                            }
                            {
                                profile.website && 
                                    <a href={profile.website} target="_blank" rel="noreferrer" className="mx-3 link-color-2 speaker-socmed-icon">
                                        <FontAwesomeIcon icon={faGlobe} size="2x" />
                                    </a>
                            }
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={closeProfile} className="btn px-5 ticket-cancel-btn">CLOSE</button>
            </Modal.Footer>

            <ViewPhoto picModal={showImage} closePic={handleCloseImage} picture={worksImg} altText={worksAlt} />
        </Modal>
    )
}