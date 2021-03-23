import { forwardRef, useState, useEffect, useRef } from "react";
import styles from "./Work.module.scss";
import redirectOrange from "../../assets/redirect-orange.png";
import redirectDarkGrey from "../../assets/redirect-darkgrey.png";
import { useTranslation } from "react-i18next";

const Work = forwardRef((props: any, ref: any) => {
    const { t } = useTranslation();
    const [redirectImage, setRedirectImage] = useState(redirectOrange);
    const bombieriRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        if (bombieriRef.current) {
            bombieriRef.current.addEventListener("mouseover", () => setRedirectImage(redirectDarkGrey));
            bombieriRef.current.addEventListener("mouseout", () => setRedirectImage(redirectOrange));
        }
    }, []);

    return (
        <section className={styles.Work} ref={ref}>
            <div>
                <div className={styles.work}>
                    <p>{t("WORK_EXPERIENCE")}</p>
                    <div className={styles.bombieri}>
                        <p className={styles.year}>2019 {"->"} Date.now()</p>
                        <p className={styles.title}>
                            {t("FRONTEND_DEVELOPER") + " - "}
                            <a href="https://bombieri.com.ar" target="_blank" rel="noopener noreferrer" ref={bombieriRef}>
                                BOMBIERI <img src={redirectImage} alt="redirect" />
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
                    <div className={styles.teacher}>
                        <p className={styles.year}>2020</p>
                        <p className={styles.title}>{t("PROGRAMMING_TEACHER")}</p>
                        <p className={styles.description}>{t("TEACHER_EXPERIENCE_1")}</p>
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
                <div className={styles.education}>
                    <p>{t("EDUCATION")}</p>
                    <div className={styles.college}>
                        <p className={styles.year}>2015 {"->"} Date.now()</p>
                        <p className={styles.title}>{t("DEGREE")}</p>
                        <p className={styles.description}>{t("DEGREE_EXPERIENCE_1")}</p>
                        <p className={styles.description}>{t("DEGREE_EXPERIENCE_2")}</p>
                        <p className={styles.description}>{t("DEGREE_EXPERIENCE_3")}</p>
                    </div>
                </div>
                <div className={styles.participations}>
                    <p>{t("PARTICIPATIONS")}</p>
                    <div className={styles.talk}>
                        <p className={styles.year}>2020</p>
                        <p className={styles.title}>{t("TALK")}</p>
                        <p className={styles.description}>
                            {t("TALK_EXPERIENCE_1")}
                            <a href="https://www.youtube.com/watch?v=7fnpmdUoJb0" target="_blank" rel="noopener noreferrer">
                                {t("TALK_EXPERIENCE_2")}
                            </a>
                            {t("TALK_EXPERIENCE_3")}
                            <span>{t("TALK_EXPERIENCE_4")}</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Work;
