import React from 'react';
import Navbar from './components/Navbar';
import {Switch,Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Resume from './components/Resume';
import Experiance from './components/Experiance';
import ContactUs from './components/ContactUs';
import '../src/App.css';
import Footer from './components/Footer';


const App = () => {
    return (
        <BrowserRouter>
        <div>
            
            <Navbar />
            <Switch>
               
                <Route exact path="/" component={Resume}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/experiance" component={Experiance}/>
                <Route path="/contact" component={ContactUs}/>

            </Switch>
            <Footer />
        </div>
        </BrowserRouter>
    )
}

export default App
