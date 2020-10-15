import React, { useState, useEffect, useCallback } from "react";
import "./Name.scss";

const text = "<Manu />";

const Name = () => {
    const [show, setShow] = useState(true);
    const [count, setCount] = useState(0);
    const [name, setName] = useState(text);
    const [line, setLine] = useState("|");

    const toggleLine = useCallback(() => {
        setCount(1);
        return setInterval(() => {
            if (line === "|") setLine(" ");
            else setLine("|");
        }, 500);
    }, [line]);

    useEffect(() => {
        const interval = setInterval(() => {
            setShow(false);
            setShow(true);
            setCount(0);
        }, 6500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        text.split("").forEach((c, i) => {
            setTimeout(() => setName(text.slice(0, i + 1)), i * 150);
        });
    }, [show]);

    useEffect(() => {
        let interval: any;
        if (count) interval = toggleLine();
        else setTimeout(() => interval = toggleLine(), 1000);
        return () => clearInterval(interval);
    }, [line, count]);

    return (
        <div className="Name">
            {show && (
                <div>
                    <span>{name}</span>
                    <span>{line}</span>
                </div>
            )}
        </div>
    );
};

export default Name;
