import React, { forwardRef } from "react";
import "./About.scss";
import profilePicture from "../../assets/profile-picture.png";
import { useTranslation } from "react-i18next";

const aboutMe = [
    { key: 0, text: "MY_EXPERIENCE" },
    { key: 1, text: "TECH_IS_MY_PASSION" },
    { key: 2, text: "BUSINESS_ANALYSIS_EASE" },
];

const About = forwardRef(({ contact }: any, ref: any) => {
    const { t } = useTranslation();

    return (
        <section className="About" ref={ref}>
            <div>
                <div className="welcome">
                    <div>
                        <p>{t("NICE_TO_MEET_YOU_1")}</p> <p>{t("NICE_TO_MEET_YOU_2")} <span>Manuel Sabarrós</span></p>
                    </div>
                    <div>
                        <p>{t("NICE_TO_MEET_YOU_3")}</p> <p>{t("NICE_TO_MEET_YOU_4")}</p>
                    </div>
                </div>
                <div className="info">
                    <div className="about-me">
                        {aboutMe.map((el) => (
                            <div key={el.key}>
                                <p>{t(el.text)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="profile-picture">
                        <img src={profilePicture} alt="profile-pic" />
                    </div>
                </div>
                <div className="button">
                    <button onClick={() => contact()}>{t("CONTACT_ME")}</button>
                </div>
            </div>
        </section>
    );
});

export default About;
