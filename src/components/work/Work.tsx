import React, { forwardRef, useState, useEffect, useRef } from "react";
import "./Work.scss";
import redirectOrange from "../../assets/redirect-orange.png";
import redirectDarkGrey from "../../assets/redirect-darkgrey.png";

const Work = forwardRef((props: any, ref: any) => {
    const [redirectImage, setRedirectImage] = useState(redirectOrange);
    const bombieriRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        if (bombieriRef.current) {
            bombieriRef.current.addEventListener("mouseover", () => setRedirectImage(redirectDarkGrey));
            bombieriRef.current.addEventListener("mouseout", () => setRedirectImage(redirectOrange));
        }
    }, []);

    return (
        <section className="Work" ref={ref}>
            <div>
                <div className="work">
                    <p>Work Experience</p>
                    <div className="bombieri">
                        <p className="year">2019 {"->"} Date.now()</p>
                        <p className="title">
                            FRONTEND DEVELOPER -{" "}
                            <a href="https://bombieri.com.ar" target="_blank" rel="noopener noreferrer" ref={bombieriRef}>
                                BOMBIERI <img src={redirectImage} alt="redirect" />
                            </a>
                        </p>
                        <p className="description">
                            I started as a frontend developer, but after a few month I moved to an agile team for a client in the insurance industry, and in there, my first works were related to the
                            backend. Now I'm more focus on the client side of the applications we develop.
                        </p>
                        <p className="description">A bit about what I do:</p>
                        <ul className="description">
                            <li>
                                <p>Responsive web and mobile development. (Angular & Ionic)</p>
                            </li>
                            <li>
                                <p>APIs and web services consumption and development. (Java & Spring)</p>
                            </li>
                            <li>
                                <p>Agile methodologies. (SCRUM)</p>
                            </li>
                        </ul>
                    </div>
                    <div className="teacher">
                        <p className="year">2020</p>
                        <p className="title">PROGRAMMING TEACHER</p>
                        <p className="description">
                            I taught the basics of web development in a programme implemented by Bombieri and the regional faculty to promote the local industry and give the opportunity to people who
                            wanted to take their first steps in the IT world.
                        </p>
                        <ul className="description">
                            <li>
                                <p>Course Duration: 90hs.</p>
                            </li>
                            <li>
                                <p>Curriculum: HTML, CSS, BootStrap, JavaScript, jQuery, GIT & GitHub.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="education">
                    <p>Education</p>
                    <div className="college">
                        <p className="year">2015 {"->"} Date.now()</p>
                        <p className="title">INDUSTRIAL MANAGEMENT DEGREE</p>
                        <ul className="description">
                            <li>
                                <p>UTN - FRCU (National Technology University).</p>
                            </li>
                            <li>
                                <p>4° year ended.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="participations">
                    <p>Participations</p>
                    <div className="talk">
                        <p className="year">2020</p>
                        <p className="title">DIGITAL TRANSFORMATION TALK</p>
                        <p className="description">
                            In October 2020, I gave a live virtual talk for university students about the process of digital transformation in companies, and how digital transformation helps growth
                            even in times of crisis. Click <a href="https://www.youtube.com/watch?v=7fnpmdUoJb0">here</a> to take a look at it! <span>- in spanish :(</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Work;
