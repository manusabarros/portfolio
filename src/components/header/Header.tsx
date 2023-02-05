import { useRef } from "react";
import styles from "./Header.module.scss";
import { useTranslation } from "next-i18next";
import { Colors } from "../../pages/v1/index";
import Link from "next/link";
import Image from "next/image";

export enum Links {
    HOME = "HOME",
    ABOUT = "ABOUT",
    WORK = "WORK",
    SKILLS = "SKILLS",
    CONTACT = "CONTACT",
}

const links = [Links.HOME, Links.ABOUT, Links.WORK, Links.SKILLS, Links.CONTACT];

const Header = ({ onGoTo, color: backgroundColor }: any) => {
    const { t } = useTranslation();
    const menuRef = useRef<HTMLDivElement>(null);

    const goTo = (link: any) => () => onGoTo(link);

    const closeMenu = () => {
        if (menuRef.current) {
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
        <header className={styles.Header} style={{ backgroundColor }}>
            <div className={styles.links}>
                <div className={styles.image}>
                    <Image src="/assets/menu.svg" alt="menu" onClick={toggleMenu} layout="fill" priority />
                </div>
                <div className={styles.menu}>
                    <div ref={menuRef}>
                        {links.map(link => (
                            <span key={link} onClick={goTo(link)}>
                                {t(link)}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.name} style={{ color: backgroundColor === Colors.WHITE ? Colors.ORANGE : Colors.WHITE }}>
                <span>
                    manuel
                    <br />
                    sabarrós
                </span>
            </div>
            <div className={styles.languages}>
                <Link href="/" locale="en" scroll={false}>EN</Link>
                /
                <Link href="/" locale="es" scroll={false}>ES</Link>
            </div>
        </header>
    );
};

export default Header;
