import React, { forwardRef } from "react";
import "./Skills.scss";

const Skills = forwardRef((props: any, ref: any) => {
    return (
        <section className="Skills" ref={ref}>
            <h1>Skills</h1>
        </section>
    );
});

export default Skills;
