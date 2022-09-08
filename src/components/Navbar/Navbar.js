import { useState } from "react"
import { Link } from "react-router-dom"
import { bubble as Menu } from "react-burger-menu"
import { HashLink } from "react-router-hash-link"
import './Navbar.css'

import logo from '../../img/amac-logo-1.png'

export default function Navbar(props) {
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
                        <li>
                            <HashLink className="text-color-6 font-size-120" smooth to="#speakers" scroll={el => scrollWithOffset(el)}>SPEAKERS</HashLink>
                        </li>
                        <li>
                            <HashLink className="text-color-6 font-size-120" smooth to="#tickets" scroll={el => scrollWithOffset(el)}>TICKETS</HashLink>
                        </li>
                        <li>
                            <HashLink className="text-color-6 font-size-120" smooth to="#merchant" scroll={el => scrollWithOffset(el)}>MERCHANT</HashLink>
                        </li>
                        <li>
                            <HashLink className="text-color-6 font-size-120" smooth to="#sponsors" scroll={el => scrollWithOffset(el)}>SPONSORS</HashLink>
                        </li>
                        <li>
                            <HashLink className="text-color-6 font-size-120" smooth to="#faq" scroll={el => scrollWithOffset(el)}>FAQ</HashLink>
                        </li>
                        <li>
                            <button className="btn amac-nav-btn btn-custom-2 px-4">
                                BUY TICKETS
                            </button>
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
                        <HashLink smooth to="#speakers" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-color-6 font-size-100 d-block py-3 w-100 text-decoration-none">SPEAKERS</HashLink>
                        <HashLink smooth to="#tickets" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-color-6 font-size-100 d-block py-3 w-100 text-decoration-none">TICKETS</HashLink>
                        <HashLink smooth to="#merchant" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-color-6 font-size-100 d-block py-3 w-100 text-decoration-none">MERCHANT</HashLink>
                        <HashLink smooth to="#sponsors" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-color-6 font-size-100 d-block py-3 w-100 text-decoration-none">SPONSORS</HashLink>
                        <HashLink smooth to="#faq" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-color-6 font-size-100 d-block py-3 w-100 text-decoration-none">FAQ</HashLink>
                        <button type="button" className="btn amac-nav-btn-mobile btn-custom-2 mt-3 px-4 py-3 font-size-220 w-100">
                            BUY TICKETS
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    )
}
