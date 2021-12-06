import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/about";
import Promo from "./components/promo";
import Registration from "./components/registration";
import RegistrationConfirm from "./components/registrationConfirm";
import Footer from "./components/footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/registrationConfirm" component={RegistrationConfirm}/>
                </Switch>
                <Navbar/>
                <Header/>
                <About/>
                <Promo/>
                <Registration/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
