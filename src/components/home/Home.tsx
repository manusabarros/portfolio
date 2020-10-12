import React, { useState, useEffect } from "react";
import "./Home.scss";
import background from "../../assets/vinyl3.jpg";
import Name from "../name/Name";

const Home = () => {
    // eslint-disable-next-line no-restricted-globals
    const [width, setWidth] = useState(undefined as any); const [height, setHeight] = useState(undefined as any);
    const [name, setName] = useState(true);

    window.addEventListener("resize", () => {
        if (width <= window.innerWidth) setWidth(window.innerWidth);
    });

    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        if (screen.width > screen.height) setWidth(screen.width);
        else setHeight(window.innerHeight);
        setInterval(() => {
            setName(false);
            setName(true);
        }, 6500);
    }, []);

    return (
        <div className="Home">
            <div className="background">
                <img src={background} alt="building" width={width} height={height} />
            </div>
            {name && <Name />}
        </div>
    );
};

export default Home;
