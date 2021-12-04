import styles from "./index.module.scss";
import { useEffect, useRef, useState } from "react";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Header, { Links } from "../components/header/Header";
import Home from "../components/home/Home";
import Work from "../components/work/Work";
import Skills from "../components/skills/Skills";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export enum Colors {
    WHITE = "#fffcf2",
    BLACK = "#252422",
    DARKGREY = "#55504a",
    LIGHTGREY = "#b9b2a4",
    ORANGE = "#eb5e28",
}

const scrollBehavior: ScrollIntoViewOptions = { behavior: "smooth" };

const Index = () => {
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

    const contact = () => {
        if (footerRef.current) footerRef.current.scrollIntoView(scrollBehavior);
    };

    const getCurrentScroll = () => window.pageYOffset || document.documentElement.scrollTop;

    const verifyHeaderColor = () => {
        const scroll = getCurrentScroll();
        if (aboutRef.current && workRef.current && skillsRef.current && footerRef.current) {
            const pxTolerance = 1;
            if (scroll < aboutRef.current.offsetTop - pxTolerance) setHeaderColor(Colors.WHITE);
            else if (scroll < workRef.current.offsetTop - pxTolerance) setHeaderColor(Colors.ORANGE);
            else if (scroll < skillsRef.current.offsetTop - pxTolerance) setHeaderColor(Colors.WHITE);
            else if (scroll < footerRef.current.offsetTop - pxTolerance) setHeaderColor(Colors.ORANGE);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", verifyHeaderColor);
        window.addEventListener("resize", verifyHeaderColor);
    }, []);

    return (
        <>
            <Head>
                <title>Manu Sabarrós</title>
                <meta name="author" content="Manuel Sabarrós" />
                <meta name="description" content="Manu Sabarrós' Portfolio. Software Developer based in Argentina" />
            </Head>
            <div className={styles.Index}>
                <Header onGoTo={goTo} color={headerColor} />
                <main>
                    <Home ref={homeRef} />
                    <About ref={aboutRef} contact={contact} />
                    <Work ref={workRef} />
                    <Skills ref={skillsRef} />
                </main>
                <Footer ref={footerRef} />
            </div>
        </>
    );
};

export default Index;

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale)) } });
