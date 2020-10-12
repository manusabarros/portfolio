import React, { useState, useEffect } from "react";
import "./Home.scss";
import Name from "../name/Name";

const Home = () => {
    const [name, setName] = useState(true);

    useEffect(() => {
        setInterval(() => {
            setName(false);
            setName(true);
        }, 6500);
    }, []);

    return (
        <div className="Home">
            <div className="background"></div>
            {name && <Name />}
            <div className="welcome-text">
                <h1>Hello, I'm Manuel Sabarrós,</h1>
                <h1>a FullStack Developer</h1>
            </div>
        </div>
    );
};

export default Home;
