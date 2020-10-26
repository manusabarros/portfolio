import React, { useRef } from "react";
import "./App.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Technologies from "./components/technologies/Technologies";

const scrollBehavior = { behavior: "smooth" };

const App = () => {
    const home = useRef(undefined as any);
    const about = useRef(undefined as any);
    const services = useRef(undefined as any);
    const technologies = useRef(undefined as any);
    const contact = useRef(undefined as any);

    const goTo = (link: any) => {
        switch (link) {
            case "HOME":
                home.current.scrollIntoView(scrollBehavior);
                break;
            case "ABOUT":
                about.current.scrollIntoView(scrollBehavior);
                break;
            case "SERVICES":
                home.current.scrollIntoView(scrollBehavior);
                break;
            case "TECHNOLOGIES":
                home.current.scrollIntoView(scrollBehavior);
                break;
            case "CONTACT":
                home.current.scrollIntoView(scrollBehavior);
                break;
        }
    };

    return (
        <div className="App">
            <Header onGoTo={goTo} />
            <main>
                <Home ref={home} />
                <About ref={about} />
                <Services ref={services} />
                <Technologies ref={technologies} />
                <Contact ref={contact} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
