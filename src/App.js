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
               
                <Route exact path="https://deepak-jaiswal138.github.io/Portfolio/" component={Resume}/>
                <Route path="https://deepak-jaiswal138.github.io/Portfolio/resume" component={Resume}/>
                <Route path="https://deepak-jaiswal138.github.io/Portfolio/experiance" component={Experiance}/>
                <Route path="https://deepak-jaiswal138.github.io/Portfolio/contact" component={ContactUs}/>

            </Switch>
            <Footer />
        </div>
        </BrowserRouter>
    )
}

export default App
