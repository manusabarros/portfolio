import React from "react";
import "./App.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Technologies from "./components/technologies/Technologies";

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Home/>
                <About/>
                <Services/>
                <Technologies/>
                <Contact/>
            </main>
            <Footer />
        </div>
    );
};

export default App;
