import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

// components
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Speakers from './components/Speakers/Speakers'
import ApplyTicket from './components/ApplyTicket/ApplyTicket'
import ApplyMerchant from './components/ApplyMerchant/ApplyMerchant'
import ApplySponsor from './components/ApplySponsor/ApplySponsor'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'

// pages components

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Navbar />
                <Route exact path="/">
                    <Banner />
                    <About />
                    <Speakers />
                    <ApplyTicket />
                    <ApplyMerchant />
                    <ApplySponsor />
                    <FAQ />
                </Route>
                <Footer />
            </Switch>
        </Router>
    );
}

export default App
