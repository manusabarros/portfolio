import styles from "./Footer.module.scss";
import { forwardRef } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Footer = forwardRef((props: any, ref: any) => {
    const { t } = useTranslation();

    return (
        <footer ref={ref} className={styles.Footer}>
            <div>
                <div>
                    <p dangerouslySetInnerHTML={{ __html: t("MORE_ABOUT_ME") }}></p>
                    <div>
                        <a href="mailto:sabarros.manuel@gmail.com">
                            <span className={styles.email}>
                                <Image src="/assets/email-white.png" alt="email" layout="fill" />
                            </span>
                            <span className={styles.email}>
                                <Image src="/assets/email-orange.png" alt="email" layout="fill" />
                            </span>
                            sabarros.manuel@gmail.com
                        </a>
                    </div>
                </div>
                <div>
                    <p>{t("FIND_ME")}</p>
                    <div>
                        <a href="https://github.com/manusabarros" target="_blank" rel="noopener noreferrer">
                            <span className={styles.github}>
                                <Image src="/assets/github-white.png" alt="github" layout="fill" />
                            </span>
                            <span className={styles.github}>
                                <Image src="/assets/github-orange.png" alt="github" layout="fill" />
                            </span>
                            @manusabarros
                        </a>
                    </div>
                    <div>
                        <a href="https://linkedin.com/in/manuel-sabarros" target="_blank" rel="noopener noreferrer">
                            <span className={styles.linkedin}>
                                <Image src="/assets/linkedin-white.png" alt="linkedin" layout="fill" />
                            </span>
                            <span className={styles.linkedin}>
                                <Image src="/assets/linkedin-orange.png" alt="linkedin" layout="fill" />
                            </span>
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
