import React, { useEffect, useRef, useCallback } from "react";
import "./Header.scss";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export enum Links {
    HOME = "HOME",
    ABOUT = "ABOUT",
    WORK = "WORK",
    SKILLS = "SKILLS",
    CONTACT = "CONTACT",
}

const links = [Links.HOME, Links.ABOUT, Links.WORK, Links.SKILLS, Links.CONTACT];

const Header = ({ onGoTo, backgroundColor }: any) => {
    const { t } = useTranslation();
    const headerRef = useRef<HTMLElement | null>(null);
    const backgroundColorRef = useRef(backgroundColor);

    useEffect(() => {
        if (headerRef.current) {
            headerRef.current.animate({ backgroundColor: [backgroundColorRef.current, backgroundColor] }, { duration: 500, fill: "forwards" });
            backgroundColorRef.current = backgroundColor;
        }
    }, [backgroundColor]);

    const goTo = useCallback((link: any) => () => onGoTo(link), [onGoTo]);

    const changeLanguage = useCallback((lng: string) => () => i18n.changeLanguage(lng), []);

    return (
        <header ref={headerRef}>
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
