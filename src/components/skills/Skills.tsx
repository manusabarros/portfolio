import React, { forwardRef } from "react";
import "./Skills.scss";
import computer from "../../assets/computer.svg";
import server from "../../assets/server.svg";
import cloud from "../../assets/cloud.svg";

const frontendSkills = ["HTML - CSS - SASS", "JavaScript - TypeScript", "React", "Angular", "Ionic"];
const backendSkills = ["Node.js", "REST APIs (Express.js)", "GraphQL (Apollo)", "SQL (PostgreSQL)", "NoSQL (MongoDB)"];
const othersSkills = ["GIT", "GNU/Linux", "Docker", "AWS (EC2, S3, RDS, Route53)", "Agile Methodologies (SCRUM)"];

const Skills = forwardRef((props: any, ref: any) => {
    return (
        <section className="Skills" ref={ref}>
            <div>
                <div>
                    <div className="image">
                        <img src={computer} alt="computer"/>
                    </div>
                    <p>FRONTEND</p>
                    <div className="skills">
                        {frontendSkills.map(skill => (
                            <p key={skill}>{skill}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="image">
                        <img src={server} alt="server"/>
                    </div>
                    <p>BACKEND</p>
                    <div className="skills">
                        {backendSkills.map(skill => (
                            <p key={skill}>{skill}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="image">
                        <img src={cloud} alt="cloud"/>
                    </div>
                    <p>OTHERS</p>
                    <div className="skills">
                        {othersSkills.map(skill => (
                            <p key={skill}>{skill}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Skills;
