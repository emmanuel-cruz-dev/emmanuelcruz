import { TFunction } from "i18next";

import HTMLLogo from "../assets/icons/html-logo.png";
import CSSLogo from "../assets/icons/css-logo.png";
import JavascriptLogo from "../assets/icons/javascript-logo.png";
import TypescriptLogo from "../assets/icons/typescript-logo.png";
import ReactLogo from "../assets/icons/react-logo.png";
import AngularLogo from "../assets/icons/angular-logo.png";
import NextLogo from "../assets/icons/nextjs-logo.png";
import ReactNativeLogo from "../assets/icons/react-native-logo.png";
import ZustandLogo from "../assets/icons/zustand-logo.png";
import TailwindLogo from "../assets/icons/tailwindcss-logo.png";
import SassLogo from "../assets/icons/sass-logo.png";
import BootstrapLogo from "../assets/icons/bootstrap-logo.png";
import ReactBootstrapLogo from "../assets/icons/react-bootstrap-logo.png";
import ShadcnLogo from "../assets/icons/shadcn-logo.png";
import PrimeNGLogo from "../assets/icons/primeng-logo.png";

import NodeLogo from "../assets/icons/nodejs-logo.png";
import ExpressLogoNegro from "../assets/icons/express-negro-logo.png";
import JavaLogo from "../assets/icons/java-logo.png";
import SpringBootLogo from "../assets/icons/spring-boot-logo.png";
import NestLogo from "../assets/icons/nestjs-logo.png";
import MySQLLogo from "../assets/icons/mysql-logo.png";
import MongoDBLogo from "../assets/icons/mongodb-logo.png";
import FirestoreLogo from "../assets/icons/firestore-logo.png";
import PrismaLogo from "../assets/icons/prisma-logo.png";
import TypeORMLogo from "../assets/icons/typeorm-logo.png";
import SwaggerLogo from "../assets/icons/swagger-logo.png";

import GitLogo from "../assets/icons/git-logo.png";
import GithubLogo from "../assets/icons/github-logo.png";
import PostmanLogo from "../assets/icons/postman-logo.png";
import InsomniaLogo from "../assets/icons/insomnia-logo.png";
import FigmaLogo from "../assets/icons/figma-logo.png";
import PhotoshopLogo from "../assets/icons/photoshop-logo.png";
import WebflowLogo from "../assets/icons/webflow-logo.png";

import JiraLogo from "../assets/icons/jira-logo.png";
import ClickupLogo from "../assets/icons/clickup-logo.png";
import NotionLogo from "../assets/icons/notion-logo.png";
import TrelloLogo from "../assets/icons/trello-logo.png";

import { SkillCategory } from "../types/types";

export const getSkillsByCategory = (t: TFunction): SkillCategory[] => {
  return [
    {
      title: "Frontend",
      mainSkills: [
        { name: "HTML", logo: HTMLLogo, title: t("sections.skills.html") },
        { name: "CSS", logo: CSSLogo, title: t("sections.skills.css") },
        {
          name: "JavaScript",
          logo: JavascriptLogo,
          title: t("sections.skills.javascript"),
        },
        {
          name: "TypeScript",
          logo: TypescriptLogo,
          title: t("sections.skills.typescript"),
        },
        { name: "React", logo: ReactLogo, title: t("sections.skills.react") },
        {
          name: "Angular",
          logo: AngularLogo,
          title: t("sections.skills.angular"),
        },
        {
          name: "Next.js",
          logo: NextLogo,
          title: t("sections.skills.nextjs"),
        },
        {
          name: "React Native",
          logo: ReactNativeLogo,
          title: t("sections.skills.reactNative"),
        },
        {
          name: "Zustand",
          logo: ZustandLogo,
          title: t("sections.skills.zustand"),
        },
        {
          name: "Tailwind CSS",
          logo: TailwindLogo,
          title: t("sections.skills.tailwind"),
        },
        { name: "Sass", logo: SassLogo, title: t("sections.skills.sass") },
        {
          name: "Bootstrap",
          logo: BootstrapLogo,
          title: t("sections.skills.bootstrap"),
        },
        {
          name: "React Bootstrap",
          logo: ReactBootstrapLogo,
          title: t("sections.skills.reactBootstrap"),
        },
        {
          name: "Shadcn/ui",
          logo: ShadcnLogo,
          title: t("sections.skills.shadcn"),
        },
        {
          name: "PrimeNG",
          logo: PrimeNGLogo,
          title: t("sections.skills.primeng"),
        },
      ],
      otherSkills: [],
    },
    {
      title: t("sections.skills.backend"),
      mainSkills: [
        { name: "Node.js", logo: NodeLogo, title: t("sections.skills.nodejs") },
        {
          name: "Express",
          logo: ExpressLogoNegro,
          title: t("sections.skills.express"),
        },
        {
          name: "Java",
          logo: JavaLogo,
          title: t("sections.skills.java"),
        },
        {
          name: "Spring Boot",
          logo: SpringBootLogo,
          title: t("sections.skills.springBoot"),
        },
        {
          name: "NestJS",
          logo: NestLogo,
          title: t("sections.skills.nestjs"),
        },
        {
          name: "MySQL",
          logo: MySQLLogo,
          title: t("sections.skills.mysql"),
        },
        {
          name: "MongoDB",
          logo: MongoDBLogo,
          title: t("sections.skills.mongodb"),
        },
        {
          name: "Firebase",
          logo: FirestoreLogo,
          title: t("sections.skills.firebase"),
        },
        {
          name: "Prisma",
          logo: PrismaLogo,
          title: t("sections.skills.prisma"),
        },
        {
          name: "TypeORM",
          logo: TypeORMLogo,
          title: t("sections.skills.typeorm"),
        },
        {
          name: "Swagger",
          logo: SwaggerLogo,
          title: t("sections.skills.swagger"),
        },
      ],
      otherSkills: [],
    },
    {
      title: t("sections.skills.tools"),
      mainSkills: [
        { name: "Git", logo: GitLogo, title: t("sections.skills.git") },
        {
          name: "GitHub",
          logo: GithubLogo,
          title: t("sections.skills.github"),
        },
        {
          name: "Postman",
          logo: PostmanLogo,
          title: t("sections.skills.postman"),
        },
        {
          name: "Insomnia",
          logo: InsomniaLogo,
          title: t("sections.skills.insomnia"),
        },
        {
          name: "Figma",
          logo: FigmaLogo,
          title: t("sections.skills.figma"),
        },
        {
          name: "Photoshop",
          logo: PhotoshopLogo,
          title: t("sections.skills.photoshop"),
        },
        {
          name: "Webflow",
          logo: WebflowLogo,
          title: t("sections.skills.webflow"),
        },
      ],
      otherSkills: ["REST APIs", "GitFlow", "Arquitectura Limpia"],
    },
    {
      title: t("sections.skills.management"),
      mainSkills: [
        {
          name: "Jira",
          logo: JiraLogo,
          title: t("sections.skills.jira"),
        },
        {
          name: "ClickUp",
          logo: ClickupLogo,
          title: t("sections.skills.clickUp"),
        },
        {
          name: "Notion",
          logo: NotionLogo,
          title: t("sections.skills.notion"),
        },
        {
          name: "Trello",
          logo: TrelloLogo,
          title: t("sections.skills.trello"),
        },
      ],
      otherSkills: ["Scrum", "Kanban"],
    },
  ];
};
