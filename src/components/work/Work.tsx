import React, { forwardRef, useState, useEffect, useRef } from "react";
import "./Work.scss";
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
        <section className="Work" ref={ref}>
            <div>
                <div className="work">
                    <p>{t("WORK_EXPERIENCE")}</p>
                    <div className="bombieri">
                        <p className="year">2019 {"->"} Date.now()</p>
                        <p className="title">
                            {t("FRONTEND_DEVELOPER") + " - "}
                            <a href="https://bombieri.com.ar" target="_blank" rel="noopener noreferrer" ref={bombieriRef}>
                                BOMBIERI <img src={redirectImage} alt="redirect" />
                            </a>
                        </p>
                        <p className="description">{t("BOMBIERI_EXPERIENCE_1")}</p>
                        <p className="description">{t("BOMBIERI_EXPERIENCE_2")}</p>
                        <ul className="description">
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
                    <div className="teacher">
                        <p className="year">2020</p>
                        <p className="title">{t("PROGRAMMING_TEACHER")}</p>
                        <p className="description">{t("TEACHER_EXPERIENCE_1")}</p>
                        <ul className="description">
                            <li>
                                <p>{t("TEACHER_EXPERIENCE_2")}</p>
                            </li>
                            <li>
                                <p>{t("TEACHER_EXPERIENCE_3")}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="education">
                    <p>{t("EDUCATION")}</p>
                    <div className="college">
                        <p className="year">2015 {"->"} Date.now()</p>
                        <p className="title">{t("DEGREE")}</p>
                        <p className="description">{t("DEGREE_EXPERIENCE_1")}</p>
                        <p className="description">{t("DEGREE_EXPERIENCE_2")}</p>
                        <p className="description">{t("DEGREE_EXPERIENCE_3")}</p>
                    </div>
                </div>
                <div className="participations">
                    <p>{t("PARTICIPATIONS")}</p>
                    <div className="talk">
                        <p className="year">2020</p>
                        <p className="title">{t("TALK")}</p>
                        <p className="description">
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
