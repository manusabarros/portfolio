import React, { forwardRef } from "react";
import "./Skills.scss";
import { pictures } from "./pictures";

const Skills = forwardRef((props: any, ref: any) => {
    return (
        <section className="Skills" ref={ref}>
            <div>
                {pictures.map(({ src, alt }) => (
                    <div key={alt}>
                        <img src={src} alt={alt} />
                    </div>
                ))}
            </div>
        </section>
    );
});

export default Skills;
