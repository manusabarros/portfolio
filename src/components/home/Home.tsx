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
        </div>
    );
};

export default Home;
