import React, { useCallback } from "react";
import "./Header.scss";
import { useTranslation } from "react-i18next";

const links = ["HOME", "ABOUT ME", "WORK", "TECHNOLOGIES", "CONTACT ME"];

const Header = () => {
    const { t } = useTranslation();

    const goTo = useCallback((link: any) => {
        return () => {
            console.log(link);
        };
    }, []);

    return (
        <header>
            <div className="name">
                <span>manuel sabarrós</span>
            </div>
            <div className="links">
                {links.map((link, i) => <span key={i} onClick={goTo(link)}>{t(link).toUpperCase()}</span> )}
            </div>
        </header>
    );
};

export default Header;
