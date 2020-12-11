import React, { forwardRef } from "react";
import "./Footer.scss";
import githubWhite from "../../assets/github-white.svg";
import githubOrange from "../../assets/github-orange.svg";
import emailWhite from "../../assets/email-white.svg";
import emailOrange from "../../assets/email-orange.svg";

const Footer = forwardRef((props: any, ref: any) => {
    return (
        <footer ref={ref}>
            <div>
                <div>
                    <a href="https://github.com/manusabarros" target="_blank" rel="noopener noreferrer">
                        <img src={githubWhite} alt="github"/>@manusabarros
                    </a>
                </div>
                <div>
                    <a href="mailto:sabarros.manuel@gmail.com">
                        <img src={emailWhite} alt="email"/>sabarros.manuel@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
