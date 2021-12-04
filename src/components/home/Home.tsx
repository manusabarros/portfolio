import styles from "./Home.module.scss";
import { forwardRef } from "react";
import Name from "../name/Name";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Home = forwardRef((props: any, ref: any) => {
    const { t } = useTranslation();

    return (
        <section className={styles.Home} ref={ref}>
            <div>
                <div className={styles.welcome}>
                    <div className={styles.text}>
                        <p className={styles.topText}>{t("HELLO")}</p>
                    </div>
                    <Name />
                    <div className={styles.text}>
                        <p className={styles.bottomText} dangerouslySetInnerHTML={{ __html: t("A_DEVELOPER") }}></p>
                    </div>
                </div>
                <div className={styles.gif}>
                    <div>
                        <Image src="/assets/coffee.gif" alt="coffee-gif" layout="fill" />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Home;
