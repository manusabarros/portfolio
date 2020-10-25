import React from "react";
import "./Home.scss";
import Name from "../name/Name";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <section className="Home">
            <div className="welcome">
                <div className="text top-text">
                    <span>{t("HELLO")}</span>
                </div>
                <Name />
                <div className="text bottom-text">
                    <span>{t("A")}</span>
                    <span className="developer">&nbsp;{t("DEVELOPER")}&nbsp;</span>
                    <span>{t("BASED_ARGENTINA")}</span>
                </div>
            </div>
        </section>
    );
};

export default Home;
