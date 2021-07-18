import { forwardRef, useState, useEffect, useRef } from "react";
import styles from "./Work.module.scss";
import redirectOrange from "../../assets/redirect-orange.png";
import redirectDarkGrey from "../../assets/redirect-darkgrey.png";
import { useTranslation } from "next-i18next";

const Work = forwardRef((props: any, ref: any) => {
    const { t } = useTranslation();
    const [bombieriRedirect, setBombieriRedirect] = useState(redirectOrange);
    const [ortexRedirect, setOrtexRedirect] = useState(redirectOrange);
    const bombieriRef = useRef<HTMLAnchorElement | null>(null);
    const ortexRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        if (bombieriRef.current) {
            bombieriRef.current.addEventListener("mouseover", () => setBombieriRedirect(redirectDarkGrey));
            bombieriRef.current.addEventListener("mouseout", () => setBombieriRedirect(redirectOrange));
        }
        if (ortexRef.current) {
            ortexRef.current.addEventListener("mouseover", () => setOrtexRedirect(redirectDarkGrey));
            ortexRef.current.addEventListener("mouseout", () => setOrtexRedirect(redirectOrange));
        }
    }, []);

    return (
        <section className={styles.Work} ref={ref}>
            <div>
                <p className={styles.heading}>{t("WORK_EXPERIENCE")}</p>
                <div>
                    <div className={styles.ortex}>
                        <div className={styles.work}>
                            <p className={styles.year}>Mar 2021 {"->"} Date.now()</p>
                            <p className={styles.title}>
                                {t("FRONTEND_DEVELOPER") + " - "}
                                <a href="https://ortex.com" target="_blank" rel="noopener noreferrer" ref={ortexRef}>
                                    ORTEX <img src={ortexRedirect} alt="redirect" />
                                </a>
                            </p>
                            <p className={styles.description}>{t("ORTEX_EXPERIENCE")}</p>
                        </div>
                    </div>
                    <div className={styles.teacher}>
                        <div className={styles.work}>
                            <p className={styles.year}>
                                Sep 2020 {"->"} Nov 2020 & May 2021 {"->"} Jul 2021
                            </p>
                            <p className={styles.title}>{t("PROGRAMMING_TEACHER")}</p>
                            <p className={styles.description}>
                                {t("TEACHER_EXPERIENCE_1")}
                                <a href="https://cdeluruguay.gob.ar/concepcion-de-programadores/" target="_blank" rel="noopener noreferrer">
                                    {t("HERE")}
                                </a>
                                .
                            </p>
                            <ul className={styles.description}>
                                <li>
                                    <p>{t("TEACHER_EXPERIENCE_2")}</p>
                                </li>
                                <li>
                                    <p>{t("TEACHER_EXPERIENCE_3")}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.talk}>
                        <p className={styles.heading}>{t("PARTICIPATIONS")}</p>
                        <div className={styles.participation}>
                            <p className={styles.year}>Oct 2020</p>
                            <p className={styles.title}>{t("TALK")}</p>
                            <p className={styles.description}>
                                {t("TALK_EXPERIENCE_1")}
                                <a href="https://www.youtube.com/watch?v=7fnpmdUoJb0" target="_blank" rel="noopener noreferrer">
                                    {t("HERE")}
                                </a>
                                {t("TALK_EXPERIENCE_2")}
                                <span>{t("TALK_EXPERIENCE_3")}</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.bombieri}>
                        <div className={styles.work}>
                            <p className={styles.year}>Sep 2019 {"->"} Feb 2021</p>
                            <p className={styles.title}>
                                {t("FRONTEND_DEVELOPER") + " - "}
                                <a href="https://bombieri.com.ar" target="_blank" rel="noopener noreferrer" ref={bombieriRef}>
                                    BOMBIERI <img src={bombieriRedirect} alt="redirect" />
                                </a>
                            </p>
                            <p className={styles.description}>{t("BOMBIERI_EXPERIENCE_1")}</p>
                            <p className={styles.description}>{t("BOMBIERI_EXPERIENCE_2")}</p>
                            <ul className={styles.description}>
                                <li>
                                    <p>{t("BOMBIERI_EXPERIENCE_3")}</p>
                                </li>
                                <li>
                                    <p>{t("BOMBIERI_EXPERIENCE_4")}</p>
                                </li>
                                <li>
                                    <p>{t("AGILE_METHODOLOGIES")}.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.college}>
                        <p className={styles.heading}>{t("EDUCATION")}</p>
                        <div className={styles.education}>
                            <p className={styles.year}>Mar 2015 {"->"} Date.now()</p>
                            <p className={styles.title}>{t("DEGREE")}</p>
                            <p className={styles.description}>{t("DEGREE_EXPERIENCE_1")}</p>
                            <p className={styles.description}>{t("DEGREE_EXPERIENCE_2")}</p>
                            <p className={styles.description}>{t("DEGREE_EXPERIENCE_3")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Work;
