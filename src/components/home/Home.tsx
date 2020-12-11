import React, { forwardRef } from "react";
import "./Home.scss";
import coffeeGif from "../../assets/coffee.gif";
import Name from "../name/Name";
import { useTranslation } from "react-i18next";

const Home = forwardRef((props: any, ref: any) => {
    const { t } = useTranslation();

    return (
        <section className="Home" ref={ref}>
            <div>
                <div className="welcome">
                    <div className="text">
                        <p className="top-text">{t("HELLO")}</p>
                    </div>
                    <Name />
                    <div className="text">
                        <p className="bottom-text" dangerouslySetInnerHTML={{ __html: t("A_DEVELOPER") }}></p>
                    </div>
                </div>
                <div className="gif">
                    <div>
                        <img src={coffeeGif} alt="coffee-gif" />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Home;
