import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RootPage from "./pages/root/RootPage";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ServicesPage from "./pages/services/ServicesPage";
import TechnologiesPage from "./pages/technologies/TechnologiesPage";
import ContactPage from "./pages/contact/ContactPage";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/home">
                        <RootPage>
                            <HomePage />
                        </RootPage>
                    </Route>
                    <Route exact path="/about">
                        <RootPage>
                            <AboutPage />
                        </RootPage>
                    </Route>
                    <Route exact path="/services">
                        <RootPage>
                            <ServicesPage />
                        </RootPage>
                    </Route>
                    <Route exact path="/technologies">
                        <RootPage>
                            <TechnologiesPage />
                        </RootPage>
                    </Route>
                    <Route exact path="/contact">
                        <RootPage>
                            <ContactPage />
                        </RootPage>
                    </Route>
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
