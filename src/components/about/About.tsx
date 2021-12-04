import styles from "./About.module.scss";
import { forwardRef } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

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
                <p>
                    {t("NICE_TO_MEET_YOU_1")} <br className={styles.break} />
                    {t("NICE_TO_MEET_YOU_2")} <span>Manuel Sabarrós</span>
                    <br />
                    {t("NICE_TO_MEET_YOU_3")} <br className={styles.break} />
                    {t("NICE_TO_MEET_YOU_4")}
                </p>
                <div className={styles.info}>
                    <div className={styles.aboutMe}>
                        {aboutMe.map(el => (
                            <div key={el.key}>
                                <p>{t(el.text)}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.profilePicture}>
                        <Image src="/assets/profile-picture.png" alt="profile-pic" layout="fill" />
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
