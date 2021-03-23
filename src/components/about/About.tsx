import { forwardRef } from "react";
import styles from "./About.module.scss";
import profilePicture from "../../assets/profile-picture.jpg";
import { useTranslation } from "react-i18next";

const aboutMe = [
    { key: 0, text: "MY_EXPERIENCE" },
    { key: 1, text: "TECH_IS_MY_PASSION" },
    { key: 2, text: "BUSINESS_ANALYSIS_EASE" },
];

const About = forwardRef(({ contact }: any, ref: any) => {
    const { t } = useTranslation();

    return (
        <section className={styles.About} ref={ref}>
            <div>
                <div className={styles.welcome}>
                    <div>
                        <p>{t("NICE_TO_MEET_YOU_1")}</p> <p>{t("NICE_TO_MEET_YOU_2")} <span>Manuel Sabarrós</span></p>
                    </div>
                    <div>
                        <p>{t("NICE_TO_MEET_YOU_3")}</p> <p>{t("NICE_TO_MEET_YOU_4")}</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.aboutMe}>
                        {aboutMe.map((el) => (
                            <div key={el.key}>
                                <p>{t(el.text)}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.profilePicture}>
                        <img src={profilePicture} alt="profile-pic" />
                    </div>
                </div>
                <div className={styles.button}>
                    <button onClick={() => contact()}>{t("CONTACT_ME")}</button>
                </div>
            </div>
        </section>
    );
});

export default About;
