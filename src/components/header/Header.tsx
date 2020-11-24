import React, { useEffect, useRef, useCallback } from "react";
import "./Header.scss";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Colors } from "../../App";

export enum Links {
    HOME = "HOME",
    ABOUT = "ABOUT",
    WORK = "WORK",
    SKILLS = "SKILLS",
    CONTACT = "CONTACT",
}

const links = [Links.HOME, Links.ABOUT, Links.WORK, Links.SKILLS, Links.CONTACT];

const animationOptions: KeyframeAnimationOptions = { duration: 500, fill: "forwards" };

const Header = ({ onGoTo, color }: any) => {
    const { t } = useTranslation();
    const headerRef = useRef<HTMLElement | null>(null);
    const nameRef = useRef<HTMLElement | null>(null);
    const colorRef = useRef(color);

    useEffect(() => {
        if (headerRef.current && nameRef.current) {
            headerRef.current.animate({ backgroundColor: [colorRef.current, color] }, animationOptions);
            if (color === colorRef.current) nameRef.current.animate({ color: [color, Colors.ORANGE] }, animationOptions);
            else nameRef.current.animate({ color: [color, colorRef.current] }, animationOptions);
            colorRef.current = color;
        }
    }, [color]);

    const goTo = useCallback((link: any) => () => onGoTo(link), [onGoTo]);

    const changeLanguage = (lng: string) => () => i18n.changeLanguage(lng);

    return (
        <header ref={headerRef}>
            <div className="links">
                {links.map((link, i) => <span key={i} onClick={goTo(link)}>{t(link).toUpperCase()}</span> )}
            </div>
            <div className="name">
                <span ref={nameRef}>manuel<br/>sabarrós</span>
            </div>
            <div className="languages">
                <span onClick={changeLanguage("en")}>EN</span>
                /
                <span onClick={changeLanguage("es")}>ES</span>
            </div>
        </header>
    );
};

export default Header;
