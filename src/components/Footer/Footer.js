import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

export default function Footer() {
    return (
        <footer id="amac-footer" className="bg-color-2">
            <div className="container">
                <div className="footer-icons d-flex justify-content-center align-items-center mb-4">
                    <div className="footer-icon-item mx-2">
                        <a className="btn footer-icon-link" href="#" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="text-white" icon={faFacebookF} size="md" />
                        </a>
                    </div>
                    <div className="footer-icon-item mx-2">
                        <a className="btn footer-icon-link" href="#" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="text-white" icon={faTwitter} size="md" />
                        </a>
                    </div>
                    <div className="footer-icon-item mx-2">
                        <a className="btn footer-icon-link" href="#" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="text-white" icon={faInstagram} size="md" />
                        </a>
                    </div>
                </div>

                <p className="text-center font-size-lg-110 text-white mb-0">Copyright &copy; 2022 Albay Multimedia Arts Convention</p>
            </div>
        </footer>
    )
}