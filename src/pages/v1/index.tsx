import styles from "./index.module.scss";
import { useEffect, useRef, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Header, { Links } from "@/components/header/Header";
import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Work from "@/components/work/Work";
import Skills from "@/components/skills/Skills";
import Footer from "@/components/footer/Footer";
import { GetStaticProps } from "next";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });

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

    const homeRef = useRef<HTMLElement>();
    const aboutRef = useRef<HTMLElement>();
    const workRef = useRef<HTMLElement>();
    const skillsRef = useRef<HTMLElement>();
    const footerRef = useRef<HTMLElement>();

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
        if (aboutRef.current && workRef.current && skillsRef.current && footerRef.current) {
            const pxTolerance = 1;
            const scroll = getCurrentScroll();
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
                <link rel="canonical" href="https://manusabarros.com/" />
                <meta name="description" content="Manuel Sabarrós' Portfolio. Software Developer based in Portugal" />
                <meta
                    name="keywords"
                    content="Manuel Sabarrós, Manu Sabarrós, software, developer, frontend, front end, front-end, backend, back end, back-end, fullstack, full stack, full-stack, web developer, mobile developer, react developer, react, next js, next.js, react native, node js"
                />

                <meta name="twitter:title" content="Manu Sabarrós" />
                <meta name="twitter:description" content="Manuel Sabarrós' Portfolio. Software Developer based in Portugal" />
                <meta name="twitter:url" content="https://manusabarros.com/" />

                <meta property="og:title" content="Manu Sabarrós" />
                <meta property="og:description" content="Manuel Sabarrós' Portfolio. Software Developer based in Portugal" />
                <meta property="og:url" content="https://manusabarros.com/" />
            </Head>
            <style jsx global>{`
                html {
                    overflow-x: hidden;
                    overflow-y: scroll;
                    overflow-y: overlay;
                    scrollbar-width: thin;
                    scrollbar-color: #55504a #fffcf2;
                }
                
                body {
                    width: 100vw;
                    min-width: 100vw;
                    max-width: 100vw;
                    min-height: 100vh;
                    margin: 0;
                    * {
                        box-sizing: border-box;
                    }
                }
                
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                p {
                    margin: 0;
                }
                
                a,
                a:visited {
                    text-decoration: none;
                }
                
                ::-webkit-scrollbar {
                    width: 10px;
                }
                
                ::-webkit-scrollbar-thumb {
                    background-color: #55504a;
                    box-shadow: inset 0 0 2px #252422;
                    -webkit-box-shadow: inset 0 0 2px #252422;
                }
            `}</style>
            <div className={[styles.Index, montserrat.className].join(" ")}>
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

export const getStaticProps: GetStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale as string)) } });
