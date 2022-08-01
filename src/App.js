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
        </Router>
    );
}

export default App
