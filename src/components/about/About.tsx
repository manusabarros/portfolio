import React, { forwardRef, useEffect, useState } from "react";
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
    const [hello, setHello] = useState("NICE_TO_MEET_YOU_1");

    const splitText = () => {
        if (document.documentElement.clientWidth >= 768) setHello("NICE_TO_MEET_YOU_1");
        else setHello("NICE_TO_MEET_YOU_2");
    };

    useEffect(() => {
        splitText();
        window.addEventListener("resize", splitText);
    }, []);

    return (
        <section className="About" ref={ref}>
            <div>
                <p dangerouslySetInnerHTML={{ __html: t(hello) }}></p>
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
