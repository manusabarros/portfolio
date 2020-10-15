import React from "react";
import "./Root.scss";
import Home from "../home/Home";
import About from "../about/About";
import Services from "../services/Services";
import Technologies from "../technologies/Technologies";
import Contact from "../contact/Contact";

const Root = () => {
    return (
        <div className="Root">
            <Home/>
            <About/>
            <Services/>
            <Technologies/>
            <Contact/>
        </div>
    );
};

export default Root;
