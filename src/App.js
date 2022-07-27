import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Banner from './components/Banner/Banner'
import PastAMAC from './components/PastAMAC/PastAMAC'

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/">
                    <Banner />
                    <PastAMAC />
                </Route>
            </Switch>

            {/* Modal for successful subscription */}
            {/* <Modal show={showSubscribed} onHide={handleCloseSubscribed} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="green" size="6x" icon={faCheckCircle} />
                    </div>
                    <p className="text-center text-lg">Thank you for subscribing!</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseSubscribed}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>  */}

            {/* Modal for error in email */}
            {/* <Modal show={showErrorEmail} onHide={handleCloseErrorEmail} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="red" size="6x" icon={faExclamationCircle} />
                    </div>
                    <p className="text-center text-lg">Please provide a valid email address and try again.</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseErrorEmail}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>  */}
        </Router>
    );
}

export default App
