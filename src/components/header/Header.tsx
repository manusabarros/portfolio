import React, { useEffect, useRef } from "react";
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

    const goTo = (link: any) => () => onGoTo(link);

    const changeLanguage = (lng: string) => () => i18n.changeLanguage(lng);

    return (
        <header ref={headerRef}>
            <div className="links">
                <div>
                    <div>
                        <span onClick={goTo(Links.HOME)}>{t(Links.HOME)}</span>
                        <span onClick={goTo(Links.ABOUT)}>{t(Links.ABOUT)}</span>
                        <span onClick={goTo(Links.WORK)}>{t(Links.WORK)}</span>
                    </div>
                    <div>
                        <span onClick={goTo(Links.SKILLS)}>{t(Links.SKILLS)}</span>
                        <span onClick={goTo(Links.CONTACT)}>{t(Links.CONTACT)}</span>
                    </div>
                </div>
            </div>
            <div className="name">
                <span ref={nameRef}>
                    manuel
                    <br />
                    sabarrós
                </span>
            </div>
            <div className="languages">
                <span onClick={changeLanguage("en")}>EN</span>/<span onClick={changeLanguage("es")}>ES</span>
            </div>
        </header>
    );
};

export default Header;
