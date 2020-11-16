import React, { useState, useRef, useCallback } from "react";
import "./App.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header, { Links } from "./components/header/Header";
import Home from "./components/home/Home";
import Work from "./components/work/Work";
import Skills from "./components/skills/Skills";

export enum Colors {
    WHITE = "#fffcf2",
    BLACK = "#252422",
    DARKGREY = "#403d39",
    LIGHTGREY = "#ccc5b9",
    ORANGE = "#eb5e28"
}

const scrollBehavior: ScrollIntoViewOptions = { behavior: "smooth" };

const App = () => {
    const [headerColor, setHeaderColor] = useState(Colors.WHITE);

    const home = useRef<HTMLElement | null>(null);
    const about = useRef<HTMLElement | null>(null);
    const work = useRef<HTMLElement | null>(null);
    const skills = useRef<HTMLElement | null>(null);
    const contact = useRef<HTMLElement | null>(null);

    const goTo = useCallback((link: any) => {
        switch (link) {
            case Links.HOME:
                if (home.current) home.current.scrollIntoView(scrollBehavior);
                break;
            case Links.ABOUT:
                if (about.current) about.current.scrollIntoView(scrollBehavior);
                break;
            case Links.WORK:
                if (work.current) work.current.scrollIntoView(scrollBehavior);
                break;
            case Links.SKILLS:
                if (skills.current) skills.current.scrollIntoView(scrollBehavior);
                break;
            case Links.CONTACT:
                if (contact.current) contact.current.scrollIntoView(scrollBehavior);
                break;
        }
    }, []);

    const getCurrentScroll = useCallback(() => window.pageYOffset || document.documentElement.scrollTop, []);

    window.addEventListener("scroll", () => {
        const scroll = getCurrentScroll();
        if (about.current && work.current && skills.current && contact.current) {
            if (scroll < about.current.offsetTop - 0.2) setHeaderColor(Colors.WHITE);
            else if (scroll < work.current.offsetTop - 0.2) setHeaderColor(Colors.ORANGE);
            else if (scroll < skills.current.offsetTop - 0.2) setHeaderColor(Colors.WHITE);
            else if (scroll < contact.current.offsetTop - 0.2) setHeaderColor(Colors.ORANGE);
        }
    });

    return (
        <div className="App">
            <Header onGoTo={goTo} color={headerColor} />
            <main>
                <Home ref={home} />
                <About ref={about} />
                <Work ref={work} />
                <Skills ref={skills} />
                <Contact ref={contact} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
