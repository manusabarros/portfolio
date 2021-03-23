import { forwardRef } from "react";
import styles from "./Home.module.scss";
import coffeeGif from "../../assets/coffee.gif";
import Name from "../name/Name";
import { useTranslation } from "react-i18next";

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
                        <img src={coffeeGif} alt="coffee-gif" />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Home;
