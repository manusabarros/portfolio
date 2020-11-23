import React, { forwardRef, useRef, useEffect } from "react";
import "./Home.scss";
import Name from "../name/Name";
import { useTranslation } from "react-i18next";

const Home = forwardRef((props: any, ref: any) => {
    const { t, i18n } = useTranslation();
    const text = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        if (text.current) text.current.innerHTML = i18n.t("A");
    }, []);

    return (
        <section className="Home" ref={ref}>
            <div className="welcome">
                <div className="welcome">
                    <div className="text top-text">
                        <p>{t("HELLO")}</p>
                    </div>
                    <Name />
                    <div className="text bottom-text">
                        <p ref={text}></p>
                    </div>
                </div>
                <div className="gif">
                    <div>
                        <img src="https://media.giphy.com/media/RIvo7FJpGa1eGtkfZ3/giphy.gif" alt="coffee-gif" />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Home;
