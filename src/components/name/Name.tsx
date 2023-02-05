import styles from "./Name.module.scss";
import Typewriter from "typewriter-effect";

const Name = () => {
    return (
        <div className={styles.Name}>
            <style jsx global>{`
                .Typewriter {
                    font-family: "Source Code Pro", monospace;
                    font-weight: bold;
                    font-size: 16vmin;
                }
            `}</style>
            <Typewriter
                onInit={typewriter => {
                    typewriter.typeString("<").typeString("Manu /").typeString(">").pauseFor(5000).start();
                }}
                options={{ loop: true }}
            />
        </div>
    );
};

export default Name;
