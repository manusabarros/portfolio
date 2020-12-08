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
                    <img src={computer} alt="computer"/>
                    <p className="title">FRONTEND</p>
                    <div>
                        {frontendSkills.map(skill => (
                            <p key={skill} className="skill">{skill}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <img src={server} alt="server"/>
                    <p className="title">BACKEND</p>
                    <div>
                        {backendSkills.map(skill => (
                            <p key={skill} className="skill">{skill}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <img src={cloud} alt="cloud"/>
                    <p className="title">OTHERS</p>
                    <div>
                        {othersSkills.map(skill => (
                            <p key={skill} className="skill">{skill}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Skills;
