import React, { useCallback } from "react";
import "./Header.scss";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const links = ["HOME", "ABOUT", "WORK", "SKILLS", "CONTACT"];

const Header = ({ onGoTo }: any) => {
    const { t } = useTranslation();

    const goTo = useCallback((link: any) => {
        return () => {
            onGoTo(link);
        };
    }, []);

    const changeLanguage = useCallback((lng: string) => {
        return () => {
            i18n.changeLanguage(lng);
        };
    }, []);

    return (
        <header>
            <div className="links">
                {links.map((link, i) => <span key={i} onClick={goTo(link)}>{t(link).toUpperCase()}</span> )}
            </div>
            <div className="name">
                <span>manuel<br/>sabarrós</span>
            </div>
            <div className="languages">
                <span className="language" onClick={changeLanguage("en")}>EN</span>
                <span>/</span>
                <span className="language" onClick={changeLanguage("es")}>ES</span>
            </div>
        </header>
    );
};

export default Header;
