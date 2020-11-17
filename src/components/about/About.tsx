import React, { forwardRef } from "react";
import "./About.scss";
import profilePicture from "../../assets/profile-picture.jpg";

const About = forwardRef((props: any, ref: any) => {
    return (
        <section className="About" ref={ref}>
            <div>
                <div className="text">
                    <h1>WHO AM I?</h1>
                    <p>Hi! Nice to meet you! My name is Manuel Sabarrós and I'm a software developer living in Argentina.</p>
                    <p>I have experience in fullstack development, but my main expertise is the frontend world.
                        I love design beautiful websites and mobile apps and create platforms with great user experience.</p>
                    <p>Technology is my passion! I'm always learning new things to add to my skill set, especially modern ones,
                        so that I can help you by adding value to your project and delivering a high quality product.</p>
                    <p>And last but not least, I have ease for business analysis due to my university career that I'm currently studying,
                        so I can collaborate with solutions for many areas of your organization.</p>
                </div>
                <div className="profile-picture">
                    <img src={profilePicture} alt="profile-pic" />
                </div>
            </div>
        </section>
    );
});

export default About;
