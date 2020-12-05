import html from "../../assets/html.png";
import css from "../../assets/css.png";
import sass from "../../assets/sass.png";
import javascript from "../../assets/javascript.png";
import typescript from "../../assets/typescript.png";
import react from "../../assets/react.png";
import angular from "../../assets/angular.png";
import ionic from "../../assets/ionic.png";
import nodejs from "../../assets/nodejs.png";
import expressjs from "../../assets/expressjs.png";
import graphQL from "../../assets/graphql.png";
import postgresql from "../../assets/postgresql.png";
import mongoDB from "../../assets/mongodb.png";
import git from "../../assets/git.png";
import docker from "../../assets/docker.png";
import aws from "../../assets/aws.png";

interface Pictures {
    src: string;
    alt: string;
}

export const pictures: Array<Pictures> = [
    { src: html, alt: "html" },
    { src: css, alt: "css" },
    { src: sass, alt: "sass" },
    { src: javascript, alt: "javascript" },
    { src: typescript, alt: "typescript" },
    { src: react, alt: "react" },
    { src: angular, alt: "angular" },
    { src: ionic, alt: "ionic" },
    { src: nodejs, alt: "nodejs" },
    { src: expressjs, alt: "expressjs" },
    { src: graphQL, alt: "graphQL" },
    { src: postgresql, alt: "postgresql" },
    { src: mongoDB, alt: "mongoDB" },
    { src: git, alt: "git" },
    { src: docker, alt: "docker" },
    { src: aws, alt: "aws" },
];
