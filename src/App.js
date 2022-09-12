import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
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
import AMAC17Vid from './components/_Modals/AMAC17Vid'

function App() {
    const [state, setState] = useState({
        maxTickets: 200,
        availableTickets: 200,
        percentageAvailable: 100,
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
    const [showAmacVideo, setShowAmacVideo] = useState(false)
    const handleCloseAmacVideo = () => setShowAmacVideo(false)
    const handleShowAmacVideo = () => setShowAmacVideo(true)

    // state updater
    const _setState = (name, value) => {
        setState(prevState => ({ ...prevState, [name]: value }))
    }

    const computeAvailableTicketsPercent = async () => {
        const verifiedRegistrants = await axios.get('https://ownly.market/api/amac-verified-registrants-count')
        const count = verifiedRegistrants.data.count
        const availableTickets = state.maxTickets - count

        _setState("availableTickets", availableTickets)
        _setState("percentageAvailable", (availableTickets / state.maxTickets) * 100)

        if (count === state.maxTickets) _setState("isSoldOut", true)
    }

    const availableTickets = async () => {
        const verifiedRegistrants = await axios.get('https://ownly.market/api/amac-verified-registrants-count')
        const count = verifiedRegistrants.data.count

        if (count === state.maxTickets) {
            _setState("result", false)
            _setState("resultMsg", "Sorry. The tickets for the art talks are now SOLD OUT, but you may still join us at the event venue for other activities.")
            _setState("isSubmitting", false)
            handleShowResult()
        } else {
            handleShowRegister()
        }
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

    useEffect(() => {
        computeAvailableTicketsPercent()
    }, [])

    return (
        <>
            <Router basename={process.env.PUBLIC_URL}>
                <Navbar showRegister={availableTickets} />
                <Switch>
                    <Route exact path="/">
                        <Banner showRegister={availableTickets} />
                        <About />
                        <PastAMAC showAmacModal={handleShowAmacVideo} />
                        <Events />
                        <Speakers />
                        <ApplyTicket state={state} showRegister={availableTickets} />
                        <ApplyMerchant />
                        <Sponsors />
                        <ApplySponsor />
                        <FAQ />
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
            {/* AMAC Vid */}
            <AMAC17Vid vidModal={showAmacVideo} closeVid={handleCloseAmacVideo} />
        </>
    );
}

export default App
