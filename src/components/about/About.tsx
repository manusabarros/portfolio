import React, { forwardRef } from "react";
import "./About.scss";

const About = forwardRef((props: any, ref: any) => {
    return (
        <section className="About" ref={ref}>
            <h1>Who am I?</h1>
            <p>Hi! Nice to meet you! My name is Manuel Sabarrós and I'm a software developer living in Argentina.</p>
            <p>Technology is my passion</p>
        </section>
    );
});

export default About;
