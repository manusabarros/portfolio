import React, { useEffect } from "react";
import "./Name.scss";

const name = "<Manu/>";

const Name = () => {
    useEffect(() => {
        const text = document.getElementById("name");
        if (text) {
            name.split("").forEach((c, i) => {
                setTimeout(() => text.innerText += c, i * 150);
            });
        }
        const line = document.getElementById("line");
        if (line) {
            setTimeout(() => {
                setInterval(() => line.classList.toggle("hidden"), 500);
            }, 1000);
        }
    }, []);

    return (
        <div className="Name">
            <span id="name"></span>
            <span id="line">|</span>
        </div>
    );
};

export default Name;
