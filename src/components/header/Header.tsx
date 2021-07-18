import { useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { useTranslation } from "next-i18next";
import { Colors } from "../../pages/index";
import menu from "../../assets/menu.svg";
import Link from "next/link";

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
    const menuRef = useRef<HTMLDivElement | null>(null);
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

    const closeMenu = () => {
        if (menuRef.current) {
            console.log("CLOSE MENU");
            menuRef.current.classList.remove(styles.showMenu);
            menuRef.current.classList.add(styles.hideMenu);
            document.removeEventListener("click", closeMenu);
        }
    };

    const toggleMenu = () => {
        if (menuRef.current) {
            if (!menuRef.current.classList.value || menuRef.current.classList.contains(styles.hideMenu)) {
                menuRef.current.classList.remove(styles.hideMenu);
                menuRef.current.classList.add(styles.showMenu);
                setTimeout(() => document.addEventListener("click", closeMenu), 0);
            } else {
                menuRef.current.classList.remove(styles.showMenu);
                menuRef.current.classList.add(styles.hideMenu);
            }
        }
    };

    return (
        <header ref={headerRef} className={styles.Header}>
            <div className={styles.links}>
                <img src={menu} alt="menu" onClick={toggleMenu} />
                <div>
                    <div ref={menuRef}>
                        {links.map(link => (
                            <span key={link} onClick={goTo(link)}>
                                {t(link)}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.name}>
                <span ref={nameRef}>
                    manuel
                    <br />
                    sabarrós
                </span>
            </div>
            <div className={styles.languages}>
                <Link href="/" locale="en" scroll={false}>
                    <span>EN</span>
                </Link>
                /
                <Link href="/" locale="es" scroll={false}>
                    <span>ES</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
