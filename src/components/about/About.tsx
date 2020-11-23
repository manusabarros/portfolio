import React, { forwardRef, useRef, useEffect } from "react";
import "./About.scss";
import profilePicture from "../../assets/profile-picture.jpeg";
import { useTranslation } from "react-i18next";

const columns = [
    { key: 0, text: "MY_EXPERIENCE" },
    { key: 1, text: "TECH_IS_MY_PASSION" },
    { key: 2, text: "BUSINESS_ANALYSIS_EASE" },
];

const About = forwardRef((props: any, ref: any) => {
    const { t, i18n } = useTranslation();
    const whoAmI = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        if (whoAmI.current) whoAmI.current.innerHTML = i18n.t("NICE_TO_MEET_YOU");
    }, []);

    return (
        <section className="About" ref={ref}>
            <div>
                <div className="text">
                    <div>
                        <p ref={whoAmI}></p>
                        {columns.map(el => (
                            <div key={el.key} className="row">
                                <hr />
                                <p>{t(el.text)}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="profile-picture">
                    <div>
                        <img src={profilePicture} alt="profile-pic" />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default About;
