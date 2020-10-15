import React from "react";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Root from "./components/root/Root";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Root/>
            <Footer />
        </div>
    );
};

export default App;
