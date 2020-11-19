import React, { forwardRef } from "react";
import "./Home.scss";
import Name from "../name/Name";
import { useTranslation } from "react-i18next";

const Home = forwardRef((props: any, ref: any) => {
    const { t } = useTranslation();

    return (
        <section className="Home" ref={ref}>
            <div className="welcome">
                <div className="welcome">
                    <div className="text top-text">
                        <p>{t("HELLO")}</p>
                    </div>
                    <Name />
                    <div className="text bottom-text">
                        <p>{t("A")}</p>
                        <p className="developer">&nbsp;{t("DEVELOPER")}&nbsp;</p>
                        <p>{t("BASED_ARGENTINA")}</p>
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
