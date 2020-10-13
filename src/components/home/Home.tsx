import React, { useState, useEffect } from "react";
import "./Home.scss";
import Name from "../name/Name";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    const [name, setName] = useState(true);

    useEffect(() => {
        setInterval(() => {
            setName(false);
            setName(true);
        }, 6500);
    }, []);

    return (
        <div className="Home">
            <div className="background"></div>
            {name && <Name />}
            <div className="welcome-text">
                <p>{t("WELCOME_TEXT")}<br />{t("FULLSTACK")}</p>
            </div>
        </div>
    );
};

export default Home;
