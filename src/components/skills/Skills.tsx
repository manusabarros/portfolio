import styles from "./Skills.module.scss";
import { forwardRef } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Skills = forwardRef((props: any, ref: any) => {
    const { t } = useTranslation();
    const frontendSkills = ["HTML - CSS - SASS", "JavaScript - TypeScript", "React - Angular", "React Native - Ionic", "Next.js"];
    const backendSkills = ["Node.js", "REST APIs (Express.js)", "GraphQL (Apollo)", "SQL (PostgreSQL)", "NoSQL (MongoDB)"];
    const othersSkills = ["GIT", "GNU/Linux", "Docker", "AWS (EC2, S3, RDS, Route53)", t("AGILE_METHODOLOGIES")];

    return (
        <section className={styles.Skills} ref={ref}>
            <div>
                <p>{t("TECHNOLOGIES")}</p>
                <div>
                    <div>
                        <div className={styles.image}>
                            <div>
                                <Image src="/assets/computer.svg" alt="computer" layout="fill" />
                            </div>
                        </div>
                        <p>FRONTEND</p>
                        <div className={styles.skills}>
                            {frontendSkills.map(skill => (
                                <p key={skill}>{skill}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className={styles.image}>
                            <div>
                                <Image src="/assets/server.svg" alt="server" layout="fill" />
                            </div>
                        </div>
                        <p>BACKEND</p>
                        <div className={styles.skills}>
                            {backendSkills.map(skill => (
                                <p key={skill}>{skill}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className={styles.image}>
                            <div>
                                <Image src="/assets/cloud.svg" alt="cloud" layout="fill" />
                            </div>
                        </div>
                        <p>{t("OTHERS")}</p>
                        <div className={styles.skills}>
                            {othersSkills.map(skill => (
                                <p key={skill}>{skill}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Skills;
