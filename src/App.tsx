import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ServicesPage from "./pages/services/ServicesPage";
import ContactPage from "./pages/contact/ContactPage";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/services" component={ServicesPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
