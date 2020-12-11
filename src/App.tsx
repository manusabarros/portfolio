import React, { useState, useRef } from "react";
import "./App.scss";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header, { Links } from "./components/header/Header";
import Home from "./components/home/Home";
import Work from "./components/work/Work";
import Skills from "./components/skills/Skills";

export enum Colors {
    WHITE = "#fffcf2",
    BLACK = "#252422",
    DARKGREY = "#55504a",
    LIGHTGREY = "#b9b2a4",
    ORANGE = "#eb5e28",
}

const scrollBehavior: ScrollIntoViewOptions = { behavior: "smooth" };

const App = () => {
    const [headerColor, setHeaderColor] = useState(Colors.WHITE);

    const homeRef = useRef<HTMLElement | null>(null);
    const aboutRef = useRef<HTMLElement | null>(null);
    const workRef = useRef<HTMLElement | null>(null);
    const skillsRef = useRef<HTMLElement | null>(null);
    const footerRef = useRef<HTMLElement | null>(null);

    const goTo = (link: string) => {
        switch (link) {
            case Links.HOME:
                if (homeRef.current) homeRef.current.scrollIntoView(scrollBehavior);
                break;
            case Links.ABOUT:
                if (aboutRef.current) aboutRef.current.scrollIntoView(scrollBehavior);
                break;
            case Links.WORK:
                if (workRef.current) workRef.current.scrollIntoView(scrollBehavior);
                break;
            case Links.SKILLS:
                if (skillsRef.current) skillsRef.current.scrollIntoView(scrollBehavior);
                break;
            case Links.CONTACT:
                if (footerRef.current) footerRef.current.scrollIntoView(scrollBehavior);
                break;
        }
    };

    const getCurrentScroll = () => window.pageYOffset || document.documentElement.scrollTop;

    const verifyHeaderColor = () => {
        const scroll = getCurrentScroll();
        if (aboutRef.current && workRef.current && skillsRef.current && footerRef.current) {
            const pxTolerance = 2;
            if (scroll < aboutRef.current.offsetTop - pxTolerance) setHeaderColor(Colors.WHITE);
            else if (scroll < workRef.current.offsetTop - pxTolerance) setHeaderColor(Colors.ORANGE);
            else if (scroll < skillsRef.current.offsetTop - pxTolerance) setHeaderColor(Colors.WHITE);
            else if (scroll < footerRef.current.offsetTop - pxTolerance) setHeaderColor(Colors.ORANGE);
        }
    };

    window.addEventListener("scroll", verifyHeaderColor);
    window.addEventListener("resize", verifyHeaderColor);

    return (
        <div className="App">
            <Header onGoTo={goTo} color={headerColor} />
            <main>
                <Home ref={homeRef} />
                <About ref={aboutRef} />
                <Work ref={workRef} />
                <Skills ref={skillsRef} />
            </main>
            <Footer ref={footerRef} />
        </div>
    );
};

export default App;
