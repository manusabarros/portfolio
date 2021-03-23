import { useState, useEffect } from "react";
import styles from "./Name.module.scss";

const nameText = "<Manu />";
let showLine = true;

const Name = () => {
    const [show, setShow] = useState(true);
    const [name, setName] = useState("");
    const [line, setLine] = useState("|");

    useEffect(() => {
        let showInterval = setInterval(() => {
            setShow(false);
            setShow(true);
        }, 6500);
        let nameTimeout: NodeJS.Timeout;
        nameText.split("").forEach((c, i) => {
            nameTimeout = setTimeout(() => setName(nameText.slice(0, i + 1)), i * 150);
        });
        let lineInterval: NodeJS.Timeout;
        let lineTimeout = setTimeout(() => {
            lineInterval = setInterval(() => {
                if (showLine) setLine(" ");
                else setLine("|");
                showLine = !showLine;
            }, 500);
        }, 1000);
        return () => {
            clearInterval(showInterval);
            clearTimeout(nameTimeout);
            clearTimeout(lineTimeout);
            clearInterval(lineInterval);
        };
    }, [show]);

    return (
        <div className={styles.Name}>
            <p>
                {name}
                {line}
            </p>
        </div>
    );
};

export default Name;
