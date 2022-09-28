import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './App.css'

// components
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import PastAMAC from './components/PastAMAC/PastAMAC'
import Events from './components/Events/Events'
import Speakers from './components/Speakers/Speakers'
import ApplyTicket from './components/ApplyTicket/ApplyTicket'
import Exhibit from './components/Exhibit/Exhibit'
import ApplyMerchant from './components/ApplyMerchant/ApplyMerchant'
import Sponsors from './components/Sponsors/Sponsors'
import ApplySponsor from './components/ApplySponsor/ApplySponsor'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'

// pages
import EventDetails from './pages/EventDetails/EventDetails'

// modals
import RegisterModal from './components/_Modals/RegisterModal'
import PromptModal from './components/_Modals/PromptModal'

function App() {
    const [state, setState] = useState({
        maxTickets: 200,
        isLoading: false,
        isSubmitting: false,
        isSoldOut: false,
        result: false,
        resultMsg: "You have successfully registered!",
    })

    const [showRegister, setShowRegister] = useState(false)
    const handleCloseRegister = () => setShowRegister(false)
    const handleShowRegister = () => setShowRegister(true)
    const [showResult, setShowResult] = useState(false)
    const handleCloseResult = () => setShowResult(false)
    const handleShowResult = () => setShowResult(true)

    // state updater
    const _setState = (name, value) => {
        setState(prevState => ({ ...prevState, [name]: value }))
    }

    const availableTickets = async () => {
        _setState("isLoading", true)
        axios.get('https://ownly.market/api/amac-verified-registrants-count')
            .then(res => {
                _setState("isLoading", false)

                if (res.status === 200) {
                    const count = res.data.count

                    if (count === state.maxTickets) {
                        _setState("isSoldOut", true)
                        _setState("result", false)
                        _setState("resultMsg", "Sorry. The tickets for the art talks are now SOLD OUT, but you may still join us at the event venue for other activities.")
                        _setState("isSubmitting", false)
                        handleShowResult()
                    } else {
                        handleShowRegister()
                    }
                } else {
                    _setState("result", false)
                    _setState("resultMsg", "Network connection error. Please try again.")
                    _setState("isSubmitting", false)
                    handleShowResult()
                }
            })
            .catch(error => {
                _setState("result", false)
                _setState("resultMsg", error.message)
                _setState("isSubmitting", false)
                handleShowResult()
            })
    }

    const submitForm = e => {
        e.preventDefault()

        _setState("isSubmitting", true)

        const data = new FormData()
        data.append("firstname", document.getElementById('fname').value)
        data.append("lastname", document.getElementById('lname').value)
        data.append("contact_number", document.getElementById('contact_no').value)
        data.append("email", document.getElementById('email').value)
        data.append("address", document.getElementById('address').value)
        data.append("shirt", document.getElementById('shirt').value)
        data.append("organization", document.getElementById('organization').value)
        data.append("payment", document.getElementById('payment').files[0])
        
        axios.post("https://ownly.market/api/amac-register", data)
            .then(res => {
                if (res.status === 200) {
                    _setState("result", true)
                    _setState("resultMsg", "You have successfully registered! Please wait for our email confirmation together with the ticket number to be presented on the event registration.")
                    _setState("isSubmitting", false)
                    handleShowResult()

                    // clear form
                    document.getElementById("ticket-form").reset();
                } else {
                    _setState("result", false)
                    _setState("resultMsg", "Something went wrong. Please try again in a while.")
                    _setState("isSubmitting", false)
                    handleShowResult()
                }
            })
            .catch(error => {
                _setState("result", false)
                _setState("resultMsg", error.message)
                _setState("isSubmitting", false)
                handleShowResult()
            })
    }

    return (
        <>
            <Router basename={process.env.PUBLIC_URL}>
                <Navbar isLoading={state.isLoading} showRegister={availableTickets} />
                <Switch>
                    <Route exact path="/">
                        <Banner isLoading={state.isLoading} showRegister={availableTickets} />
                        <About />
                        <PastAMAC />
                        <Events />
                        <Speakers />
                        <ApplyTicket isLoading={state.isLoading} isSoldOut={state.isSoldOut} showRegister={availableTickets} />
                        <Exhibit />
                        <ApplyMerchant />
                        <Sponsors />
                        <ApplySponsor />
                        <FAQ showRegister={availableTickets} />
                    </Route>
                    <Route exact path="/event-details">
                        <EventDetails state={state} showRegister={availableTickets} />
                    </Route>
                </Switch>
                <Footer />
            </Router>

            {/* ----------------------------------------- MODALS ---------------------------------------- */}
            {/* Register */}
            <RegisterModal registerModal={showRegister} closeRegister={handleCloseRegister} isSubmitting={state.isSubmitting} submitForm={submitForm} />
            {/* Result */}
            <PromptModal resultModal={showResult} closeResult={handleCloseResult} result={state.result} resultMsg={state.resultMsg} />
        </>
    );
}

export default App
