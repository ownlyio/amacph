import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

export default function Footer() {
    return (
        <footer id="amac-footer" className="bg-color-2">
            <div className="container">
                <div className="footer-icons d-flex justify-content-center align-items-center mb-4">
                    <div className="footer-icon-item mx-2">
                        <a className="btn footer-icon-link" href="https://web.facebook.com/amacphilippines" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="text-white" icon={faFacebookF} />
                        </a>
                    </div>
                    <div className="footer-icon-item mx-2">
                        <a className="btn footer-icon-link" href="https://twitter.com/amac_ph" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="text-white" icon={faTwitter} />
                        </a>
                    </div>
                    <div className="footer-icon-item mx-2">
                        <a className="btn footer-icon-link" href="https://www.instagram.com/amacphilippines" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="text-white" icon={faInstagram} />
                        </a>
                    </div>
                </div>

                <p className="text-center font-size-100 font-size-lg-110 text-white mb-0">Copyright &copy; 2022 Albay Multimedia Arts Convention</p>
            </div>
        </footer>
    )
}