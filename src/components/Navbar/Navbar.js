import { useState } from "react"
import { Link } from "react-router-dom"
import { bubble as Menu } from "react-burger-menu"
import { HashLink } from "react-router-hash-link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

import logo from '../../img/amac-logo-1.png'

export default function Navbar({ isLoading, showRegister }) {
    const [menuOpenState, setMenuOpenState] = useState(false)

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -70; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
        // window.scrollTo({ top: yCoordinate, behavior: 'smooth' }); 
    }

    const handleStateChange = (state) => {
        setMenuOpenState(state.isOpen)
    }

    const closeMenu = () => {
        setMenuOpenState(false)
    }

    const styles = {
        bmBurgerButton: {
            position: 'absolute',
            width: '36px',
            height: '30px',
            right: '20px',
            top: '20px'
        },
        bmBurgerBars: {
            background: '#ffb600'
        },
        bmBurgerBarsHover: {
            background: '#ffa500'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#c83e38'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: 'white',
            padding: '2em 1em',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: 'white'
        },
        bmItemList: {
            color: '#fff',
            padding: '0.8em'
        },
        bmItem: {
            display: 'block',
            lineHeight: '0.8em'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)',
            left: 0
        }
    } 

    return (
        <div id="header">
            <div className="container">
                <div id="amac-nav" className="d-none d-lg-flex justify-content-between align-items-center">
                    <div className="amac-nav-logo">
                        <Link exact="true" to="/">
                            <img src={logo} className="w-100" alt="AMAC Logo" />
                        </Link>
                    </div>
                    <ul className="d-flex justify-content-center align-items-center flex-wrap mb-0 p-0">
                        <li className="main-nav">
                            <HashLink className="text-color-6 font-size-120" smooth to="/#speakers" scroll={el => scrollWithOffset(el)}>SPEAKERS</HashLink>
                        </li>
                        <li className="main-nav">
                            <a href="/event-details" className="btn amac-link">
                                EVENTS
                            </a>
                        </li>
                        <li className="main-nav dropdown-center">
                            <a className="nav-link dropdown-toggle text-color-6 font-size-120" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                GET INVOLVED
                            </a>
                            <ul className="dropdown-menu">
                                <li className="sub-nav my-2"><HashLink className="text-color-6 font-size-110 amac-drop" smooth to="/#apply-merchant" scroll={el => scrollWithOffset(el)}>Become a Merchant</HashLink></li>
                                <li className="sub-nav my-2"><HashLink className="text-color-6 font-size-110 amac-drop" smooth to="/#apply-sponsor" scroll={el => scrollWithOffset(el)}>Become a Sponsor</HashLink></li>
                            </ul>
                        </li>
                        <li className="main-nav">
                            <HashLink className="text-color-6 font-size-120" smooth to="/#tickets" scroll={el => scrollWithOffset(el)}>TICKETS</HashLink>
                        </li>
                        <li className="main-nav">
                            <HashLink className="text-color-6 font-size-120" smooth to="/#partners" scroll={el => scrollWithOffset(el)}>PARTNERS</HashLink>
                        </li>
                        <li className="main-nav">
                            <HashLink className="text-color-6 font-size-120" smooth to="/#faq" scroll={el => scrollWithOffset(el)}>FAQ</HashLink>
                        </li>
                        <li className="main-nav">
                            { isLoading ? (
                                <button className="btn amac-nav-btn btn-custom-2 px-4" disabled>
                                    <FontAwesomeIcon icon={faSpinner} spin />
                                </button>
                            ) : (
                                <button onClick={showRegister} type="button" className="btn amac-nav-btn btn-custom-2 px-4">
                                    BUY TICKETS
                                </button>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="d-lg-none align-self-end">
                    <Menu right styles={styles}
                        isOpen={menuOpenState}
                        onStateChange={(state) => handleStateChange(state)}
                    >
                        <div className="amac-nav-logo-mobile">
                            <Link exact="true" to="/">
                                <img src={logo} className="w-100" alt="AMAC Logo" />
                            </Link>
                        </div>
                        <HashLink smooth to="/#speakers" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-color-6 font-size-90 d-block py-3 w-100 text-decoration-none">SPEAKERS</HashLink>
                        <a href="/event-details" className="btn text-start px-0 py-3 amac-link-mobile">EVENTS</a>
                        <HashLink smooth to="/#tickets" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-color-6 font-size-90 d-block py-3 w-100 text-decoration-none">TICKETS</HashLink>
                        <HashLink smooth to="/#apply-merchant" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-color-6 font-size-90 d-block py-3 w-100 text-decoration-none">BECOME A MERCHANT</HashLink>
                        <HashLink smooth to="/#apply-sponsor" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-color-6 font-size-90 d-block py-3 w-100 text-decoration-none">BECOME A SPONSOR</HashLink>
                        <HashLink smooth to="/#partners" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-color-6 font-size-90 d-block py-3 w-100 text-decoration-none">PARTNERS</HashLink>
                        <HashLink smooth to="/#faq" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-color-6 font-size-90 d-block py-3 w-100 text-decoration-none">FAQ</HashLink>
                        { isLoading ? (
                            <button className="btn amac-nav-btn-mobile btn-custom-2 mt-3 px-4 py-3 font-size-180 w-100" disabled>
                                <FontAwesomeIcon icon={faSpinner} spin />
                            </button>
                        ) : (
                            <button onClick={showRegister} type="button" className="btn amac-nav-btn-mobile btn-custom-2 mt-3 px-4 py-3 font-size-180 w-100">
                                BUY TICKETS
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    )
}
