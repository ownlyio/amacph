import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

// components
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Speakers from './components/Speakers/Speakers'
import ApplyTicket from './components/ApplyTicket/ApplyTicket'
import ApplyMerchant from './components/ApplyMerchant/ApplyMerchant'
import Sponsors from './components/Sponsors/Sponsors'
import ApplySponsor from './components/ApplySponsor/ApplySponsor'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'

// pages
import EventDetails from './pages/EventDetails/EventDetails'

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Banner />
                    <About />
                    <Speakers />
                    <ApplyTicket />
                    <ApplyMerchant />
                    <Sponsors />
                    <ApplySponsor />
                    <FAQ />
                </Route>
                <Route exact path="/event-details">
                    <EventDetails />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App
