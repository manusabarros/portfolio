import React, { useEffect } from "react";
import "./Name.scss";

const text = "<Manu/>";

const Name = () => {
    useEffect(() => {
        const name = document.getElementById("name");
        if (name) {
            text.split("").forEach((c, i) => {
                setTimeout(() => name.textContent += c, i * 150);
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
