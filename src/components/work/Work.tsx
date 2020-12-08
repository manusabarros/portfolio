import React, { forwardRef } from "react";
import "./Work.scss";

const Work = forwardRef((props: any, ref: any) => {
    return (
        <section className="Work" ref={ref}>
            <div>
                <div className="experience">
                    <p className="title">Work Experience</p>
                    <div className="section">
                        <div className="bombieri">
                            <p className="year">2019 - Date.now()</p>
                            <p className="job-title">FRONTEND DEVELOPER - <a href="https://bombieri.com.ar" target="_blank" rel="noopener noreferrer">BOMBIERI®</a></p>
                            <p className="description">I started as a frontend developer, but after a few month I moved to an agile team for a client in the insurance industry.</p>
                            <p className="description">There, my first works were related to the backend, and now I'm more focus on the client side of the applications we develop.</p>
                            <p className="description">A bit about what I do:</p>
                            <ul className="description">
                                <li>Responsive web and mobile development. (Angular & Ionic)</li>
                                <li>APIs and web services consumption and development. (Java & Spring)</li>
                                <li>Agile methodologies (SCRUM).</li>
                            </ul>
                        </div>
                        <div className="programming-teacher">
                            <p className="year">2020</p>
                            <p className="job-title">PROGRAMMING TEACHER</p>
                            <p className="description">I taught the basics of web development in a programme implemented by Bombieri® and the regional faculty to promote the local industry and give the opportunity to people who wanted to take their first steps in the IT world.<br />
                            Course Duration: 90hs.<br />
                            Curriculum: HTML, CSS, BootStrap, JavaScript, jQuery, GIT & GitHub.</p>
                        </div>
                    </div>
                </div>
                <div className="education">
                    <p className="title">Education</p>
                    <div className="section">
                        <div className="university">
                            <p className="year">2015 - Date.now()</p>
                            <p className="job-title">INDUSTRIAL MANAGEMENT DEGREE</p>
                            <ul className="description">
                                <li>UTN - FRCU (National Technology University).</li>
                                <li>4° year ended.</li>
                            </ul>
                        </div>
                    </div>
                    <p className="title">Participations</p>
                    <div className="section">
                        <div className="speech">
                            <p className="year">2020</p>
                            <p className="job-title">DIGITAL TRANSFORMATION TALK</p>
                            <p className="description">In October 2020, I gave a live virtual talk for university students about the process of digital transformation in companies, and how digital transformation helps growth even in times of crisis. Click <a href="https://www.youtube.com/watch?v=7fnpmdUoJb0">here</a> to take a look at it! <span>- in spanish :(</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Work;
