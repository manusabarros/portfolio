import { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./Footer.module.scss";
import githubWhite from "../../assets/github-white.png";
import githubOrange from "../../assets/github-orange.png";
import emailWhite from "../../assets/email-white.png";
import emailOrange from "../../assets/email-orange.png";
import linkedinWhite from "../../assets/linkedin-white.png";
import linkedinOrange from "../../assets/linkedin-orange.png";
import { useTranslation } from "next-i18next";

const Footer = forwardRef((props: any, ref: any) => {
    const { t } = useTranslation();
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
        <footer ref={ref} className={styles.Footer}>
            <div>
                <div>
                    <p dangerouslySetInnerHTML={{ __html: t("MORE_ABOUT_ME") }}></p>
                    <div>
                        <a ref={emailRef} href="mailto:sabarros.manuel@gmail.com">
                            <img src={emailImage} alt="email" className={styles.email} />
                            sabarros.manuel@gmail.com
                        </a>
                    </div>
                </div>
                <div>
                    <p>{t("FIND_ME")}</p>
                    <div>
                        <a ref={githubRef} href="https://github.com/manusabarros" target="_blank" rel="noopener noreferrer">
                            <img src={githubImage} alt="github" className={styles.github} />
                            @manusabarros
                        </a>
                    </div>
                    <div>
                        <a ref={linkedinRef} href="https://linkedin.com/in/manuel-sabarros" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinImage} alt="linkedin" className={styles.linkedin} />
                            /in/manuel-sabarros
                        </a>
                    </div>
                </div>
            </div>
            <span>v{process.env.NEXT_PUBLIC_VERSION}</span>
        </footer>
    );
});

export default Footer;
