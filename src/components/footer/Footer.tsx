import React, { forwardRef, useEffect, useRef, useState } from "react";
import "./Footer.scss";
import githubWhite from "../../assets/github-white.png";
import githubOrange from "../../assets/github-orange.png";
import emailWhite from "../../assets/email-white.png";
import emailOrange from "../../assets/email-orange.png";
import linkedinWhite from "../../assets/linkedin-white.png";
import linkedinOrange from "../../assets/linkedin-orange.png";

const Footer = forwardRef((props: any, ref: any) => {
    const [githubImage, setGithubImage] = useState(githubWhite);
    const [emailImage, setEmailImage] = useState(emailWhite);
    const [linkedinImage, setLinkedinImage] = useState(linkedinWhite);
    const githubRef = useRef<HTMLAnchorElement | null>(null);
    const emailRef = useRef<HTMLAnchorElement | null>(null);
    const linkedinRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        if (githubRef.current && emailRef.current && linkedinRef.current) {
            githubRef.current.addEventListener("mouseover", () => setGithubImage(githubOrange));
            githubRef.current.addEventListener("mouseout", () => setGithubImage(githubWhite));
            emailRef.current.addEventListener("mouseover", () => setEmailImage(emailOrange));
            emailRef.current.addEventListener("mouseout", () => setEmailImage(emailWhite));
            linkedinRef.current.addEventListener("mouseover", () => setLinkedinImage(linkedinOrange));
            linkedinRef.current.addEventListener("mouseout", () => setLinkedinImage(linkedinWhite));
        }
    }, []);

    return (
        <footer ref={ref}>
            <div>
                <div>
                    <a ref={githubRef} href="https://github.com/manusabarros" target="_blank" rel="noopener noreferrer">
                        <img src={githubImage} alt="github" className="github" />
                        @manusabarros
                    </a>
                </div>
                <div>
                    <a ref={emailRef} href="mailto:sabarros.manuel@gmail.com">
                        <img src={emailImage} alt="email" className="email" />
                        sabarros.manuel@gmail.com
                    </a>
                </div>
                <div>
                    <a ref={linkedinRef} href="https://linkedin.com/in/manuel-sabarros" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinImage} alt="linkedin" className="linkedin" />
                        /in/manuel-sabarros
                    </a>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
