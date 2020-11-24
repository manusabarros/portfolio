import React, { forwardRef } from "react";
import "./About.scss";
import profilePicture from "../../assets/profile-picture.jpeg";
import { useTranslation } from "react-i18next";

const aboutMe = [
    { key: 0, text: "MY_EXPERIENCE" },
    { key: 1, text: "TECH_IS_MY_PASSION" },
    { key: 2, text: "BUSINESS_ANALYSIS_EASE" },
];

const About = forwardRef((props: any, ref: any) => {
    const { t } = useTranslation();

    return (
        <section className="About" ref={ref}>
            <div>
                <p dangerouslySetInnerHTML={{ __html: t("NICE_TO_MEET_YOU") }}></p>
                <div>
                    <div className="about-me">
                        {aboutMe.map(el => (
                            <div key={el.key}>
                                <p>{t(el.text)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="profile-picture">
                        <img src={profilePicture} alt="profile-pic" />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default About;
