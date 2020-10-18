import React from "react";
import "./Home.scss";
import Name from "../name/Name";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <section className="Home">
            <div className="background"></div>
            <Name />
            <div className="welcome-text">
                <p>{t("WELCOME_TEXT")}<br />{t("FULLSTACK")}</p>
            </div>
        </section>
    );
};

export default Home;
